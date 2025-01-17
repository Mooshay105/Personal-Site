import { useEffect, useState } from "react";
import Logo from "../assets/img/logo.png";
import CustomBreak from "../components/CustomBreak";
import FloatingNoticeBox from "../components/FloatingNoticeBox";
import DisplayItems from "../components/DisplayItems";
import display from "../assets/display.json";

function Index() {
	const [scrollPercent, setScrollPercent] = useState(0);
	const [showHelloWorld, setShowHelloWorld] = useState(false);

	// get how far down the page the user has scrolled
	function handleScroll() {
		const winScroll =
			document.body.scrollTop || document.documentElement.scrollTop;
		const height =
			document.documentElement.scrollHeight -
			document.documentElement.clientHeight;
		const scrolled = (winScroll / height) * 100;
		setScrollPercent(scrolled);
	}

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div>
			<nav
				style={
					scrollPercent > 0.25
						? {
								borderBottom: `1px solid #ffffff1a`,
						  }
						: {}
				}
			>
				<div className="navLogo">
					<img src={Logo} alt="Logo" draggable={false} className="logo" />
					<h2>Malcolm Hauser</h2>
				</div>
				<div className="buttons">
					<a
						href="/resume"
						className="callToActionButton"
						draggable={false}
						style={{
							marginLeft: "calc(100vw - 350px)",
						}}
					>
						Resume
					</a>
				</div>
			</nav>
			<CustomBreak height={4} />
			<FloatingNoticeBox
				text="Supermaven wanted and still wants it to say 'Hello, world!'"
				show={showHelloWorld}
				setShow={setShowHelloWorld}
			/>
			<main>
				<div className="hero">
					<CustomBreak height={11} />
					<h1 onClick={() => setShowHelloWorld(true)}>
						Hey, I Am Malcolm Hauser!
					</h1>
					<p dangerouslySetInnerHTML={{ __html: display.description }}></p>
					<div className="buttons">
						<a
							href="https://github.com/Mooshay105"
							className="callToActionButton"
							draggable={false}
						>
							Git Hub
						</a>
						<a href="#projects" className="actionButton" draggable={false}>
							Projects
						</a>
					</div>
				</div>
				<div className="about">
					<h1>About Me</h1>
					<p
						dangerouslySetInnerHTML={{ __html: display.about }}
						style={{ color: "#a7a7a7" }}
					/>
				</div>
				<div className="displayItems">
					<h1>Projects</h1>
					<DisplayItems items={display.projects} isProjects={true} />
				</div>
				<div className="displayItems">
					<h1>Certificates</h1>
					<DisplayItems items={display.certificates} isProjects={false} />
				</div>
			</main>
		</div>
	);
}

export default Index;
