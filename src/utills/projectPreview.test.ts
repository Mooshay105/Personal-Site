import { describe, expect, test } from "bun:test";
import { GET } from "@/app/api/project-preview/[id]/route";
import {
	buildScreenshotUrl,
	fetchProjectPreviewImage,
	getProjectPreviewSrc,
	hasLiveProjectUrl,
	isSuccessfulScreenshotResponse,
	resolveFallbackImageUrl,
} from "./projectPreview";
import type { Project } from "./types";

const liveProject: Project = {
	id: 10,
	title: "clann",
	primaryLink: "https://clann.malcolmjh.com/",
	secondaryLink: "",
	imageURL: "https://github.com/Mooshay105/cdn/blob/main/clann.png?raw=true",
	description: "Clann reference site",
};

const offlineProject: Project = {
	id: 5,
	title: "Custom Quote Program",
	primaryLink: "",
	secondaryLink: "",
	imageURL: "https://github.com/Mooshay105/cdn/blob/main/gabbaQuoteSite.png?raw=true",
	description: "Internal quote tool",
};

describe("hasLiveProjectUrl", () => {
	test("accepts http and https URLs", () => {
		expect(hasLiveProjectUrl("https://clann.malcolmjh.com/")).toBe(true);
		expect(hasLiveProjectUrl("http://example.com")).toBe(true);
	});

	test("rejects empty, invalid, and non-http URLs", () => {
		expect(hasLiveProjectUrl("")).toBe(false);
		expect(hasLiveProjectUrl("not-a-url")).toBe(false);
		expect(hasLiveProjectUrl("javascript:alert(1)")).toBe(false);
	});
});

describe("getProjectPreviewSrc", () => {
	test("uses the preview route when the project has a live primaryLink", () => {
		expect(getProjectPreviewSrc(liveProject)).toBe("/api/project-preview/10");
	});

	test("keeps the static imageURL when primaryLink is empty", () => {
		expect(getProjectPreviewSrc(offlineProject)).toBe(offlineProject.imageURL);
	});
});

describe("buildScreenshotUrl", () => {
	test("builds a 1200x800 72-hour non-animated thum.io URL", () => {
		expect(buildScreenshotUrl("https://clann.malcolmjh.com")).toBe(
			"https://image.thum.io/get/width/1200/crop/800/maxAge/72/allowJPG/noanimate/https://clann.malcolmjh.com/",
		);
	});
});

describe("resolveFallbackImageUrl", () => {
	test("rewrites GitHub blob ?raw=true URLs to raw.githubusercontent.com", () => {
		expect(
			resolveFallbackImageUrl(
				"https://github.com/Mooshay105/cdn/blob/main/clann.png?raw=true",
			),
		).toBe("https://raw.githubusercontent.com/Mooshay105/cdn/main/clann.png");
	});

	test("leaves non-GitHub URLs unchanged", () => {
		expect(resolveFallbackImageUrl("https://cdn.example.com/preview.png")).toBe(
			"https://cdn.example.com/preview.png",
		);
	});
});

describe("isSuccessfulScreenshotResponse", () => {
	test("accepts raster images with 2xx/3xx thum_status_code or none", () => {
		expect(
			isSuccessfulScreenshotResponse(
				new Response(new Uint8Array([1, 2, 3]), {
					status: 200,
					headers: { "content-type": "image/jpeg", "thum_status_code": "200" },
				}),
			),
		).toBe(true);
		expect(
			isSuccessfulScreenshotResponse(
				new Response(new Uint8Array([1, 2, 3]), {
					status: 200,
					headers: { "content-type": "image/png" },
				}),
			),
		).toBe(true);
	});

	test("rejects error thum_status_code, non-image, SVG, and HTTP error responses", () => {
		expect(
			isSuccessfulScreenshotResponse(
				new Response(new Uint8Array([1]), {
					status: 200,
					headers: { "content-type": "image/jpeg", "thum_status_code": "404" },
				}),
			),
		).toBe(false);
		expect(
			isSuccessfulScreenshotResponse(
				new Response("<svg />", {
					status: 200,
					headers: { "content-type": "image/svg+xml" },
				}),
			),
		).toBe(false);
		expect(
			isSuccessfulScreenshotResponse(
				new Response("error", {
					status: 200,
					headers: { "content-type": "text/html" },
				}),
			),
		).toBe(false);
		expect(
			isSuccessfulScreenshotResponse(
				new Response(new Uint8Array([1]), {
					status: 500,
					headers: { "content-type": "image/jpeg" },
				}),
			),
		).toBe(false);
	});
});

describe("fetchProjectPreviewImage", () => {
	test("returns the live screenshot when thum.io succeeds", async () => {
		const requestedUrls: string[] = [];
		const mockFetch = async (input: string) => {
			requestedUrls.push(input);
			return new Response(new Uint8Array([0xff, 0xd8, 0xff]), {
				status: 200,
				headers: { "content-type": "image/jpeg", "thum_status_code": "200" },
			});
		};

		const result = await fetchProjectPreviewImage(liveProject, mockFetch);

		expect(result).not.toBeNull();
		expect(result?.isFallback).toBe(false);
		expect(result?.contentType).toBe("image/jpeg");
		expect(result?.body.byteLength).toBe(3);
		expect(requestedUrls).toEqual([buildScreenshotUrl(liveProject.primaryLink)]);
	});

	test("falls back to raw imageURL when thum.io reports an upstream error", async () => {
		const requestedUrls: string[] = [];
		const mockFetch = async (input: string) => {
			requestedUrls.push(input);
			if (input.startsWith("https://image.thum.io/")) {
				return new Response(new Uint8Array([1, 2]), {
					status: 200,
					headers: { "content-type": "image/jpeg", "thum_status_code": "500" },
				});
			}
			return new Response(new Uint8Array([0x89, 0x50, 0x4e, 0x47]), {
				status: 200,
				headers: { "content-type": "image/png" },
			});
		};

		const result = await fetchProjectPreviewImage(liveProject, mockFetch);

		expect(result).not.toBeNull();
		expect(result?.isFallback).toBe(true);
		expect(result?.contentType).toBe("image/png");
		expect(requestedUrls).toEqual([
			buildScreenshotUrl(liveProject.primaryLink),
			"https://raw.githubusercontent.com/Mooshay105/cdn/main/clann.png",
		]);
	});

	test("falls back to imageURL when screenshot fetch throws", async () => {
		const mockFetch = async (input: string) => {
			if (input.startsWith("https://image.thum.io/")) {
				throw new Error("timeout");
			}
			return new Response(new Uint8Array([1, 2, 3]), {
				status: 200,
				headers: { "content-type": "image/png" },
			});
		};

		const result = await fetchProjectPreviewImage(liveProject, mockFetch);

		expect(result?.isFallback).toBe(true);
		expect(result?.contentType).toBe("image/png");
	});

	test("returns null when both screenshot and fallback fail", async () => {
		const mockFetch = async () => new Response("nope", { status: 500 });

		const result = await fetchProjectPreviewImage(liveProject, mockFetch);
		expect(result).toBeNull();
	});
});

describe("project-preview route", () => {
	test("returns 404 for non-numeric or unknown project ids", async () => {
		const bad = await GET(new Request("http://localhost/api/project-preview/1abc"), {
			params: Promise.resolve({ id: "1abc" }),
		});
		expect(bad.status).toBe(404);

		const missing = await GET(new Request("http://localhost/api/project-preview/999"), {
			params: Promise.resolve({ id: "999" }),
		});
		expect(missing.status).toBe(404);
	});
});
