import Button from "./Button";

interface DisplayItemProps {
	id: number;
	title: string;
	description: string;
	link: string;
	githubLink: string;
	image: string;
	shouldHaveGithubLink: boolean;
	arrayLength: number;
}

function DisplayItem({
	id,
	title,
	description,
	link,
	githubLink,
	image,
	shouldHaveGithubLink,
	arrayLength,
}: DisplayItemProps) {
	return (
		<div className={arrayLength === id ? "displayItemNoBorder" : "displayItem"}>
			<img src={image} alt={title} />
			<div className="displayItemText">
				<h2>{title}</h2>
				<p>{description}</p>
			</div>
			<div className="displayItemButtons">
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
