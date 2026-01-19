"use client";

import Button from "./components/Button";
import GlobalNavbar from "./components/GlobalNavBar";
import DisplayItem from "./components/DisplayItem";
import information from "../../public/display.json";

function Index() {
	return (
		<div>
			<GlobalNavbar
				resumeURLMD={information.resumeURLMD}
				resumeURLDOCX={information.resumeURLDOCX}
			/>
			<div className="mt-12.5 flex flex-col items-center text-center">
				<h1 className="m-0 w-full text-5xl font-bold text-white">Malcolm Hauser</h1>
				<h2 className="m-0 w-full text-3xl text-(--primary-color)">
					Spaghetti Coding Since ¯\_(ツ)_/¯.
				</h2>
				<p className="mx-5 mt-2.5 max-w-[80ch] text-center text-[large] text-white">
					I am a 14 year-old living in Australia! I build my projects with
					<span className="text-(--react-color)"> React</span> and{" "}
					<span className="text-(--vite-color)"> Vite</span> But I am trying-out{" "}
					<span className="text-(--nextjs-color)"> Next.JS</span>. I mainly program in
					<span className="text-(--typescript-color)"> TypeScript</span> but I do program
					in a bit of
					<span className="text-(--swift-color)"> Swift</span>
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
				<h2 className="mt-5 mb-0 text-center text-3xl">
					About <span className="text-(--primary-color)">Me.</span>
				</h2>
				<p className="max-w-[80ch] text-center text-[large] text-white">
					Hi, I’m a 14-year-old tech enthusiast from Australia! I love programming and
					have experience with
					<span className="text-(--react-color)"> React</span>,
					<span className="text-(--typescript-color)"> TypeScript</span>, and a bit of
					<span className="text-(--swift-color)"> Swift</span>. I’m especially fascinated
					by Networking and enjoy experimenting with my homelab, which is mostly powered
					by a collection of
					<span className="text-(--raspberry-pi-color)"> Raspberry Pi&apos;s</span>. I am
					always looking for exciting projects that push my limits, challenge me, and
					teach me something new. When I’m not programming or tinkering, I’m likely
					brainstorming my next big idea.
				</p>
			</div>
			<div className="flex w-full flex-col items-center justify-center" id="projects">
				<h2 className="mt-5 mb-0 text-center text-3xl">
					My <span className="text-(--primary-color)">Projects.</span>
				</h2>
				{information.projects.map((project: any) => (
					<DisplayItem
						key={project.id}
						title={project.title}
						description={project.description}
						link={project.linkURL}
						githubLink={project.githubURL}
						image={project.imageURL}
						shouldHaveGithubLink={true}
						isCertificate={false}
						shouldHaveDate={false}
					/>
				))}
			</div>
			<div className="flex w-full flex-col items-center justify-center" id="certificates">
				<h2 className="mt-5 mb-0 text-center text-3xl">
					My <span className="text-(--primary-color)">Certificates.</span>
				</h2>
				{/** eslint-disable-next-line @typescript-eslint/no-explicit-any */}
				{information.certificates.reverse().map((project: any) => (
					<DisplayItem
						key={project.id}
						title={project.title}
						description={project.description}
						link={project.linkURL}
						githubLink={project.githubURL}
						image={project.imageURL}
						shouldHaveGithubLink={false}
						shouldHaveDate={true}
						isCertificate={true}
						date={project.date}
					/>
				))}
			</div>
		</div>
	);
}

export default Index;
