import { Metadata } from "next";
import Button from "./components/Button";

export const metadata: Metadata = {
	title: "Malcolm Hauser | 404 - Not Found",
	icons: {
		icon: "/logo.png",
	},
};

export default function NotFoundPage() {
	return (
		<main
			id="main"
			className="flex flex-1 flex-col items-center justify-center px-5 pb-24 text-center"
		>
			<h1 className="m-0 w-full text-5xl font-bold tracking-tight text-white max-[480px]:text-4xl">
				<span className="text-(--primary-color)">404</span> – Not Found
			</h1>
			<p className="m-0 mt-3 w-full text-lg text-zinc-400">
				The page you are looking for does not exist.
			</p>
			<div className="mt-6">
				<Button
					text="Go Home"
					isCallToAction={true}
					link="/"
					extraClass="block w-[110px] text-center"
				/>
			</div>
		</main>
	);
}
