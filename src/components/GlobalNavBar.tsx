import { useState } from "react";
import logo from "../assets/img/logo.png";
import Button from "./Button";
import { Link } from "react-router-dom";

interface GlobalNavBarProps {
	isMobile: boolean;
}

function GlobalNavBarMobileMenu() {
	return (
		<div className="navBarDropdown">
			<Link className="navBarDropdownItem" to="/">
				<p>About Me</p>
			</Link>
			<Link className="navBarDropdownItem" to="/">
				<p>Projects</p>
			</Link>
			<Link className="navBarDropdownItem" to="/">
				<p>Certificates</p>
			</Link>
			<Link className="navBarDropdownItem" to="/">
				<p>Contact Me</p>
			</Link>
			<Link className="navBarDropdownItem" to="/">
				<p>Has My Code Crashed Yet?</p>
			</Link>
			<Button text="CV" isCallToAction={true} link="https://malcolmjh.com/404" />
		</div>
	);
}

function GlobalNavBar({ isMobile }: GlobalNavBarProps) {
	const [isActive, setIsActive] = useState("");
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<nav>
			<a className="logo navBarItem">
				<img src={logo} alt="Logo" />
				<p>Malcolm Hauser</p>
			</a>
			{!isMobile ? (
				<>
					<a
						className={isActive === "about" ? "navBarItem active" : "navBarItem"}
						onClick={() => setIsActive("about")}
					>
						<p>About Me</p>
					</a>
					<a
						className={isActive === "projects" ? "navBarItem active" : "navBarItem"}
						onClick={() => setIsActive("projects")}
					>
						<p>Projects</p>
					</a>
					<a
						className={isActive === "certificates" ? "navBarItem active" : "navBarItem"}
						onClick={() => setIsActive("certificates")}
					>
						<p>Certificates</p>
					</a>
					<a
						className={isActive === "contact" ? "navBarItem active" : "navBarItem"}
						onClick={() => setIsActive("contact")}
					>
						<p>Contact Me</p>
					</a>
					<a
						className={
							isActive === "hasMyCodeCrashedYet" ? "navBarItem active" : "navBarItem"
						}
						onClick={() => setIsActive("hasMyCodeCrashedYet")}
					>
						<p>Has My Code Crashed Yet?</p>
					</a>
					<Button text="CV" isCallToAction={true} link="https://malcolmjh.com/404" />
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
					{menuOpen ? <GlobalNavBarMobileMenu /> : null}
				</>
			)}
		</nav>
	);
}

export default GlobalNavBar;
