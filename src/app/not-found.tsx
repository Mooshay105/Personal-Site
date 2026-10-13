import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Malcolm Hauser | 404 - Not Found",
	icons: {
		icon: "/logo.png",
	},
};

export default function NotFoundPage() {
	return (
		<main className="mt-12.5 flex flex-col items-center text-center">
			<h1 className="m-0 w-full text-5xl font-bold text-(--primary-color)">
				404 - Not Found
			</h1>
			<p className="m-0 w-full text-2xl font-bold text-white">
				The page you are looking for does not exist.
			</p>
		</main>
	);
}
