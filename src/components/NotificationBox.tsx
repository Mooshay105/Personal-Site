interface notificationBoxProps {
	text: string;
	isOpen: boolean;
	handleClose: () => void;
}

function NotificationBox({ text, isOpen, handleClose }: notificationBoxProps) {
	return (
		<>
			<div className="notificationBox" style={{ display: isOpen ? "block" : "none" }}>
				<p>{text}</p>
				<button onClick={handleClose}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="25"
						height="25"
						viewBox="0 0 100 100"
					>
						<line
							x1="10"
							y1="10"
							x2="90"
							y2="90"
							stroke="white"
							stroke-width="15"
							strokeLinecap="round"
						/>
						<line
							x1="90"
							y1="10"
							x2="10"
							y2="90"
							stroke="white"
							stroke-width="15"
							strokeLinecap="round"
						/>
					</svg>
				</button>
			</div>
		</>
	);
}

export default NotificationBox;
