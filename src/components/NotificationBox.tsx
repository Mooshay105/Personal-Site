import { useEffect, useRef } from "react";

interface notificationBoxProps {
	text: string;
	isOpen: boolean;
	handleClose: () => void;
}

function NotificationBox({ text, isOpen, handleClose }: notificationBoxProps) {
	const divRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (divRef.current && !divRef.current.contains(event.target as Node)) {
				handleClose();
			}
		};

		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<>
			<div
				className="notificationBox"
				style={{ display: isOpen ? "block" : "none" }}
				ref={divRef}
			>
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
