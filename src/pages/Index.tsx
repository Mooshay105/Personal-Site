import CustomBreak from "../components/CustomBreak";
import GlobalFooter from "../components/GlobalFooter";
import React from "react";
import hero from "../assets/img/hero.png";
import malcolm from "../assets/img/logo.png";
import GalleryItem from "../components/GalleryItem";
import airportDatabase from "../assets/img/airportDatabase.png";
import linuxClone from "../assets/img/linuxClone.png";
import googleCybersecurityCert from "../assets/img/googleCybersecurityCert.png";
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
					<CustomBreak height={1} />
					<h1 className="centeredHeader">Certificates</h1>
					<CustomBreak height={1} hasHR={true} paddBothSides={true} />
					<GalleryItem headerText="Google Cybersecurity" description="Those who earn the Google Cybersecurity Certificate have completed eight courses, developed by Google, that include hands-on, practice-based assessments and are designed to prepare them for entry-level roles in cybersecurity. They are competent in beginner-level Python, Linux, SQL, Security Information and Event Management (SIEM) tools, and Intrusion Detection Systems (IDS). They know how to identify common cybersecurity risks, threats, and vulnerabilities, as well as the techniques to mitigate." buttonText="View" buttonDestination="https://coursera.org/share/3d7eb85ea356a12056e6651702ea5e6e" imageURL={googleCybersecurityCert} leftOrRight="left" />
					<CustomBreak height={2} />
					<GlobalFooter />
				</div>
			</div>
		</React.StrictMode>
	);
}

export default Index;
