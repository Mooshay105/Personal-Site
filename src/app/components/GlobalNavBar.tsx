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
		<div className="navBarContainer">
			<nav>
				<Link className="logo navBarItem" href="/">
					<Image src="/logo.png" alt="Logo" width={60} height={60} />
					<p>Malcolm Hauser</p>
				</Link>
				{!isMobile ? (
					<>
						<Link href="#aboutMe" className="navBarItem">
							<p>About Me</p>
						</Link>
						<Link href="#projects" className="navBarItem">
							<p>Projects</p>
						</Link>
						<Link href="#certificates" className="navBarItem">
							<p>Certificates</p>
						</Link>
						<Button
							text="Resume"
							isCallToAction={true}
							link="https://malcolmjh.com/resume"
						/>
					</>
				) : (
					<>
						<svg
							width="25px"
							height="25px"
							viewBox="0 0 25 25"
							onClick={() => setMenuOpen(!menuOpen)}
						>
							<path d="M0 4h25v2H0z" fill="var(--primary-color)" />
							<path d="M0 11h25v2H0z" fill="var(--primary-color)" />
							<path d="M0 18h25v2H0z" fill="var(--primary-color)" />
						</svg>
						{menuOpen ? (
							<div className="navBarDropdown" ref={divRef}>
								<Link className="navBarDropdownItem" href="#aboutMe">
									<p>About Me</p>
								</Link>
								<Link className="navBarDropdownItem" href="#projects">
									<p>Projects</p>
								</Link>
								<Link className="navBarDropdownItem" href="#certificates">
									<p>Certificates</p>
								</Link>
								<Button
									text="Resume"
									isCallToAction={true}
									link="/resume"
									extraClass="navBarDropdownButton"
								/>
							</div>
						) : null}
					</>
				)}
			</nav>
		</div>
	);
}

export default GlobalNavBar;
