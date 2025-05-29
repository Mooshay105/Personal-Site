"use client";

import { useEffect, useState } from "react";
import Button from "./components/Button";
import GlobalNavbar from "./components/GlobalNavBar";
import NotificationBox from "./components/NotificationBox";
import DisplayItem from "./components/DisplayItem";
import information from "../../public/display.json";

function Index() {
	const [isMobile, setIsMobile] = useState(false);
	const [isNotificationOpen, setIsNotificationOpen] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 990);
		};
		window.addEventListener("resize", handleResize);
		handleResize();
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	function handleAusClick() {
		setIsNotificationOpen(true);
	}

	return (
		<div>
			<GlobalNavbar isMobile={isMobile} />
			<NotificationBox
				text={"I Really Dislike Australia, it is too hot! (New Zealand for the win!)"}
				isOpen={isNotificationOpen}
				handleClose={() => setIsNotificationOpen(false)}
			/>
			<div className="headingTextBox">
				<h1 className="headingText">Malcolm Hauser</h1>
				<h2 className="subHeadingText">Spaghetti Coding Since ¯\_(ツ)_/¯.</h2>
				<p className="headingAboutText">
					I am a 14 year-old living in{" "}
					<span onClick={() => handleAusClick()} className="primaryColorUnderline">
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
					<Button
						text="Projects"
						isCallToAction={true}
						link="#projects"
						extraClass="headingButton"
					/>
					<Button
						text="GitHub"
						isCallToAction={false}
						link="https://github.com/Mooshay105"
						externalLink={true}
						extraClass="headingButton"
					/>
				</div>
			</div>
			<div className="aboutMe" id="aboutMe">
				<h2>
					About <span className="primaryColor">Me.</span>
				</h2>
				<p>
					Hi, I’m a 14-year-old tech enthusiast from{" "}
					<span onClick={() => handleAusClick()} className="primaryColorUnderline">
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
					collection of <span style={{ color: "#d02b5a" }}>Raspberry Pi's</span>. I am
					always looking for exciting projects that push my limits, challenge me, and
					teach me something new. When I’m not programming or tinkering, I’m likely
					brainstorming my next big idea.
				</p>
			</div>
			<div className="projects" id="projects">
				<h2>
					My <span className="primaryColor">Projects.</span>
				</h2>
				{information.projects.map((project: any) => (
					<DisplayItem
						title={project.title}
						description={project.description}
						link={project.linkURL}
						githubLink={project.githubURL}
						image={project.imageURL}
						shouldHaveGithubLink={true}
					/>
				))}
			</div>
			<div className="certificates" id="certificates">
				<h2>
					My <span className="primaryColor">Certificates.</span>
				</h2>
				{information.certificates.map((project: any) => (
					<DisplayItem
						title={project.title}
						description={project.description}
						link={project.linkURL}
						githubLink={project.githubURL}
						image={project.imageURL}
						shouldHaveGithubLink={false}
					/>
				))}
			</div>
		</div>
	);
}

export default Index;
