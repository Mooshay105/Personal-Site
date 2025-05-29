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
			<a
				className={
					isCallToAction
						? "callToActionButton " + extraClass
						: "actionButton " + extraClass
				}
				href={link}
				target="_blank"
			>
				{text}
			</a>
		);
	}
	return (
		<a
			className={
				isCallToAction ? "callToActionButton " + extraClass : "actionButton " + extraClass
			}
			href={link}
		>
			{text}
		</a>
	);
}

export default Button;
