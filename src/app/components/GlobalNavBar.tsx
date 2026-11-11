"use client";

import Button from "./Button";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { NavItem } from "./NavItem";

/** The in-page and route links shown in the nav bar. */
const NAV_LINKS = [
	{ link: "/#aboutMe", text: "About Me" },
	{ link: "/#projects", text: "Projects" },
	{ link: "/#education", text: "Education" },
	{ link: "/contact", text: "Contact Me" },
];

/** The downloadable resume formats shown in the nav bar. */
const RESUME_LINKS = [
	{
		link: "https://github.com/Mooshay105/Mooshay105/blob/main/resume.docx",
		text: "Resume (.docx)",
		isCallToAction: true,
	},
	{
		link: "https://raw.githubusercontent.com/Mooshay105/Mooshay105/refs/heads/main/resume.md",
		text: "Resume (.md)",
		isCallToAction: false,
	},
];

function GlobalNavBar() {
	const [isOpen, setIsOpen] = useState(false);
	const close = () => setIsOpen(false);
	const wrapperRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!isOpen) return;
		const handleKey = (event: KeyboardEvent) => {
			if (event.key === "Escape") setIsOpen(false);
		};
		const handlePointer = (event: PointerEvent) => {
			if (!wrapperRef.current?.contains(event.target as Node)) setIsOpen(false);
		};
		document.addEventListener("keydown", handleKey);
		document.addEventListener("pointerdown", handlePointer);
		return () => {
			document.removeEventListener("keydown", handleKey);
			document.removeEventListener("pointerdown", handlePointer);
		};
	}, [isOpen]);

	return (
		<div ref={wrapperRef} className="sticky top-2.5 z-1000">
			<nav className="mx-5 flex h-fit items-center rounded-[15px] border border-solid border-(--secondary-color) bg-[#1a1a1a8e] p-0 pr-2.5 backdrop-blur-md backdrop-saturate-180">
				<Link
					className="m-2.5 mr-auto flex min-w-0 flex-row items-center justify-center rounded-[10px] text-white no-underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--primary-color)"
					href="/"
					onClick={close}
				>
					<Image
						src="/logo.png"
						alt=""
						width={60}
						height={60}
						className="mr-2.5 h-15 w-15 shrink-0 rounded-full"
					/>
					<span className="font-sans text-xl font-bold">Malcolm Hauser</span>
				</Link>
				<div className="hidden flex-row items-center justify-center min-[1080px]:flex">
					{NAV_LINKS.map((item) => (
						<NavItem key={item.link} link={item.link} text={item.text} />
					))}
					{RESUME_LINKS.map((item) => (
						<Button
							key={item.link}
							text={item.text}
							isCallToAction={item.isCallToAction}
							link={item.link}
							externalLink={true}
							extraClass="text-center whitespace-nowrap px-4"
						/>
					))}
				</div>
				<button
					type="button"
					aria-label={isOpen ? "Close menu" : "Open menu"}
					aria-expanded={isOpen}
					aria-controls="mobile-menu"
					onClick={() => setIsOpen(!isOpen)}
					className="m-1 flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-[10px] transition-all duration-200 ease-in-out hover:bg-[#ffffff14] focus-visible:outline-2 focus-visible:outline-(--primary-color) min-[1080px]:hidden"
				>
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
						<path
							d={isOpen ? "M5 5L19 19" : "M3 6H21"}
							stroke="var(--primary-color)"
							strokeWidth="3"
							strokeLinecap="round"
						/>
						{isOpen ? null : (
							<path
								d="M3 12H21"
								stroke="var(--primary-color)"
								strokeWidth="3"
								strokeLinecap="round"
							/>
						)}
						<path
							d={isOpen ? "M19 5L5 19" : "M3 18H21"}
							stroke="var(--primary-color)"
							strokeWidth="3"
							strokeLinecap="round"
						/>
					</svg>
				</button>
			</nav>
			{isOpen ? (
				<div
					id="mobile-menu"
					className="absolute top-full right-5 left-5 mt-1.5 flex h-fit flex-col items-stretch rounded-[15px] border border-solid border-(--secondary-color) bg-[#1a1a1ae6] p-2.5 backdrop-blur-md backdrop-saturate-180 min-[1080px]:hidden"
				>
					{NAV_LINKS.map((item) => (
						<NavItem
							key={item.link}
							link={item.link}
							text={item.text}
							onClick={close}
							extraClass="py-2.5 text-center"
						/>
					))}
					{RESUME_LINKS.map((item) => (
						<Button
							key={item.link}
							text={item.text}
							isCallToAction={item.isCallToAction}
							link={item.link}
							externalLink={true}
							extraClass="text-center whitespace-nowrap"
						/>
					))}
				</div>
			) : null}
		</div>
	);
}

export default GlobalNavBar;
