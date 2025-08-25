import Link from "next/link";

interface ButtonProps {
	text: string;
	isCallToAction: boolean;
	link: string;
	externalLink?: boolean;
	extraClass?: string;
}

function Button({
	text,
	isCallToAction,
	link,
	externalLink = false,
	extraClass = "",
}: ButtonProps) {
	if (externalLink) {
		return (
			<Link
				className={
					(isCallToAction ? "callToActionButton " : "actionButton ") + extraClass
				}
				href={link}
				target="_blank"
			>
				{text}
			</Link>
		);
	}
	return (
		<Link
			className={(isCallToAction ? "callToActionButton " : "actionButton ") + extraClass}
			href={link}
		>
			{text}
		</Link>
	);
}

export default Button;
