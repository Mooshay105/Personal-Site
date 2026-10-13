import type { MetadataRoute } from "next";

export default async function robots(): Promise<MetadataRoute.Robots> {
	return {
		rules: {
			userAgent: "*",
			allow: "/",
			disallow: ["/not-found"],
		},
		sitemap: "https://www.malcolmjh.com/sitemap.xml",
	};
}
