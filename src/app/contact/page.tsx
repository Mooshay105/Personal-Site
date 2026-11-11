import { Metadata } from "next";
import Button from "../components/Button";

export const metadata: Metadata = {
	title: "Malcolm Hauser | Contact",
	description: "I live in New Zealand, my email is malcolm@malcolmjh.com.",
	icons: {
		icon: "/logo.png",
	},
};

export default function ContactPage() {
	return (
		<main id="main" className="mt-16 flex flex-col items-center px-5 pb-24 text-center">
			<h1 className="m-0 w-full text-5xl font-bold text-white max-[480px]:text-4xl">
				Contact <span className="text-(--primary-color)">Me</span>
			</h1>
			<div className="mt-6 flex flex-col items-center">
				<p className="m-0 text-lg text-white">
					Email:{" "}
					<a
						href="mailto:malcolm@malcolmjh.com"
						className="rounded-[4px] break-all text-(--primary-color) underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--primary-color)"
					>
						malcolm@malcolmjh.com
					</a>
				</p>
				<p className="m-0 mt-1 text-lg text-white">
					Based in: <span className="whitespace-nowrap text-zinc-300">Christchurch,</span>{" "}
					<span className="whitespace-nowrap text-zinc-300">New Zealand</span>
				</p>
				<div className="mt-6 flex flex-row gap-5">
					<Button
						text="Email Me"
						isCallToAction={true}
						link="mailto:malcolm@malcolmjh.com"
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
			</div>
			<iframe
				title="Map of Christchurch, New Zealand"
				src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d185084.880052872!2d172.61584018027798!3d-43.522868133895685!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d322f4863c5ed01%3A0x500ef8684799945!2sChristchurch!5e1!3m2!1sen!2snz!4v1786753013225!5m2!1sen!2snz"
				className="mt-8 h-80 w-full max-w-6xl rounded-[15px] border border-solid border-(--border-subtle) md:h-125"
				allowFullScreen={false}
				loading="lazy"
				referrerPolicy="no-referrer-when-downgrade"
			/>
		</main>
	);
}
