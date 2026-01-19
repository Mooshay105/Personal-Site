import Link from "next/link";

interface NavItemProps {
	link: string;
	text: string;
	isMobile: boolean;
}

export function NavItem({ link, text, isMobile }: NavItemProps) {
	return (
		<Link
			href={link}
			className="m-2.5 no-underline text-white transition-all duration-200 ease-in-out"
		>
			<p className={isMobile ? "" : "whitespace-nowrap"}>{text}</p>
		</Link>
	);
}
