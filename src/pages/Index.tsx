import CustomBreak from "../components/CustomBreak";
import GlobalFooter from "../components/GlobalFooter";
import React from "react";
import hero from "../assets/img/hero.png";
import malcolm from "../assets/img/logo.png";
import GalleryItem from "../components/GalleryItem";
import airportDatabase from "../assets/img/airportDatabase.png";
import linuxClone from "../assets/img/linuxClone.png";
import "../assets/main.css";

function Index() {
	return (
		<React.StrictMode>
			<div className="main">
				<section className="hero">
					<img src={hero} alt="hero" className="heroVideo" />
					<div className="heroOverlay">
						<div className="heroContent">
							<h1>Malcolm</h1>
							<p>I am a 14 year-old living in Australia! I like to code in HTML, CSS, TypeScript, JavaScript, Java, a little C, and I am learning Swift.</p>
							<a href="#gallery" className="btn">
								See My Projects
							</a>
							<a href="https://github.com/Mooshay105" className="btn">
								GitHub
							</a>
						</div>
					</div>
				</section>
				<CustomBreak height={1} />
				<div className="aboutMe">
					<img src={malcolm} />
					<div className="column">
						<h1>Hi, I'm Malcolm.</h1>
						<p>I am a passionate Programer with a love for Networking and Tinkering with my homelab (mainly a collection of Raspberry Pi's). I enjoy working on projects that challenge me and help me learn new concepts and techniques.</p>
					</div>
				</div>
				<div id="gallery">
					<CustomBreak height={2} />
					<h1 className="centeredHeader">Code Gallery</h1>
					<CustomBreak height={1} hasHR={true} paddBothSides={true} />
					<GalleryItem headerText="Airport Database" description="Airport Database is a database of most of the IATA registered airports in the world." buttonText="Visit" buttonDestination="https://airportdatabase.malcolmjh.com" imageURL={airportDatabase} leftOrRight="left" />
					<CustomBreak height={1} hasHR={true} paddBothSides={true} />
					<GalleryItem headerText="Linux Clone" description="Linux Clone is a clone of Linux I made for some fun." buttonText="Visit" buttonDestination="https://linux.malcolmjh.com" imageURL={linuxClone} leftOrRight="right" />
					<CustomBreak height={2} />
					<GlobalFooter />
				</div>
			</div>
		</React.StrictMode>
	);
}

export default Index;
