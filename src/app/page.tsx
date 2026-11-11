import Button from "./components/Button";
import DisplayItem from "./components/DisplayItem";
import information from "../../public/display.json";
import type { Certificate, Project } from "@/utills/types";
import { Metadata } from "next";
import { getAge } from "@/utills/age";

export const metadata: Metadata = {
	title: "Malcolm Hauser | Home",
	description: `I am a ${getAge()}-year-old living in New Zealand! I like to program in HTML, CSS, TypeScript, and a bit of Swift`,
	icons: {
		icon: "/logo.png",
	},
};

export default function Page() {
	const age = getAge();
	return (
		<main className="px-5 pb-24">
			<section className="mt-16 mb-4 flex flex-col items-center text-center">
				<h1 className="m-0 w-full text-5xl font-bold text-white max-[480px]:text-4xl">
					Malcolm Hauser
				</h1>
				<p className="m-0 mt-1 w-full text-3xl text-(--primary-color) max-[480px]:text-2xl">
					Spaghetti Coding Since ¯\_(ツ)_/¯
				</p>
				<p className="mt-4 max-w-[70ch] text-center text-lg leading-relaxed text-pretty text-white">
					I am a {age}-year-old living in New Zealand! I build my projects with{" "}
					<span className="whitespace-nowrap text-(--react-color)">React</span> and{" "}
					<span className="whitespace-nowrap text-(--vite-color)">Vite</span>, but I am
					trying out{" "}
					<span className="whitespace-nowrap text-(--nextjs-color)">Next.js</span>. I
					mainly program in{" "}
					<span className="whitespace-nowrap text-(--typescript-color)">TypeScript</span>,
					but I do program in a bit of{" "}
					<span className="whitespace-nowrap text-(--swift-color)">Swift</span>.
				</p>
				<div className="mt-4 flex flex-row">
					<Button
						text="Projects"
						isCallToAction={true}
						link="#projects"
						extraClass="w-[110px] text-center"
					/>
					<Button
						text="GitHub"
						isCallToAction={false}
						link="https://github.com/Mooshay105"
						externalLink={true}
						extraClass="w-[110px] text-center"
					/>
				</div>
			</section>
			<section className="mt-20 flex scroll-mt-28 flex-col items-center" id="aboutMe">
				<h2 className="m-0 text-center text-4xl font-bold">
					About <span className="text-(--primary-color)">Me</span>
				</h2>
				<p className="mt-5 max-w-[70ch] text-center text-lg leading-relaxed text-pretty text-white">
					Hi, I’m a {age}-year-old tech enthusiast from New Zealand! I love programming
					and have experience with{" "}
					<span className="whitespace-nowrap text-(--react-color)">React</span>,{" "}
					<span className="whitespace-nowrap text-(--typescript-color)">TypeScript</span>,
					and a bit of{" "}
					<span className="whitespace-nowrap text-(--swift-color)">Swift</span>. I’m
					especially fascinated by Networking and enjoy experimenting with my{" "}
					<span className="whitespace-nowrap text-(--raspberry-pi-color)">
						Raspberry Pi 5
					</span>
					. I have recently got into RC Planes and Drones. I have a{" "}
					<span className="whitespace-nowrap text-(--djineo-color)">DJI Neo</span> and am
					making an RC Glider. I am always looking for exciting projects that push my
					limits, challenge me, and teach me something new. When I’m not programming or
					tinkering, I’m likely Flying or Playing Chess.
				</p>
			</section>
			<section className="mt-20 flex scroll-mt-28 flex-col items-center" id="projects">
				<h2 className="m-0 mb-6 text-center text-4xl font-bold">
					My <span className="text-(--primary-color)">Projects</span>
				</h2>
				<div className="flex w-full flex-col gap-5">
					{information.projects.map((project: Project) => (
						<DisplayItem key={project.id} type="project" data={project} />
					))}
				</div>
			</section>
			<section className="mt-20 flex scroll-mt-28 flex-col items-center" id="education">
				<h2 className="m-0 mb-6 text-center text-4xl font-bold">
					My <span className="text-(--primary-color)">Education</span>
				</h2>
				<div className="flex w-full flex-col gap-5">
					{information.education.map((certificate: Certificate) => (
						<DisplayItem key={certificate.id} type="certificate" data={certificate} />
					))}
				</div>
			</section>
		</main>
	);
}
