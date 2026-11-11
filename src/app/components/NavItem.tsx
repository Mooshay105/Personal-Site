import Link from "next/link";

interface NavItemProps {
	link: string;
	text: string;
	onClick?: () => void;
	extraClass?: string;
	isCurrent?: boolean;
	external?: boolean;
}

export function NavItem({
	link,
	text,
	onClick,
	extraClass = "",
	isCurrent = false,
	external = false,
}: NavItemProps) {
	return (
		<Link
			href={link}
			onClick={onClick}
			target={external ? "_blank" : undefined}
			rel={external ? "noopener noreferrer" : undefined}
			aria-current={isCurrent ? "page" : undefined}
			className={`rounded-[10px] px-2.5 py-2 whitespace-nowrap text-white no-underline transition-[color,background-color] duration-200 ease-in-out hover:bg-(--hover-tint) hover:text-(--primary-color) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--primary-color) aria-[current=page]:text-(--primary-color) motion-reduce:transition-none ${extraClass}`}
		>
			{text}
			{external ? <span className="sr-only"> (opens in new tab)</span> : null}
		</Link>
	);
}
