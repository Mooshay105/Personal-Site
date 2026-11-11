import GlobalNavBar from "./components/GlobalNavBar";
import Link from "next/link";
import "./global.css";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" data-scroll-behavior="smooth">
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
				<link
					href="https://fonts.googleapis.com/css2?family=Ubuntu+Sans:ital,wght@0,100..800;1,100..800&display=swap"
					rel="stylesheet"
				/>
			</head>
			<body>
				<GlobalNavBar />
				{children}
				<footer className="mx-auto mb-8 flex w-[calc(100%-40px)] max-w-6xl flex-row flex-wrap items-center justify-between gap-2 border-t border-solid border-(--border-subtle) pt-6 text-zinc-400 max-[600px]:flex-col">
					<p className="m-0">© {new Date().getFullYear()} Malcolm Hauser</p>
					<div className="flex flex-row gap-1">
						<Link
							href="mailto:malcolm@malcolmjh.com"
							className="rounded-[10px] px-2.5 py-2 transition-colors duration-200 ease-in-out hover:text-(--primary-color) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--primary-color)"
						>
							Email
						</Link>
						<Link
							href="https://github.com/Mooshay105"
							target="_blank"
							rel="noopener noreferrer"
							className="rounded-[10px] px-2.5 py-2 transition-colors duration-200 ease-in-out hover:text-(--primary-color) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--primary-color)"
						>
							GitHub
						</Link>
					</div>
				</footer>
			</body>
		</html>
	);
}
