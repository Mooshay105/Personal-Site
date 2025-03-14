import { useEffect, useState } from "react";
import Button from "../components/Button";
import GlobalNavbar from "../components/GlobalNavBar";

function Index() {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 990);
		};
		window.addEventListener("resize", handleResize);
		handleResize();
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<div>
			<GlobalNavbar isMobile={isMobile} />
			<div className="headingTextBox">
				<h1 className="headingText">404</h1>
				<h2 className="subHeadingText">Page Not Found</h2>
				<h3 className="headingAboutText">The page you are looking for does not exist.</h3>
				<div className="headingButtons">
					<Button text="Home" isCallToAction={true} link="/" />
				</div>
			</div>
		</div>
	);
}

export default Index;
