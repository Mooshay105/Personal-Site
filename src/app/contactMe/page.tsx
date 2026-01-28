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
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248293.83693445247!2d152.5926155672102!3d-25.31771508983309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6beb7dc5418850fd%3A0x400eef17f20f5a0!2sHervey%20Bay%20QLD%204655!5e1!3m2!1sen!2sau!4v1769557640086!5m2!1sen!2sau"
						className="border-0 rounded-[20px] w-[80vw] h-125 max-w-387.5"
						allowFullScreen={false}
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					></iframe>
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
							<span className="text-(--primary-color)">Hervey Bay, QLD Australia</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Index;
