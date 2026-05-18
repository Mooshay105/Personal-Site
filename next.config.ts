import type { NextConfig } from "next";

const nextConfig: NextConfig = {};

module.exports = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "github.com",
				pathname: "/Mooshay105/cdn/blob/main/**",
			},
		],
	},
};

export default nextConfig;
