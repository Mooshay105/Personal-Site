import Image from "next/image";
import Button from "./Button";
import type { Certificate, Project } from "@/utills/types";

interface DisplayItemProps {
	type: "certificate" | "project";
	data: Certificate | Project;
}

function DisplayItem({ type, data }: DisplayItemProps) {
	return (
		<div className="flex items-center justify-center mb-1.25 w-[calc(100%-40px)] [@media(max-width:990px)]:flex-col flex-row">
			<Image
				src={data.imageURL}
				alt={data.title}
				width={type === "certificate" ? 100 : 300}
				height={type === "certificate" ? 100 : 200}
				className="m-5 rounded-[15px] object-cover"
			/>
			<div className="flex flex-col justify-center mx-auto w-[90%]">
				<div className="flex flex-row">
					<h2 className="text-3xl text-white mb-0">{data.title}</h2>
					{type === "certificate" ? (
						<p className="ml-2.5 mt-1.75 text-[large] text-white mb-0">
							{(data as Certificate).date}
						</p>
					) : null}
				</div>
				<p className="text-[large] text-zinc-400 mb-0">{data.description}</p>
			</div>
			<div className="flex flex-col items-center justify-center [@media(max-width:990px)]:w-full">
				{data.isPrimaryLinkActive ? (
					<Button
						text="View"
						link={data.primaryLinkURL}
						externalLink={true}
						isCallToAction={true}
						extraClass="w-[100px] text-center [@media(max-width:990px)]:w-[85%] [@media(max-width:990px)]:mt-[10px] [@media(max-width:990px)]:text-3xl"
					/>
				) : null}
				{data.isSecondaryLinkActive ? (
					<Button
						text={type === "certificate" ? "Certificate" : "GitHub"}
						link={data.secondaryLinkURL}
						externalLink={true}
						isCallToAction={false}
						extraClass="w-[100px] text-center [@media(max-width:990px)]:w-[85%] [@media(max-width:990px)]:mt-[10px] [@media(max-width:990px)]:text-3xl"
					/>
				) : null}
			</div>
		</div>
	);
}

export default DisplayItem;
