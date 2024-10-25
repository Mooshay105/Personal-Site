import React from "react";

interface GalleryItemProps {
	headerText: string;
	description?: string;
	buttonText?: string;
	buttonDestination?: string;
	imageURL: string;
	leftOrRight?: string;
}

function GalleryItem({ headerText, description, buttonText, buttonDestination, imageURL, leftOrRight = "left" }: GalleryItemProps) {
	const [isLeftOrRight, setIsLeftOrRight] = React.useState<string>(leftOrRight);

	function handleResize() {
		if (leftOrRight === "left" || window.innerWidth < 500) {
			setIsLeftOrRight("left");
		} else if (leftOrRight === "right") {
			setIsLeftOrRight("right");
		} else {
			setIsLeftOrRight("right");
		}
	}

	React.useEffect(() => {
		const interval = setInterval(() => {
			handleResize();
		}, 1);
		return () => clearInterval(interval);
	}, []);
	return (
		<div className="gallery">
			{isLeftOrRight === "left" && <img src={imageURL} className="galleryImage" alt={headerText} draggable={false} />}
			<div className={leftOrRight === "right" ? "galleryInfoLeft" : "galleryInfo"}>
				<h2>{headerText}</h2>
				<p className="galleryDescription">{description}</p>
				<a href={buttonDestination} className="gallerybtn">
					{buttonText}
				</a>
			</div>
			{isLeftOrRight === "right" && <img src={imageURL} className="galleryImage" alt={headerText} draggable={false} />}
		</div>
	);
}

export default GalleryItem;
