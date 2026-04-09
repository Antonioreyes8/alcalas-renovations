import React, { useState } from "react";

// Images
import logo from "./assets/images/AlcalasRenovationsLogo.png";
import project1 from "./assets/images/image1.jpeg";
import project2 from "./assets/images/image2.jpeg";
import project3 from "./assets/images/image3.jpeg";
import project4 from "./assets/images/image4.jpeg";
import project5 from "./assets/images/image5.jpeg";
import project6 from "./assets/images/image6.jpeg";
import project7 from "./assets/images/image7.jpeg";
import project8 from "./assets/images/image8.jpeg";

// Font Awesome Solid Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHammer,
	faPaintRoller,
	faCouch,
	faLayerGroup,
	faWrench,
	faToolbox,
	faPlus,
	faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

// Font Awesome Brand Icons
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

const projects = [
	project1,
	project3,
	project4,
	project5,
	project6,
	project7,
	project8,
];

export default function App() {
	const [openService, setOpenService] = useState(null);

	const toggleService = (name) => {
		setOpenService(openService === name ? null : name);
	};

	return (
		<div className="container">
			{/* HEADER */}
			<header className="header">
				<img src={logo} alt="logo" className="logo" />

				<nav className="nav">
					<a>Home</a>
					<a>Contact</a>
				</nav>
			</header>

			{/* ABOUT */}
			<section className="bento-card about-section">
				<h2>About Us</h2>
				<div className="about-content">
					<img src={project2} alt="About Us" className="about-image" />
					<p>
						Based in the DFW area, our services are prominent throughout Denton,
						where most of our projects are completed.
						<br />
						<br />
						With over 25 years of experience in the renovation industry, we take
						pride in delivering high-quality work with meticulous attention to
						detail and reliability.
					</p>
				</div>
			</section>

			{/* PROJECTS */}
			<section className="bento-card">
				<h2>Scroll through our work</h2>
				<div className="gallery-wrapper">
					<div className="projects-gallery">
						{projects.map((img, index) => (
							<img
								key={index}
								src={img}
								alt={`Project ${index + 1}`}
								loading="lazy"
							/>
						))}
					</div>
					<div className="gallery-fade gallery-fade--left" />
					<div className="gallery-fade gallery-fade--right" />
				</div>
			</section>

			{/* SERVICES */}
			<section className="bento-card services">
				<h2>Top Services</h2>

				{/* CARPENTRY */}
				<div className="service">
					<div
						className="service-header"
						onClick={() => toggleService("carpentry")}
					>
						<FontAwesomeIcon icon={faHammer} />
						<h3>Carpentry</h3>
						<FontAwesomeIcon
							icon={faChevronDown}
							className={openService === "carpentry" ? "rotate" : ""}
						/>
					</div>

					{openService === "carpentry" && (
						<div className="service-content">
							<ul>
								<li>Accent walls</li>
								<li>Baseboard installation</li>
								<li>Trim work</li>
								<li>Custom bunk beds</li>
								<li>Cabinets</li>
								<li>And more</li>
							</ul>
							<p>
								Custom woodwork and detailed carpentry built to match your
								home’s style and needs.
							</p>
						</div>
					)}
				</div>

				{/* PAINTING */}
				<div className="service">
					<div
						className="service-header"
						onClick={() => toggleService("painting")}
					>
						<FontAwesomeIcon icon={faPaintRoller} />
						<h3>Painting</h3>
						<FontAwesomeIcon
							icon={faChevronDown}
							className={openService === "painting" ? "rotate" : ""}
						/>
					</div>

					{openService === "painting" && (
						<div className="service-content">
							<ul>
								<li>Interior painting</li>
								<li>Exterior painting</li>
								<li>Cabinet painting</li>
								<li>Staining</li>
							</ul>
							<p>
								Clean, professional finishes that refresh and protect your home.
							</p>
						</div>
					)}
				</div>

				{/* REMODELING */}
				<div className="service">
					<div
						className="service-header"
						onClick={() => toggleService("remodeling")}
					>
						<FontAwesomeIcon icon={faCouch} />
						<h3>Remodeling</h3>
						<FontAwesomeIcon
							icon={faChevronDown}
							className={openService === "remodeling" ? "rotate" : ""}
						/>
					</div>

					{openService === "remodeling" && (
						<div className="service-content">
							<ul>
								<li>Bathroom remodels</li>
								<li>Kitchen remodels</li>
							</ul>
							<p>
								Full remodels designed to improve functionality and increase
								home value.
							</p>
						</div>
					)}
				</div>

				{/* FLOORING */}
				<div className="service">
					<div
						className="service-header"
						onClick={() => toggleService("flooring")}
					>
						<FontAwesomeIcon icon={faLayerGroup} />
						<h3>Flooring</h3>
						<FontAwesomeIcon
							icon={faChevronDown}
							className={openService === "flooring" ? "rotate" : ""}
						/>
					</div>

					{openService === "flooring" && (
						<div className="service-content">
							<ul>
								<li>Floor installation</li>
							</ul>
							<p>Durable, high-quality flooring installed with precision.</p>
						</div>
					)}
				</div>

				{/* DRYWALL */}
				<div className="service">
					<div
						className="service-header"
						onClick={() => toggleService("drywall")}
					>
						<FontAwesomeIcon icon={faWrench} />
						<h3>Drywall</h3>
						<FontAwesomeIcon
							icon={faChevronDown}
							className={openService === "drywall" ? "rotate" : ""}
						/>
					</div>

					{openService === "drywall" && (
						<div className="service-content">
							<ul>
								<li>Drywall repair</li>
								<li>Drywall installation</li>
							</ul>
							<p>Smooth, seamless walls ready for paint and finishing.</p>
						</div>
					)}
				</div>

				{/* FENCING */}
				<div className="service">
					<div
						className="service-header"
						onClick={() => toggleService("fencing")}
					>
						<FontAwesomeIcon icon={faToolbox} />
						<h3>Fencing</h3>
						<FontAwesomeIcon
							icon={faChevronDown}
							className={openService === "fencing" ? "rotate" : ""}
						/>
					</div>

					{openService === "fencing" && (
						<div className="service-content">
							<ul>
								<li>Fence build</li>
								<li>Fence repair</li>
							</ul>
							<p>Strong, reliable fencing for privacy and security.</p>
						</div>
					)}
				</div>

				{/* ADDITIONAL */}
				<div className="service">
					<div
						className="service-header"
						onClick={() => toggleService("additional")}
					>
						<FontAwesomeIcon icon={faPlus} />
						<h3>Additional Services</h3>
						<FontAwesomeIcon
							icon={faChevronDown}
							className={openService === "additional" ? "rotate" : ""}
						/>
					</div>

					{openService === "additional" && (
						<div className="service-content">
							<ul>
								<li>Electrical work</li>
								<li>Welding</li>
							</ul>
							<p>
								Additional skilled services to handle a wide range of project
								needs.
							</p>
						</div>
					)}
				</div>
			</section>

			{/* CONTACT */}
			<section className="contact">
				<h2>Contact</h2>
				<p>Phone: (940) 206-3588</p>
				<p>Email: alcalasrenovations@gmail.com</p>

				{/* Social Icons */}
				<div className="social-icons">
					<a
						href="https://www.instagram.com/alcalasrenovations?igsh=MXVhbnFwZjZ6NDdtcw=="
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Instagram"
					>
						<FontAwesomeIcon icon={faInstagram} />
					</a>
					<a
						href="https://www.facebook.com/share/17DnKmZdat/?mibextid=wwXIfr"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Facebook"
					>
						<FontAwesomeIcon icon={faFacebook} />
					</a>
				</div>
			</section>
		</div>
	);
}
