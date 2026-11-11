import GlobalNavBar from "./components/GlobalNavBar";
import Link from "next/link";
import { Ubuntu_Sans } from "next/font/google";
import "./global.css";

/** The site font, self-hosted by next/font and exposed as a CSS variable. */
const ubuntuSans = Ubuntu_Sans({
	subsets: ["latin"],
	variable: "--font-ubuntu-sans",
	display: "swap",
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" data-scroll-behavior="smooth" className={ubuntuSans.variable}>
			<body>
				<a
					href="#main"
					className="sr-only rounded-[10px] border border-solid border-(--secondary-color) bg-(--black) px-4 py-2.5 text-white shadow-(--box-shadow-secondary-rest) focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-1001 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--primary-color)"
				>
					Skip to content
				</a>
				<GlobalNavBar />
				{children}
				<footer className="mx-auto mt-auto mb-8 flex w-[calc(100%-40px)] max-w-6xl flex-row flex-wrap items-center justify-between gap-2 border-t border-solid border-(--border-subtle) pt-6 text-(--text-muted) max-[600px]:flex-col">
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
