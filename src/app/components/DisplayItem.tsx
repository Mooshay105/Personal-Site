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
			<div className="displayItemText">
				<div className="flex flex-row">
					<h2>{title}</h2>
					{shouldHaveDate ? <p className="ml-[10px] mt-[7px]">{date}</p> : null}
				</div>
				<p>{description}</p>
			</div>
			<div className="displayItemButtons flex flex-col items-center justify-center">
				<Button
					text="View"
					link={link}
					externalLink={true}
					isCallToAction={true}
					extraClass="displayItemButton"
				/>
				{shouldHaveGithubLink ? (
					<Button
						text="GitHub"
						link={githubLink}
						externalLink={true}
						isCallToAction={false}
						extraClass="displayItemButton"
					/>
				) : null}
			</div>
		</div>
	);
}

export default DisplayItem;
