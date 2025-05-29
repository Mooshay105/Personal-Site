import { useEffect, useRef, useState } from "react";
import Button from "./Button";

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
				<a className="logo navBarItem" href="/">
					<img src="/logo.png" alt="Logo" />
					<p>Malcolm Hauser</p>
				</a>
				{!isMobile ? (
					<>
						<a href="#aboutMe" className="navBarItem">
							<p>About Me</p>
						</a>
						<a href="#projects" className="navBarItem">
							<p>Projects</p>
						</a>
						<a href="#certificates" className="navBarItem">
							<p>Certificates</p>
						</a>
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
								<a className="navBarDropdownItem" href="#aboutMe">
									<p>About Me</p>
								</a>
								<a className="navBarDropdownItem" href="#projects">
									<p>Projects</p>
								</a>
								<a className="navBarDropdownItem" href="#certificates">
									<p>Certificates</p>
								</a>
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
