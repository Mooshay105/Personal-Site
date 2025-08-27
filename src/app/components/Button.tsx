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
	const css =
		(isCallToAction
			? "bg-[radial-gradient(circle_at_0_0,_var(--primary-color),_var(--black)_42%)] m-[10px] p-[10px_20px] rounded-[10px] shadow-[var(--box-shadow-primary-rest)] border-[1px] border-solid border-[var(--primary-color)] transition-all duration-200 ease-in-out hover:shadow-[var(--box-shadow-primary-hover)] hover:translate-x-[1px] hover:translate-y-[1px] active:shadow-none active:translate-x-[3px] active:translate-y-[3px] "
			: "m-[10px] p-[10px_20px] rounded-[10px] shadow-[var(--box-shadow-secondary-rest)] border-[1px] border-solid border-[var(--secondary-color)] transition-all duration-200 ease-in-out hover:shadow-[var(--box-shadow-secondary-hover)] hover:translate-x-[1px] hover:translate-y-[1px] active:shadow-none active:translate-x-[3px] active:translate-y-[3px] ") +
		extraClass;

	if (externalLink) {
		return (
			<Link className={css} href={link} target="_blank">
				{text}
			</Link>
		);
	}
	return (
		<Link className={css} href={link}>
			{text}
		</Link>
	);
}

export default Button;
