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
		text: "This project highlights our expertise in custom wainscoting, featuring perfectly scaled recessed arches and integrated electrical for statement lighting.",
		features: ["Custom built-ins", "Painted millwork", "Precision trim"],
	},
	{
		img: project2,
		type: "Built in shelving",
		text: "This custom build featured floor-to-ceiling U-shaped shelving, precision-engineered to provide clean lines and heavy-duty durability",
		features: ["Surface prep", "Color consultation", "Weatherproof finish"],
	},
	{
		img: project3,
		type: "Accent Wall",
		text: "We created this striking, floor-to-ceiling black fluted wood accent wall to serve as the sophisticated anchor for a modern media and fireplace center.",
		features: [
			"Fluted wood paneling",
			"Custom media focal point",
			"Bold visual contrast",
		],
	},
	{
		img: project4,
		type: "Exterior Renovation",
		text: "This project highlights our team in action, providing professional exterior updates to a stunning Tudor-inspired residence.",
		features: ["Exterior updates", "Tudor-style finish", "Curb appeal boost"],
	},
	{
		img: project5,
		type: "Trim & Millwork",
		text: "Featured a custom tall box-molding paneling and bespoke arched window trim.",
		features: ["Box-molding paneling", "Arched trim", "Custom detail"],
	},
	{
		img: project6,
		type: "Feature Wall",
		text: "This project for a clinic in Denton featured a large-scale diamond lattice accent wall, meticulously measured and installed to create depth and visual interest.",
		features: [
			"Diamond lattice pattern",
			"Precision installation",
			"Architectural texture",
		],
	},
	{
		img: project7,
		type: "Hallway Accent",
		text: "Hallways are often overlooked, but we see them as an opportunity for architectural interest.",
		features: ["Architectural detail", "Feature lighting", "Custom trim"],
	},
	{
		img: project8,
		type: "Custom Bedrooms",
		text: "Our team designed and installed this integrated triple tier bunk bed system to fit the exact dimensions of the room, ensuring a seamless look that furniture from a store simply can’t provide.",
		features: ["Triple-tier bunk bed", "Built-in storage", "Room-specific fit"],
	},
	{
		img: project9,
		type: "Accent Alcove",
		text: "This project featured a custom-framed arched alcove drenched in a rich, monochromatic burgundy.",
		features: ["Arched framing", "Monochromatic finish", "Custom niche"],
	},
	{
		img: project10,
		type: "Window Upgrade",
		text: "We completely revitalized the facade of this grand estate by installing high-efficiency, black-frame Pella windows.",
		features: ["Black-frame windows", "Energy efficiency", "Curb appeal"],
	},
	{
		img: project11,
		type: "Custom Millwork",
		text: "From the oversized crown molding that anchors the unit to the ceiling, to the precision-fit lower drawers with luxury brass pulls, every element was built to spec.",
		features: ["Crown molding", "Custom drawers", "Luxury finishes"],
	},
	{
		img: project12,
		type: "Classic Remodel",
		text: "From the installation of ornate crown molding to the precision-fit cabinetry and updated recessed lighting, this remodel balanced classic detail with modern function.",
		features: ["Ornate molding", "Cabinetry", "Recessed lighting"],
	},
	{
		img: project13,
		type: "Kitchen Renovation",
		text: "We brought this open-concept kitchen to life by blending warm natural wood tones with a stunning full-height brick accent wall and custom millwork.",
		features: ["Open-concept layout", "Brick accent wall", "Custom millwork"],
	},
	{
		img: project14,
		type: "Architectural Fence",
		text: "By pairing deep charcoal horizontal slats with rich, warm-toned structural timbers, we created a striking fence that reads like architectural art.",
		features: ["Horizontal slats", "Structural timbers", "Artful design"],
	},
	{
		img: project15,
		type: "Fence Staining",
		text: "This project featured staining a wood fence to a rich, warm tone that complements the home’s exterior and surrounding landscaping.",
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
														<p>{project.text}</p>
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
										<div className="service-content service-split">
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
													Custom woodwork and detailed carpentry built to match
													your home's style and needs.
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
										<div className="service-content service-split">
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
											<h5>Durable flooring solutions installed with care.</h5>
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
											<h5>Seamless drywall work and professional finishes.</h5>
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
										<div className="service-content service-split">
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
													By pairing deep charcoal horizontal slats with rich,
													warm-toned structural timbers, we created a striking
													fence that reads like architectural art.
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
