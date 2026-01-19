"use client";

import Button from "./Button";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

interface GlobalNavBarProps {
	resumeURLMD: string;
	resumeURLDOCX: string;
}

function GlobalNavBar({ resumeURLMD, resumeURLDOCX }: GlobalNavBarProps) {
	const [isMobile, setIsMobile] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 990) {
				setIsMobile(true);
			} else {
				setIsMobile(false);
				setIsOpen(false);
			}
		};
		window.addEventListener("resize", handleResize);
		handleResize();
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<div className="sticky top-2.5 z-1000">
			<nav className="flex items-center mx-[30] h-fit rounded-[15px] p-0 pr-2.5 border-[#7a7a7a] border border-solid bg-[#1a1a1a8e] backdrop-blur-md backdrop-saturate-180">
				<Link
					className="flex justify-center items-center flex-row mt-1.25 mb-1.25 mr-auto font-[bold] m-2.5 no-underline text-white transition-all duration-200 ease-in-out"
					href="/"
				>
					<Image src="/logo.png" alt="Logo" width={60} height={60} className="mr-2.5" />
					<p className="font-sans font-bold text-xl">Malcolm Hauser</p>
				</Link>
				{isMobile ? (
					<>
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							onClick={() => setIsOpen(!isOpen)}
						>
							<path
								d="M3 12H21"
								stroke="var(--primary-color)"
								strokeWidth="3"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M3 6H21"
								stroke="var(--primary-color)"
								strokeWidth="3"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M3 18H21"
								stroke="var(--primary-color)"
								strokeWidth="3"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
						{isOpen ? (
							<div className="fixed top-21.75 -left-7.5 -right-7.5 flex flex-col mx-[30] h-fit rounded-[15px] p-0 pr-2.5 border-[#7a7a7a] border border-solid bg-[#1a1a1a8e] backdrop-blur-md backdrop-saturate-180">
								<Link
									href="/#aboutMe"
									className="m-2.5 no-underline text-white transition-all duration-200 ease-in-out"
								>
									<p>About Me</p>
								</Link>
								<Link
									href="/contactMe"
									className="m-2.5 no-underline text-white transition-all duration-200 ease-in-out"
								>
									<p>Contact Me</p>
								</Link>
								<Link
									href="/#projects"
									className="m-2.5 no-underline text-white transition-all duration-200 ease-in-out"
								>
									<p>Projects</p>
								</Link>
								<Link
									href="/#certificates"
									className="m-2.5 no-underline text-white transition-all duration-200 ease-in-out"
								>
									<p>Certificates</p>
								</Link>
								<Button
									text="Resume (.docx)"
									isCallToAction={true}
									link={resumeURLDOCX}
									externalLink={true}
									extraClass="w-[96%] font-bold text-xl"
								/>
								<Button
									text="Resume (.md)"
									isCallToAction={true}
									link={resumeURLMD}
									externalLink={true}
									extraClass="w-[96%] font-bold text-xl"
								/>
							</div>
						) : null}
					</>
				) : (
					<div className="flex flex-row items-center justify-center">
						<Link
							href="/#aboutMe"
							className="m-2.5 no-underline text-white transition-all duration-200 ease-in-out"
						>
							<p className="whitespace-nowrap">About Me</p>
						</Link>
						<Link
							href="/contactMe"
							className="m-2.5 no-underline text-white transition-all duration-200 ease-in-out"
						>
							<p className="whitespace-nowrap">Contact Me</p>
						</Link>
						<Link
							href="/#projects"
							className="m-2.5 no-underline text-white transition-all duration-200 ease-in-out"
						>
							<p className="whitespace-nowrap">Projects</p>
						</Link>
						<Link
							href="/#certificates"
							className="m-2.5 no-underline text-white transition-all duration-200 ease-in-out"
						>
							<p className="whitespace-nowrap">Certificates</p>
						</Link>
						<Button
							text="Resume (.docx)"
							isCallToAction={true}
							link={resumeURLDOCX}
							externalLink={true}
							extraClass="w-[96%] text-l whitespace-nowrap"
						/>
						<Button
							text="Resume (.md)"
							isCallToAction={true}
							link={resumeURLMD}
							externalLink={true}
							extraClass="w-[96%] text-l whitespace-nowrap"
						/>
					</div>
				)}
			</nav>
		</div>
	);
}

export default GlobalNavBar;
