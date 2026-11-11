import Image from "next/image";
import Button from "./Button";
import type { Certificate, Project } from "@/utills/types";

interface DisplayItemProps {
	type: "certificate" | "project";
	data: Certificate | Project;
}

function DisplayItem({ type, data }: DisplayItemProps) {
	const isCertificate = type === "certificate";
	const hasLinks = data.primaryLink !== "" || data.secondaryLink !== "";
	const buttonClass =
		"w-[110px] text-center max-[480px]:max-w-[calc(50%-6px)] max-[480px]:flex-1";

	return (
		<article className="flex w-full flex-row items-center gap-6 rounded-[15px] border border-solid border-(--border-subtle) p-5 max-[990px]:flex-col max-[990px]:items-stretch max-[990px]:gap-4 max-[480px]:p-4">
			<div className="flex w-75 shrink-0 justify-center max-[990px]:w-full max-[990px]:justify-start">
				<Image
					src={data.imageURL}
					alt={`${data.title} preview`}
					width={isCertificate ? 160 : 300}
					height={isCertificate ? 160 : 200}
					sizes={isCertificate ? "160px" : "(max-width: 990px) 560px, 300px"}
					className={
						"shrink-0 rounded-[10px] border border-solid border-(--border-subtle) object-cover shadow-(--box-shadow-secondary-rest) " +
						(isCertificate
							? "h-40 w-40"
							: "aspect-3/2 h-auto w-75 max-[990px]:w-full max-[990px]:max-w-140")
					}
				/>
			</div>
			<div className="flex min-w-0 flex-1 flex-col justify-center">
				<div className="flex flex-row flex-wrap items-baseline gap-x-2.5">
					<h3 className="m-0 text-2xl font-semibold text-white">{data.title}</h3>
					{isCertificate ? (
						<time className="text-lg whitespace-nowrap text-(--primary-color)">
							{(data as Certificate).date}
						</time>
					) : null}
				</div>
				<p className="mt-2 mb-0 max-w-[80ch] text-lg leading-relaxed text-zinc-400 max-[990px]:text-base">
					{data.description}
				</p>
			</div>
			{hasLinks ? (
				<div className="flex w-[110px] shrink-0 flex-col items-center justify-center gap-4 max-[990px]:w-full max-[990px]:flex-row max-[990px]:justify-start max-[990px]:gap-3">
					{data.primaryLink !== "" ? (
						<Button
							text="View"
							ariaLabel={`View ${data.title}`}
							link={data.primaryLink}
							externalLink={true}
							isCallToAction={true}
							extraClass={buttonClass}
						/>
					) : null}
					{data.secondaryLink !== "" ? (
						<Button
							text={isCertificate ? "Certificate" : "GitHub"}
							ariaLabel={
								isCertificate ? `${data.title} certificate` : `${data.title} on GitHub`
							}
							link={data.secondaryLink}
							externalLink={true}
							isCallToAction={false}
							extraClass={buttonClass}
						/>
					) : null}
				</div>
			) : null}
		</article>
	);
}

export default DisplayItem;
