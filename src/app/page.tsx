import Button from "./components/Button";
import DisplayItem from "./components/DisplayItem";
import information from "../../public/display.json";
import type { Certificate, Project } from "@/utills/types";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Malcolm Hauser | Home",
	description:
		"I am a 14 year-old living in New Zealand! I like to program in HTML, CSS, TypeScript, and a bit of Swift",
	icons: {
		icon: "/logo.png",
	},
};

export default function Page() {
	return (
		<main>
			<div className="mt-12.5 flex flex-col items-center text-center">
				<h1 className="m-0 w-full text-5xl font-bold text-white">Malcolm Hauser</h1>
				<h2 className="m-0 w-full text-3xl text-(--primary-color)">
					Spaghetti Coding Since ¯\_(ツ)_/¯.
				</h2>
				<p className="mx-5 mt-2.5 max-w-[80ch] text-center text-[large] text-white">
					I am a 15 year-old living in New Zealand! I build my projects with
					<span className="text-(--react-color)"> React</span> and{" "}
					<span className="text-(--vite-color)"> Vite</span> But I am trying-out{" "}
					<span className="text-(--nextjs-color)"> Next.JS</span>. I mainly program in
					<span className="text-(--typescript-color)"> TypeScript</span> but I do program
					in a bit of
					<span className="text-(--swift-color)"> Swift</span>
				</p>
				<div className="flex flex-row">
					<Button
						text="Projects"
						isCallToAction={true}
						link="#projects"
						extraClass="w-[100px]"
					/>
					<Button
						text="GitHub"
						isCallToAction={false}
						link="https://github.com/Mooshay105"
						externalLink={true}
						extraClass="w-[100px]"
					/>
				</div>
			</div>
			<div className="flex w-full flex-col items-center justify-center" id="aboutMe">
				<h2 className="mt-5 mb-0 text-center text-3xl">
					About <span className="text-(--primary-color)">Me.</span>
				</h2>
				<p className="max-w-[80ch] text-center text-[large] text-white">
					Hi, I’m a 15-year-old tech enthusiast from New Zealand! I love programming and
					have experience with
					<span className="text-(--react-color)"> React</span>,
					<span className="text-(--typescript-color)"> TypeScript</span>, and a bit of
					<span className="text-(--swift-color)"> Swift</span>. I’m especially fascinated
					by Networking and enjoy experimenting with my
					<span className="text-(--raspberry-pi-color)"> Raspberry Pi 5</span>. I have
					recently got in to RC Planes and Drones I have a
					<span className="text-(--djineo-color)"> DJI Neo</span> and am making a RC
					Glider. I am always looking for exciting projects that push my limits, challenge
					me, and teach me something new. When I’m not programming or tinkering, I’m
					likely Flying or Playing Chess.
				</p>
			</div>
			<div className="flex w-full flex-col items-center justify-center" id="projects">
				<h2 className="mt-5 mb-0 text-center text-3xl">
					My <span className="text-(--primary-color)">Projects.</span>
				</h2>
				{information.projects.map((project: Project) => (
					<DisplayItem key={project.id} type="project" data={project} />
				))}
			</div>
			<div className="flex w-full flex-col items-center justify-center" id="education">
				<h2 className="mt-5 mb-0 text-center text-3xl">
					My <span className="text-(--primary-color)">Education.</span>
				</h2>
				{information.education.map((project: Certificate) => (
					<DisplayItem key={project.id} type="certificate" data={project} />
				))}
			</div>
		</main>
	);
}
