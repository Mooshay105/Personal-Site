import { useEffect, useState } from "react";
import Button from "../components/Button";
import GlobalNavbar from "../components/GlobalNavBar";

function Index() {
	const [isMobile, setIsMobile] = useState(false);

	// Check if mobile on window resize
	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 1000);
		};
		window.addEventListener("resize", handleResize);
		handleResize();
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	function handleAusClick() {
		// To Do: Add a proper popup, not just a `alert()`
		alert("I Really Dislike Australia, it is too hot! (New Zealand for the win!)");
	}

	return (
		<div>
			<GlobalNavbar isMobile={isMobile} />
			<div className="headingTextBox">
				<h1 className="headingText">Malcolm Hauser</h1>
				<h2 className="subHeadingText">Spagetti Coding Since ¯\_(ツ)_/¯.</h2>
				<p className="headingAboutText">
					I am a 14 year-old living in{" "}
					<span
						onClick={() => handleAusClick()}
						style={{ textDecoration: "underline var(--primary-color)" }}
					>
						Australia
					</span>
					! I like to program in
					<span style={{ color: "#e34c26" }}> HTML</span>,
					<span style={{ color: "#264de4" }}> CSS</span>,
					<span style={{ color: "#3178c6" }}> TypeScript</span>,
					<span style={{ color: "#fa7343" }}> Swift</span>, and a bit of
					<span style={{ color: "#034FFF" }}> C</span>
				</p>
				<div className="headingButtons">
					<Button text="Projects" isCallToAction={true} link="#projects" />
					<Button
						text="GitHub"
						isCallToAction={false}
						link="https://github.com/Mooshay105"
						externalLink={true}
					/>
				</div>
			</div>
			<div className="aboutMe">
				<h2>
					About <span style={{ color: "var(--primary-color)" }}>Me.</span>
				</h2>
				<p>
					Hi, I’m a 14-year-old tech enthusiast from{" "}
					<span
						onClick={() => handleAusClick()}
						style={{ textDecoration: "underline var(--primary-color)" }}
					>
						Australia
					</span>
					! I love programming and have experience with{" "}
					<span style={{ color: "#e34c26" }}>HTML</span>,{" "}
					<span style={{ color: "#264de4" }}>CSS</span>,{" "}
					<span style={{ color: "#3178c6" }}>TypeScript</span>,{" "}
					<span style={{ color: "#f7e018" }}>JavaScript</span>,{" "}
					<span style={{ color: "#fa7343" }}>Swift</span>, and even a bit of{" "}
					<span style={{ color: "#034FFF" }}>C</span>. I’m especially fascinated by
					Networking and enjoy experimenting with my homelab, which is mostly powered by a
					collection of <span style={{ color: "#d02b5a" }}>Raspberry Pi's</span> (
					<span style={{ color: "#d02b5a" }}>5 and 3B+</span>). I am always looking for
					exciting projects that push my limits, challenge me, and teach me something new.
					When I’m not programming or tinkering, I’m likely brainstorming my next big
					idea.
				</p>
			</div>
		</div>
	);
}

export default Index;
