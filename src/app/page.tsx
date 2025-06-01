"use client";

import { useEffect, useState } from "react";
import Button from "./components/Button";
import GlobalNavbar from "./components/GlobalNavBar";
import DisplayItem from "./components/DisplayItem";
import information from "../../public/display.json";

function Index() {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 990);
		};
		window.addEventListener("resize", handleResize);
		handleResize();
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<div>
			<GlobalNavbar isMobile={isMobile} />
			<div className="mt-[100px] flex flex-col items-center justify-center text-center">
				<h1 className="m-[0px] w-full text-5xl font-bold text-white">Malcolm Hauser</h1>
				<h2 className="m-[0px] w-full text-3xl text-(--primary-color)">
					Spaghetti Coding Since ¯\_(ツ)_/¯.
				</h2>
				<p className="mx-[20px] mt-[10px] max-w-[80ch] text-center text-[large] text-white">
					I am a 14 year-old living in Australia ! I like to program in
					<span style={{ color: "#e34c26" }}> HTML</span>,
					<span style={{ color: "#264de4" }}> CSS</span>,
					<span style={{ color: "#3178c6" }}> TypeScript</span>,
					<span style={{ color: "#fa7343" }}> Swift</span>, and a bit of
					<span style={{ color: "#034FFF" }}> C</span>
				</p>
				<div className="flex flex-row">
					<Button text="Projects" isCallToAction={true} link="#projects" />
					<Button
						text="GitHub"
						isCallToAction={false}
						link="https://github.com/Mooshay105"
						externalLink={true}
					/>
				</div>
			</div>
			<div className="flex w-full flex-col items-center justify-center" id="aboutMe">
				<h2 className="mt-[20px] mb-[0] text-center text-3xl">
					About <span className="text-(--primary-color)">Me.</span>
				</h2>
				<p className="mx-[100px] mb-[0px] text-[large] text-white">
					Hi, I’m a 14-year-old tech enthusiast from Australia! I love programming and
					have experience with <span style={{ color: "#e34c26" }}>HTML</span>,{" "}
					<span style={{ color: "#264de4" }}>CSS</span>,{" "}
					<span style={{ color: "#3178c6" }}>TypeScript</span>,{" "}
					<span style={{ color: "#f7e018" }}>JavaScript</span>,{" "}
					<span style={{ color: "#fa7343" }}>Swift</span>, and even a bit of{" "}
					<span style={{ color: "#034FFF" }}>C</span>. I’m especially fascinated by
					Networking and enjoy experimenting with my homelab, which is mostly powered by a
					collection of <span style={{ color: "#d02b5a" }}>Raspberry Pi&apos;s</span>. I
					am always looking for exciting projects that push my limits, challenge me, and
					teach me something new. When I’m not programming or tinkering, I’m likely
					brainstorming my next big idea.
				</p>
			</div>
			<div className="flex w-full flex-col items-center justify-center" id="projects">
				<h2 className="mt-[20px] mb-[0] text-center text-3xl">
					My <span className="text-(--primary-color)">Projects.</span>
				</h2>
				{/** eslint-disable-next-line @typescript-eslint/no-explicit-any */}
				{information.projects.map((project: any) => (
					<DisplayItem
						key={project.id}
						id={project.id}
						title={project.title}
						description={project.description}
						link={project.linkURL}
						githubLink={project.githubURL}
						image={project.imageURL}
						shouldHaveGithubLink={true}
						arrayLength={information.projects.length}
					/>
				))}
			</div>
			<div className="flex w-full flex-col items-center justify-center" id="certificates">
				<h2 className="mt-[20px] mb-[0] text-center text-3xl">
					My <span className="text-(--primary-color)">Certificates.</span>
				</h2>
				{/** eslint-disable-next-line @typescript-eslint/no-explicit-any */}
				{information.certificates.map((project: any) => (
					<DisplayItem
						id={project.id}
						key={project.id}
						title={project.title}
						description={project.description}
						link={project.linkURL}
						githubLink={project.githubURL}
						image={project.imageURL}
						shouldHaveGithubLink={false}
						arrayLength={information.certificates.length}
					/>
				))}
			</div>
		</div>
	);
}

export default Index;
