"use client";

import GlobalNavbar from "../components/GlobalNavBar";
import information from "../../../public/display.json";

function Index() {
	return (
		<div>
			<GlobalNavbar resumeURL={information.resumeURL} />
			<div className="mt-[50px] flex flex-col items-center text-center">
				<h1 className="m-[0px] w-full text-5xl font-bold text-white">Malcolm Hauser</h1>
				<h2 className="m-[0px] w-full text-3xl text-(--primary-color)">
					Contact your (
					<span
						onClick={() => alert("I don't know where you live, I'm not a creep!")}
						className="underline"
					>
						non?
					</span>
					)local Spaghetti Coder.
				</h2>
				<p>If for some reason you want to contact me (why, I have no idea):</p>
				<div className="flex flex-col items-start space-2 mt-2.5">
					<div className="flex items-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 49.4 512 399.42"
							width="20"
							aria-hidden="true"
						>
							<g fill="none" fillRule="evenodd">
								<g fillRule="nonzero">
									<path
										fill="#4285f4"
										d="M34.91 448.818h81.454V251L0 163.727V413.91c0 19.287 15.622 34.91 34.91 34.91z"
									/>
									<path
										fill="#34a853"
										d="M395.636 448.818h81.455c19.287 0 34.909-15.622 34.909-34.909V163.727L395.636 251z"
									/>
									<path
										fill="#fbbc04"
										d="M395.636 99.727V251L512 163.727v-46.545c0-43.142-49.25-67.782-83.782-41.891z"
									/>
								</g>
								<path
									fill="#ea4335"
									d="M116.364 251V99.727L256 204.455 395.636 99.727V251L256 355.727z"
								/>
								<path
									fill="#c5221f"
									fillRule="nonzero"
									d="M0 117.182v46.545L116.364 251V99.727L83.782 75.291C49.25 49.4 0 74.04 0 117.18z"
								/>
							</g>
						</svg>
						<p className="ml-2.5 text-white">malcolm@malcolmjh.com (NO SOLICITING!)</p>
					</div>
					<div className="flex items-center">
						<svg
							width="20"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							aria-hidden="true"
						>
							<path
								d="M7 2H17C18.1046 2 19 2.89543 19 4V20C19 21.1046 18.1046 22 17 22H7C5.89543 22 5 21.1046 5 20V4C5 2.89543 5.89543 2 7 2Z"
								stroke="white"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M12 18H12.01"
								stroke="white"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
						<p className="ml-2.5 text-white">+61 I do not have a phone.</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Index;
