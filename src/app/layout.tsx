import type { Metadata } from "next";
import "./global.css";
import Head from "next/head";

export const metadata: Metadata = {
	title: "Malcolm Hauser",
	description:
		"I am a 14 year-old living in Australia! I like to programe in HTML, CSS, TypeScript, JavaScript, Swift, and even a bit of C.",
	icons: {
		icon: "/logo.png",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
				<link
					href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&family=Ubuntu+Sans:ital,wght@0,100..800;1,100..800&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<body>{children}</body>
		</html>
	);
}
