import Link from "next/link";

interface ButtonProps {
	text: string;
	isCallToAction: boolean;
	link: string;
	isActive?: boolean;
	externalLink?: boolean;
	extraClass?: string;
	runJSOnClick?: boolean;
	jsToRun?: () => void;
	ariaLabel?: string;
}

function Button({
	text,
	isCallToAction,
	link,
	externalLink = false,
	extraClass = "",
	runJSOnClick = false,
	isActive = true,
	jsToRun,
	ariaLabel,
}: ButtonProps) {
	const css =
		(isCallToAction
			? "shadow-[var(--box-shadow-primary-rest)] border-[var(--primary-color)] hover:shadow-[var(--box-shadow-primary-hover)] bg-[radial-gradient(circle_at_0_0,_var(--primary-color),_var(--black)_52px)] "
			: "shadow-[var(--box-shadow-secondary-rest)] border-[var(--secondary-color)] hover:shadow-[var(--box-shadow-secondary-hover)] ") +
		extraClass +
		" inline-flex min-w-[110px] items-center justify-center text-center rounded-[10px] px-3 py-[10px] border-[1px] border-solid focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--primary-color) transition-[translate,box-shadow] duration-200 ease-in-out hover:translate-x-[1px] hover:translate-y-[1px] active:shadow-none active:translate-x-[3px] active:translate-y-[3px] motion-reduce:transition-none motion-reduce:hover:translate-0 motion-reduce:active:translate-0" +
		(isActive ? " bg-[var(--black)] text-[var(--white)]" : "");

	if (externalLink) {
		return (
			<Link
				className={css}
				href={link}
				target="_blank"
				rel="noopener noreferrer"
				aria-label={ariaLabel ? `${ariaLabel} (opens in new tab)` : undefined}
			>
				{text}
				{ariaLabel ? null : <span className="sr-only"> (opens in new tab)</span>}
			</Link>
		);
	}
	if (runJSOnClick) {
		return (
			<button type="button" className={css} onClick={jsToRun} aria-label={ariaLabel}>
				{text}
			</button>
		);
	}
	return (
		<Link className={css} href={link} aria-label={ariaLabel}>
			{text}
		</Link>
	);
}

export default Button;
