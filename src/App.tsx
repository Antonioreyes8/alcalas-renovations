import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Contact from "./Contact";
import {
	faHammer,
	faChevronDown,
	faCheck,
	faCouch,
	faLayerGroup,
	faWrench,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

import project1 from "./assets/images/image1.jpeg";
import project2 from "./assets/images/image2.jpeg";
import project3 from "./assets/images/image3.jpeg";
import project4 from "./assets/images/image4.jpeg";
import project5 from "./assets/images/image5.jpeg";
import project6 from "./assets/images/image6.jpeg";
import project7 from "./assets/images/image7.jpeg";
import project8 from "./assets/images/image8.jpeg";
import project9 from "./assets/images/image9.jpeg";
import project10 from "./assets/images/image10.jpeg";
import project11 from "./assets/images/image11.jpeg";
import project12 from "./assets/images/image12.jpeg";
import project13 from "./assets/images/image13.jpeg";
import project14 from "./assets/images/image14.jpeg";
import project15 from "./assets/images/image15.jpeg";

const projects = [
	{
		img: project1,
		type: "Interior Carpentry",
		features: ["Custom built-ins", "Painted millwork", "Precision trim"],
	},
	{
		img: project2,
		type: "Built in shelving",
		features: ["Surface prep", "Color consultation", "Weatherproof finish"],
	},
	{
		img: project3,
		type: "Accent Wall",
		features: [
			"Fluted wood paneling",
			"Custom media focal point",
			"Bold visual contrast",
		],
	},
	{
		img: project4,
		type: "Exterior Renovation",
		features: ["Exterior updates", "Tudor-style finish", "Curb appeal boost"],
	},
	{
		img: project5,
		type: "Trim & Millwork",
		features: ["Box-molding paneling", "Arched trim", "Custom detail"],
	},
	{
		img: project6,
		type: "Feature Wall",
		features: [
			"Diamond lattice pattern",
			"Precision installation",
			"Architectural texture",
		],
	},
	{
		img: project7,
		type: "Hallway Accent",
		features: ["Architectural detail", "Feature lighting", "Custom trim"],
	},
	{
		img: project8,
		type: "Custom Bedrooms",
		features: ["Triple-tier bunk bed", "Built-in storage", "Room-specific fit"],
	},
	{
		img: project9,
		type: "Accent Alcove",
		features: ["Arched framing", "Monochromatic finish", "Custom niche"],
	},
	{
		img: project10,
		type: "Window Upgrade",
		features: ["Black-frame windows", "Energy efficiency", "Curb appeal"],
	},
	{
		img: project11,
		type: "Custom Millwork",
		features: ["Crown molding", "Custom drawers", "Luxury finishes"],
	},
	{
		img: project12,
		type: "Classic Remodel",
		features: ["Ornate molding", "Cabinetry", "Recessed lighting"],
	},
	{
		img: project13,
		type: "Kitchen Renovation",
		features: ["Open-concept layout", "Brick accent wall", "Custom millwork"],
	},
	{
		img: project14,
		type: "Architectural Fence",
		features: ["Horizontal slats", "Structural timbers", "Artful design"],
	},
	{
		img: project15,
		type: "Fence Staining",
		features: ["Rich stain", "Wood protection", "Exterior enhancement"],
	},
];

export default function App() {
	const [openService, setOpenService] = useState<string | null>(null);
	const toggleService = (name: string) =>
		setOpenService(openService === name ? null : name);

	return (
		<Routes>
			<Route
				path="/"
				element={
					<div>
						<Header />
						<div className="divider"></div>
						<div className="aboutcontainer">
							{/* ABOUT */}
							<section className="about-section">
								<h2>ABOUT US</h2>
								<div className="about-content">
									<h4>
										Based in the DFW area, our services are prominent throughout
										Denton, where most of our projects are completed.
										<br />
										<br />
										With over 25 years of experience in the renovation industry,
										we take pride in delivering high-quality work with
										meticulous attention to detail and reliability.
									</h4>
									<div className="about-highlights-wrapper">
										<div className="about-highlight">
											<h4>+25 years</h4>
											<p>of experience</p>
										</div>
										<div className="about-highlight">
											<h4>Dallas - Fort Worth</h4>
											<p>and surrounding areas</p>
										</div>
										<div className="about-highlight">
											<h4>Quality Work</h4>
											<p>with attention to detail</p>
										</div>
									</div>
								</div>
							</section>
						</div>
						<div className="container">
							<div className="divider"></div>
							{/* PROJECTS */}
							<section>
								<h2>OUR WORK</h2>
								<h3>Scroll through our projects</h3>
								<p>
									From fully custom carpentry, to exterior painting, to accent
									walls.
								</p>
								<div className="gallery-wrapper">
									<div className="projects-gallery">
										{projects.map((project, index) => (
											<div className="project-card" key={index}>
												<img src={project.img} alt={`Project ${index + 1}`} />
												<div className="project-overlay">
													<div className="project-overlay-content">
														<h4>{project.type}</h4>
														<ul className="project-features">
															{project.features.map((feature, featureIndex) => (
																<li key={featureIndex}>{feature}</li>
															))}
														</ul>
													</div>
												</div>
											</div>
										))}
									</div>
								</div>
							</section>

							{/* SERVICES */}
							<section>
								<h2>TOP SERVICES</h2>

								{/* CARPENTRY */}
								<div className="service">
									<div
										className="service-header"
										onClick={() => toggleService("carpentry")}
									>
										<FontAwesomeIcon icon={faHammer} />
										<h4>Carpentry</h4>
										<FontAwesomeIcon
											icon={faChevronDown}
											className={openService === "carpentry" ? "rotate" : ""}
										/>
									</div>

									{openService === "carpentry" && (
										<div className="service-content">
											<div className="service-left">
												<div className="service-list">
													<div className="service-item">
														<FontAwesomeIcon icon={faCheck} />
														<span>Accent walls</span>
													</div>
													<div className="service-item">
														<FontAwesomeIcon icon={faCheck} />
														<span>Baseboard installation</span>
													</div>
													<div className="service-item">
														<FontAwesomeIcon icon={faCheck} />
														<span>Trim work</span>
													</div>
													<div className="service-item">
														<FontAwesomeIcon icon={faCheck} />
														<span>Custom bunk beds</span>
													</div>
													<div className="service-item">
														<FontAwesomeIcon icon={faCheck} />
														<span>Cabinets</span>
													</div>
													<div className="service-item">
														<FontAwesomeIcon icon={faCheck} />
														<span>And more</span>
													</div>
												</div>
												<h5>
													From custom built-ins to precise trim work, we deliver
													quality craftsmanship that elevates your living space.
												</h5>
											</div>
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
										<h4>Remodeling</h4>
										<FontAwesomeIcon
											icon={faChevronDown}
											className={openService === "remodeling" ? "rotate" : ""}
										/>
									</div>
									{openService === "remodeling" && (
										<div className="service-content">
											<div className="service-left">
												<div className="service-list">
													<div className="service-item">
														<FontAwesomeIcon icon={faCheck} />
														<span>Bathroom remodels</span>
													</div>
													<div className="service-item">
														<FontAwesomeIcon icon={faCheck} />
														<span>Kitchen remodels</span>
													</div>
												</div>
												<h5>
													Full remodels designed to improve functionality and
													increase home value.
												</h5>
											</div>
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
										<h4>Flooring</h4>
										<FontAwesomeIcon
											icon={faChevronDown}
											className={openService === "flooring" ? "rotate" : ""}
										/>
									</div>
									{openService === "flooring" && (
										<div className="service-content">
											<div className="service-list">
												<div className="service-item">
													<FontAwesomeIcon icon={faCheck} />
													<span>Hardwood installation</span>
												</div>
												<div className="service-item">
													<FontAwesomeIcon icon={faCheck} />
													<span>Laminate & vinyl</span>
												</div>
											</div>
											<h5>
												Expert installation of premium flooring options built to
												withstand daily life.
											</h5>
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
										<h4>Drywall</h4>
										<FontAwesomeIcon
											icon={faChevronDown}
											className={openService === "drywall" ? "rotate" : ""}
										/>
									</div>
									{openService === "drywall" && (
										<div className="service-content">
											<div className="service-list">
												<div className="service-item">
													<FontAwesomeIcon icon={faCheck} />
													<span>Installation & repair</span>
												</div>
												<div className="service-item">
													<FontAwesomeIcon icon={faCheck} />
													<span>Texturing & finishing</span>
												</div>
											</div>
											<h5>
												Professional repairs, seamless texturing, and clean
												finishes for a flawless look.
											</h5>
										</div>
									)}
								</div>

								{/* FENCING */}
								<div className="service">
									<div
										className="service-header"
										onClick={() => toggleService("fencing")}
									>
										<FontAwesomeIcon icon={faLayerGroup} />
										<h4>Fencing</h4>
										<FontAwesomeIcon
											icon={faChevronDown}
											className={openService === "fencing" ? "rotate" : ""}
										/>
									</div>
									{openService === "fencing" && (
										<div className="service-content">
											<div className="service-left">
												<div className="service-list">
													<div className="service-item">
														<FontAwesomeIcon icon={faCheck} />
														<span>Custom fence builds</span>
													</div>
													<div className="service-item">
														<FontAwesomeIcon icon={faCheck} />
														<span>Gate installation</span>
													</div>
												</div>
												<h5>
													High-quality perimeter solutions combining structural
													durability with clean, modern aesthetics.
												</h5>
											</div>
										</div>
									)}
								</div>

								{/* ADDITIONAL / MISC */}
								<div className="service">
									<div
										className="service-header"
										onClick={() => toggleService("additional")}
									>
										<FontAwesomeIcon icon={faHammer} />
										<h4>Additional Services</h4>
										<FontAwesomeIcon
											icon={faChevronDown}
											className={openService === "additional" ? "rotate" : ""}
										/>
									</div>
									{openService === "additional" && (
										<div className="service-content">
											<div className="service-list">
												<div className="service-item">
													<FontAwesomeIcon icon={faCheck} />
													<span>Decks, porches & more</span>
												</div>
											</div>
											<h5>Ask us about any project — we can usually help.</h5>
										</div>
									)}
								</div>
							</section>
							<div className="divider"></div>
							{/* CONTACT */}
							<div className="footer">
								<h3>ALCALA'S RENOVATIONS</h3>
								<p>Dallas - Fort Worth</p>
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
							</div>
						</div>
					</div>
				}
			/>
			<Route path="/contact" element={<Contact />} />
		</Routes>
	);
}
