import Image from "next/image";
import Button from "./Button";

interface DisplayItemProps {
	title: string;
	description: string;
	link: string;
	githubLink: string;
	image: string;
	shouldHaveGithubLink: boolean;
	shouldHaveDate: boolean;
	date?: string;
}

function DisplayItem({
	title,
	description,
	link,
	githubLink,
	image,
	shouldHaveGithubLink,
	shouldHaveDate,
	date,
}: DisplayItemProps) {
	return (
		<div className="flex items-center justify-center mb-[5px] w-[calc(100%-40px)] [@media(max-width:990px)]:flex-col flex-row">
			<Image
				src={image}
				alt={title}
				width={300}
				height={200}
				className="m-[20px] rounded-[15px] object-cover"
			/>
			<div className="flex flex-col justify-center mx-auto w-[90%]">
				<div className="flex flex-row">
					<h2 className="text-3xl text-white mb-[0]">{title}</h2>
					{shouldHaveDate ? (
						<p className="ml-[10px] mt-[7px] text-[large] text-white mb-[0]">{date}</p>
					) : null}
				</div>
				<p className="text-[large] text-white mb-[0]">{description}</p>
			</div>
			<div className="flex flex-col items-center justify-center [@media(max-width:990px)]:w-[100%]">
				<Button
					text="View"
					link={link}
					externalLink={true}
					isCallToAction={true}
					extraClass="w-[100px] text-center [@media(max-width:990px)]:w-[85%] [@media(max-width:990px)]:mt-[10px] [@media(max-width:990px)]:text-3xl"
				/>
				{shouldHaveGithubLink ? (
					<Button
						text="GitHub"
						link={githubLink}
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
