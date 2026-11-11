import Link from "next/link";

interface NavItemProps {
	link: string;
	text: string;
	onClick?: () => void;
}

export function NavItem({ link, text, onClick }: NavItemProps) {
	return (
		<Link
			href={link}
			onClick={onClick}
			className="m-1 rounded-[10px] px-2.5 py-2 whitespace-nowrap text-white no-underline transition-all duration-200 ease-in-out hover:bg-[#ffffff14] hover:text-(--primary-color) focus-visible:outline-2 focus-visible:outline-(--primary-color)"
		>
			{text}
		</Link>
	);
}
