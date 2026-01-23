import Link from "next/link";

interface ButtonProps {
	text: string;
	isCallToAction: boolean;
	link: string;
	externalLink?: boolean;
	extraClass?: string;
	runJSOnClick?: boolean;
	jsToRun?: () => void;
}

function Button({
	text,
	isCallToAction,
	link,
	externalLink = false,
	extraClass = "",
	runJSOnClick = false,
	jsToRun,
}: ButtonProps) {
	const css =
		(isCallToAction
			? "shadow-[var(--box-shadow-primary-rest)] border-[var(--primary-color)] hover:shadow-[var(--box-shadow-primary-hover)] bg-[radial-gradient(circle_at_0_0,_var(--primary-color),_var(--black)_42%)] "
			: "shadow-[var(--box-shadow-secondary-rest)] border-[var(--secondary-color)] hover:shadow-[var(--box-shadow-secondary-hover)] ") +
		extraClass +
		" m-[10px] rounded-[10px] pt-[10px] pb-[10px] px-[auto] border-[1px] border-solid transition-all duration-200 ease-in-out hover:translate-x-[1px] hover:translate-y-[1px] active:shadow-none active:translate-x-[3px] active:translate-y-[3px]";

	if (externalLink) {
		return (
			<Link className={css} href={link} target="_blank">
				{text}
			</Link>
		);
	}
	if (runJSOnClick) {
		return (
			<button className={css} onClick={jsToRun}>
				{text}
			</button>
		);
	}
	return (
		<Link className={css} href={link}>
			{text}
		</Link>
	);
}

export default Button;
