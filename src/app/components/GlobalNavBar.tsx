import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import Link from "next/link";
import Image from "next/image";

interface GlobalNavBarProps {
	isMobile: boolean;
}

function GlobalNavBar({ isMobile }: GlobalNavBarProps) {
	const [menuOpen, setMenuOpen] = useState(false);

	const divRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (divRef.current && !divRef.current.contains(event.target as Node)) {
				setMenuOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
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
				<Button text="Resume" isCallToAction={true} link="https://malcolmjh.com/resume" />
			</nav>
		</div>
	);
}

export default GlobalNavBar;
