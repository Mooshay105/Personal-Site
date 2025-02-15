import { Link } from "react-router-dom";

interface ButtonProps {
	text: string;
	isCallToAction: boolean;
	link: string;
	externalLink?: boolean;
}

function Button({ text, isCallToAction, link, externalLink = false }: ButtonProps) {
	if (externalLink) {
		return (
			<a
				className={isCallToAction ? "callToActionButton" : "actionButton"}
				href={link}
				target="_blank"
			>
				{text}
			</a>
		);
	}
	return (
		<Link className={isCallToAction ? "callToActionButton" : "actionButton"} to={link}>
			{text}
		</Link>
	);
}

export default Button;
