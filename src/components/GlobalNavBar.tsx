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
			<Link className="navBarDropdownItem" to="#aboutMe">
				<p>About Me</p>
			</Link>
			<Link className="navBarDropdownItem" to="#projects">
				<p>Projects</p>
			</Link>
			<Link className="navBarDropdownItem" to="#certificates">
				<p>Certificates</p>
			</Link>
			<Button
				text="Resume"
				isCallToAction={true}
				link="/resume"
				extraClass="navBarDropdownButton"
			/>
		</div>
	);
}

function GlobalNavBar({ isMobile }: GlobalNavBarProps) {
	const [isActive, setIsActive] = useState("");
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<nav>
			<Link className="logo navBarItem" to="/">
				<img src={logo} alt="Logo" />
				<p>Malcolm Hauser</p>
			</Link>
			{!isMobile ? (
				<>
					<Link
						to="#aboutMe"
						className={isActive === "about" ? "navBarItem active" : "navBarItem"}
						onClick={() => setIsActive("about")}
					>
						<p>About Me</p>
					</Link>
					<Link
						to="#projects"
						className={isActive === "projects" ? "navBarItem active" : "navBarItem"}
						onClick={() => setIsActive("projects")}
					>
						<p>Projects</p>
					</Link>
					<Link
						to="#certificates"
						className={isActive === "certificates" ? "navBarItem active" : "navBarItem"}
						onClick={() => setIsActive("certificates")}
					>
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
					{menuOpen ? <GlobalNavBarMobileMenu /> : null}
				</>
			)}
		</nav>
	);
}

export default GlobalNavBar;
