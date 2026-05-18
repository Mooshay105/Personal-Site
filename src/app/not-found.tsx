"use client";

import GlobalNavbar from "./components/GlobalNavBar";
import information from "../../public/display.json";

function Index() {
	return (
		<div>
			<GlobalNavbar
				resumeURLMD={information.resumeURLMD}
				resumeURLDOCX={information.resumeURLDOCX}
			/>
			<div className="mt-12.5 flex flex-col items-center text-center">
				<h1 className="m-0 w-full text-5xl font-bold text-(--primary-color)">
					404 - Not Found
				</h1>
				<p className="m-0 w-full text-2xl font-bold text-white">
					The page you are looking for does not exist.
				</p>
			</div>
		</div>
	);
}

export default Index;
