import Button from "./Button";

interface DisplayItemProps {
	title: string;
	description: string;
	link: string;
	githubLink: string;
	image: string;
}

function DisplayItem({ title, description, link, githubLink, image }: DisplayItemProps) {
	return (
		<div className="displayItem">
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
				<Button
					text="GitHub"
					link={githubLink}
					externalLink={true}
					isCallToAction={false}
					extraClass="displayItemButton"
				/>
			</div>
		</div>
	);
}

export default DisplayItem;
