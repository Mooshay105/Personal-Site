import GlobalNavBar from "./components/GlobalNavBar";
import information from "../../public/display.json";
// @ts-ignore
import "./global.css";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
				<link
					href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&family=Ubuntu+Sans:ital,wght@0,100..800;1,100..800&display=swap"
					rel="stylesheet"
				/>
			</head>
			<body>
				<GlobalNavBar
					resumeURLMD={information.resumeURLMD}
					resumeURLDOCX={information.resumeURLDOCX}
				/>
				{children}
			</body>
		</html>
	);
}
