import Image from "next/image";
import Button from "./Button";
import type { Certificate, Project } from "@/utills/types";

interface DisplayItemProps {
	type: "certificate" | "project";
	data: Certificate | Project;
}

function DisplayItem({ type, data }: DisplayItemProps) {
	const isCertificate = type === "certificate";
	const buttonClass = "w-[110px] text-center max-[990px]:flex-1";

	return (
		<article className="flex w-full flex-row items-center gap-6 rounded-[15px] border border-solid border-(--border-subtle) p-5 max-[990px]:flex-col max-[990px]:items-stretch max-[990px]:gap-4">
			<Image
				src={data.imageURL}
				alt={`${data.title} preview`}
				width={isCertificate ? 100 : 300}
				height={isCertificate ? 100 : 200}
				sizes={isCertificate ? "100px" : "(max-width: 990px) 560px, 300px"}
				className={
					"shrink-0 rounded-[10px] border border-solid border-(--border-subtle) object-cover " +
					(isCertificate
						? "h-25 w-25 max-[990px]:self-center"
						: "aspect-3/2 h-auto w-75 max-[990px]:w-full max-[990px]:max-w-140 max-[990px]:self-center")
				}
			/>
			<div className="flex min-w-0 flex-1 flex-col justify-center">
				<div className="flex flex-row flex-wrap items-baseline gap-x-2.5">
					<h3 className="m-0 text-2xl font-semibold text-white">{data.title}</h3>
					{isCertificate ? (
						<p className="m-0 text-lg whitespace-nowrap text-(--primary-color)">
							{(data as Certificate).date}
						</p>
					) : null}
				</div>
				<p className="mt-2 mb-0 max-w-[80ch] text-lg leading-relaxed text-zinc-400 max-[990px]:text-base">
					{data.description}
				</p>
			</div>
			<div className="flex w-[110px] shrink-0 flex-col items-center justify-center gap-4 max-[990px]:w-full max-[990px]:flex-row max-[990px]:gap-3">
				{data.primaryLink !== "" ? (
					<Button
						text="View"
						link={data.primaryLink}
						externalLink={true}
						isCallToAction={true}
						extraClass={buttonClass}
					/>
				) : null}
				{data.secondaryLink !== "" ? (
					<Button
						text={isCertificate ? "Certificate" : "GitHub"}
						link={data.secondaryLink}
						externalLink={true}
						isCallToAction={false}
						extraClass={buttonClass}
					/>
				) : null}
			</div>
		</article>
	);
}

export default DisplayItem;
