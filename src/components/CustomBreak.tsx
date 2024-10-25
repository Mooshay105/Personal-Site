interface CustomBreakProps {
	height: number;
	hasHR?: boolean;
	paddBottomOnly?: boolean;
	paddBothSides?: boolean;
}

function CustomBreak({ height, hasHR = false, paddBottomOnly = false, paddBothSides = false }: CustomBreakProps) {
	let br = "";
	if (!paddBottomOnly) {
		for (let i = 0; i < height; i++) {
			br += "<br />";
		}
	}
	if (hasHR) {
		br += "<hr />";
	}
	if (paddBothSides || paddBottomOnly) {
		for (let i = 0; i < height; i++) {
			br += "<br />";
		}
	}
	return <span dangerouslySetInnerHTML={{ __html: br }}></span>;
}

export default CustomBreak;
