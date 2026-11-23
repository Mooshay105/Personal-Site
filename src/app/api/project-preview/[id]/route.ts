import information from "../../../../../public/display.json";
import {
	FALLBACK_CACHE_CONTROL,
	fetchProjectPreviewImage,
	SCREENSHOT_CACHE_CONTROL,
} from "@/utills/projectPreview";
import type { Project } from "@/utills/types";

export const maxDuration = 30;

const projects: Project[] = information.projects;

export async function GET(
	_request: Request,
	{ params }: { params: Promise<{ id: string }> },
) {
	const { id } = await params;
	if (!/^\d+$/.test(id)) {
		return new Response("Not Found", { status: 404 });
	}

	const projectId = Number(id);
	const project = projects.find((item) => item.id === projectId);
	if (!project) {
		return new Response("Not Found", { status: 404 });
	}

	const preview = await fetchProjectPreviewImage(project);
	if (!preview) {
		return new Response("Failed to load project preview", {
			status: 502,
			headers: { "Cache-Control": "no-store" },
		});
	}

	return new Response(preview.body, {
		status: 200,
		headers: {
			"Content-Type": preview.contentType,
			"Cache-Control": preview.isFallback
				? FALLBACK_CACHE_CONTROL
				: SCREENSHOT_CACHE_CONTROL,
			"X-Content-Type-Options": "nosniff",
			"X-Preview-Source": preview.isFallback ? "fallback" : "screenshot",
		},
	});
}
