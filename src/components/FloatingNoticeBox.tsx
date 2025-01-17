interface FloatingNoticeBoxProps {
	text: string;
	show: boolean;
	setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

function FloatingNoticeBox({
	text,
	show,
	setShow,
}: FloatingNoticeBoxProps) {
	return (
		show && (
			<div className="floatingNoticeBox">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					onClick={() => setShow(false)}
				>
					<line x1="18" y1="6" x2="6" y2="18"></line>
					<line x1="6" y1="6" x2="18" y2="18"></line>
				</svg>
				<p>{text}</p>
			</div>
		)
	);
}

export default FloatingNoticeBox;
