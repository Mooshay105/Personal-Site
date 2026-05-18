import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{ url: "https://www.malcolmjh.com/", priority: 1.0 },
		{ url: "https://www.malcolmjh.com/contact", priority: 0.9 },
	];
}
