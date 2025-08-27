"use client";

import Button from "./Button";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

interface GlobalNavBarProps {
	resumeURL: string;
}

function GlobalNavBar({ resumeURL }: GlobalNavBarProps) {
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
		<div className="sticky top-[10px] z-[1000]">
			<nav className="flex items-center mx-[30] h-fit rounded-[15px] p-[0px] pr-[10px] border-[#7a7a7a] border border-solid bg-[#1a1a1a8e] backdrop-blur-md backdrop-saturate-180">
				<Link
					className="flex justify-center items-center flex-row mt-[5px] mb-[5px] mr-[auto] font-[bold] m-[10px] no-underline text-white transition-all duration-[0.2s] ease-in-out"
					href="/"
				>
					<Image
						src="/logo.png"
						alt="Logo"
						width={60}
						height={60}
						className="mr-[10px]"
					/>
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
							<div className="fixed top-[87px] left-[-30px] right-[-30px] flex flex-col mx-[30] h-fit rounded-[15px] p-[0px] pr-[10px] border-[#7a7a7a] border border-solid bg-[#1a1a1a8e] backdrop-blur-md backdrop-saturate-180">
								<Link
									href="#aboutMe"
									className="m-[10px] no-underline text-white transition-all duration-[0.2s] ease-in-out"
								>
									<p className="font-bold text-xl">About Me</p>
								</Link>
								<Link
									href="#projects"
									className="m-[10px] no-underline text-white transition-all duration-[0.2s] ease-in-out"
								>
									<p className="font-bold text-xl">Projects</p>
								</Link>
								<Link
									href="#certificates"
									className="m-[10px] no-underline text-white transition-all duration-[0.2s] ease-in-out"
								>
									<p className="font-bold text-xl">Certificates</p>
								</Link>
								<Button
									text="Resume"
									isCallToAction={true}
									link={resumeURL}
									externalLink={true}
									extraClass="w-[96%] font-bold text-xl"
								/>
							</div>
						) : null}
					</>
				) : (
					<div className="flex flex-row items-center justify-center">
						<Link
							href="#aboutMe"
							className="m-[10px] no-underline text-white transition-all duration-[0.2s] ease-in-out"
						>
							<p>About Me</p>
						</Link>
						<Link
							href="#projects"
							className="m-[10px] no-underline text-white transition-all duration-[0.2s] ease-in-out"
						>
							<p>Projects</p>
						</Link>
						<Link
							href="#certificates"
							className="m-[10px] no-underline text-white transition-all duration-[0.2s] ease-in-out"
						>
							<p>Certificates</p>
						</Link>
						<Button
							text="Resume"
							isCallToAction={true}
							link={resumeURL}
							externalLink={true}
						/>
					</div>
				)}
			</nav>
		</div>
	);
}

export default GlobalNavBar;
