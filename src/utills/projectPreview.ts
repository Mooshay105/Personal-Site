import type { Project } from "./types";

export const PREVIEW_WIDTH = 1200;
export const PREVIEW_HEIGHT = 800;
export const PREVIEW_REVALIDATE_DAYS = 3;
export const PREVIEW_MAX_AGE_HOURS = PREVIEW_REVALIDATE_DAYS * 24;
export const PREVIEW_REVALIDATE_SECONDS = PREVIEW_MAX_AGE_HOURS * 60 * 60;
export const PREVIEW_STALE_WHILE_REVALIDATE_SECONDS = 60 * 60 * 24 * 7;
export const PREVIEW_FALLBACK_CACHE_SECONDS = 60 * 60;
export const PREVIEW_FETCH_TIMEOUT_MS = 12_000;

export const SCREENSHOT_CACHE_CONTROL = `public, max-age=3600, s-maxage=${PREVIEW_REVALIDATE_SECONDS}, stale-while-revalidate=${PREVIEW_STALE_WHILE_REVALIDATE_SECONDS}`;
export const FALLBACK_CACHE_CONTROL = `public, max-age=300, s-maxage=${PREVIEW_FALLBACK_CACHE_SECONDS}, stale-while-revalidate=86400`;

export type PreviewFetchResult = {
	body: ArrayBuffer;
	contentType: string;
	isFallback: boolean;
};

export function hasLiveProjectUrl(url: string): boolean {
	if (!url) return false;
	try {
		const parsed = new URL(url);
		return parsed.protocol === "http:" || parsed.protocol === "https:";
	} catch {
		return false;
	}
}

export function getProjectPreviewSrc(project: Project): string {
	if (hasLiveProjectUrl(project.primaryLink)) {
		return `/api/project-preview/${project.id}`;
	}
	return project.imageURL;
}

export function buildScreenshotUrl(siteUrl: string): string {
	const normalized = new URL(siteUrl).toString();
	return `https://image.thum.io/get/width/${PREVIEW_WIDTH}/crop/${PREVIEW_HEIGHT}/maxAge/${PREVIEW_MAX_AGE_HOURS}/allowJPG/noanimate/${normalized}`;
}

function getRasterImageContentType(response: Response): string | null {
	const raw = response.headers.get("content-type");
	if (!raw) return null;
	const mime = raw.split(";")[0]?.trim().toLowerCase() ?? "";
	if (!mime.startsWith("image/") || mime === "image/svg+xml") {
		return null;
	}
	return mime;
}

export function isSuccessfulScreenshotResponse(response: Response): boolean {
	if (!response.ok) return false;
	if (!getRasterImageContentType(response)) return false;

	const upstreamStatus = response.headers.get("thum_status_code");
	if (upstreamStatus !== null) {
		const parsed = Number(upstreamStatus);
		if (!Number.isFinite(parsed) || parsed < 200 || parsed >= 400) {
			return false;
		}
	}

	return true;
}

export function resolveFallbackImageUrl(imageUrl: string): string {
	try {
		const parsed = new URL(imageUrl);
		if (parsed.hostname === "github.com" && parsed.searchParams.get("raw") === "true") {
			const match = parsed.pathname.match(/^\/([^/]+)\/([^/]+)\/blob\/(.+)$/);
			if (match) {
				return `https://raw.githubusercontent.com/${match[1]}/${match[2]}/${match[3]}`;
			}
		}
		return parsed.toString();
	} catch {
		return imageUrl;
	}
}

export type FetchLike = (input: string, init?: RequestInit) => Promise<Response>;

async function fetchImage(
	url: string,
	validate: (response: Response) => boolean,
	fetchImpl: FetchLike,
): Promise<{ body: ArrayBuffer; contentType: string } | null> {
	try {
		const response = await fetchImpl(url, {
			headers: { Accept: "image/*" },
			signal: AbortSignal.timeout(PREVIEW_FETCH_TIMEOUT_MS),
			cache: "no-store",
		});
		if (!validate(response)) return null;
		const contentType = getRasterImageContentType(response);
		if (!contentType) return null;
		const body = await response.arrayBuffer();
		if (body.byteLength === 0) return null;
		return { body, contentType };
	} catch {
		return null;
	}
}

export async function fetchProjectPreviewImage(
	project: Project,
	fetchImpl: FetchLike = fetch,
): Promise<PreviewFetchResult | null> {
	if (hasLiveProjectUrl(project.primaryLink)) {
		const screenshot = await fetchImage(
			buildScreenshotUrl(project.primaryLink),
			isSuccessfulScreenshotResponse,
			fetchImpl,
		);
		if (screenshot) {
			return { ...screenshot, isFallback: false };
		}
	}

	if (hasLiveProjectUrl(project.imageURL)) {
		const fallback = await fetchImage(
			resolveFallbackImageUrl(project.imageURL),
			(response) => response.ok,
			fetchImpl,
		);
		if (fallback) {
			return { ...fallback, isFallback: true };
		}
	}

	return null;
}
