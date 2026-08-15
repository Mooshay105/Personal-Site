"use client";

import GlobalNavbar from "../components/GlobalNavBar";
import information from "../../../public/display.json";

function Index() {
	return (
		<div>
			<GlobalNavbar
				resumeURLMD={information.resumeURLMD}
				resumeURLDOCX={information.resumeURLDOCX}
			/>
			<div className="mt-12.5 flex flex-col items-center text-center">
				<h1 className="m-0 w-full text-5xl font-bold text-white">Contact Me</h1>
				<div className="flex flex-col items-center space-2 mt-7">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d185084.880052872!2d172.61584018027798!3d-43.522868133895685!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d322f4863c5ed01%3A0x500ef8684799945!2sChristchurch!5e1!3m2!1sen!2snz!4v1786753013225!5m2!1sen!2snz"
						className="border-0 rounded-[20px] w-[80vw] h-125 max-w-387.5"
						allowFullScreen={false}
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					/>

					<div className="mt-2.5">
						<p className="ml-2.5 text-white">
							Email:{" "}
							<a
								href="mailto:malcolm@malcolmjh.com"
								className="text-(--primary-color) underline"
							>
								malcolm@malcolmjh.com
							</a>
						</p>
						<p className="ml-2.5 text-white">
							Based in:{" "}
							<span className="text-(--primary-color)">Christchurch, New Zealand</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Index;
