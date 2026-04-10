import { useState } from "react";

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
import project9 from "./assets/images/image9.jpeg";
import project10 from "./assets/images/image10.jpeg";
import project11 from "./assets/images/image11.jpeg";

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
	faCheck,
} from "@fortawesome/free-solid-svg-icons";

// Font Awesome Brand Icons
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

const projects = [
	{ img: project1, text: "Fence build + two tone stain" },
	{ img: project2, text: "Custom cabinetry installation" },
	{ img: project3, text: "Black accent wall" },
	{ img: project4, text: "Exterior painting" },
	{ img: project5, text: "Fully custom accent piece to bring the space to life" },
	{ img: project6, text: "Accent walls for a clinic in Denton, Texas" },
	{ img: project7, text: "Fully custom carpentry" },
	{ img: project8, text: "Custom bunk beds" },
	{ img: project9, text: "Built-in shelving and a clean arched design to bring everything together" },
	{ img: project10, text: "New windows installed all around" },
	{
		img: project11,
		text: "Custom wine station built to stand out.",
	},
];

export default function App() {
	const [openService, setOpenService] = useState<string | null>(null);

	const toggleService = (name: string) => {
		setOpenService(openService === name ? null : name);
	};

	return (
		<div className="container">
			{/* HEADER */}
			<header className="header">
				<img src={logo} alt="logo" className="logo" />

				<nav className="nav">
					<a>Home</a>
					<a href="./Contact.tsx">Contact</a>
				</nav>
			</header>

			<div className="divider"></div>
			{/* ABOUT */}
			<section className="about-section">
				<h2>ABOUT US</h2>
				<div className="about-content">
					<h4>
						Based in the DFW area, our services are prominent throughout Denton,
						where most of our projects are completed.
						<br />
						<br />
						With over 25 years of experience in the renovation industry, we take
						pride in delivering high-quality work with meticulous attention to
						detail and reliability.
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
			<div className="divider"></div>
			{/* PROJECTS */}
			<section>
				<h2>OUR WORK</h2>
				<h3>Scroll through our projects</h3>
				<div className="gallery-wrapper">
					<div className="projects-gallery">
						{projects.map((project, index) => (
							<div className="project-card" key={index}>
								<img src={project.img} alt={`Project ${index + 1}`} />

								<div className="project-overlay">
									<p>{project.text}</p>
								</div>
							</div>
						))}
					</div>
					<p>
						Each image represents our commitment to quality and craftsmanship in
						every project we undertake.
					</p>
				</div>
			</section>
			<div className="divider"></div>
			{/* SERVICES */}
			<section>
				<h2>TOP SERVICES</h2>
				<p>
					From fully custom carpentry, to exterior painting, to accent walls. We
					are committed to delivering high-quality craftsmanship on every
					project.
				</p>
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
						<h4>Painting</h4>
						<FontAwesomeIcon
							icon={faChevronDown}
							className={openService === "painting" ? "rotate" : ""}
						/>
					</div>

					{openService === "painting" && (
						<div className="service-content">
							<div className="service-list">
								<div className="service-item">
									<FontAwesomeIcon icon={faCheck} />
									<span>Interior painting</span>
								</div>
								<div className="service-item">
									<FontAwesomeIcon icon={faCheck} />
									<span>Exterior painting</span>
								</div>
								<div className="service-item">
									<FontAwesomeIcon icon={faCheck} />
									<span>Cabinet painting</span>
								</div>
								<div className="service-item">
									<FontAwesomeIcon icon={faCheck} />
									<span>Staining</span>
								</div>
							</div>
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
						<h4>Remodeling</h4>
						<FontAwesomeIcon
							icon={faChevronDown}
							className={openService === "remodeling" ? "rotate" : ""}
						/>
					</div>

					{openService === "remodeling" && (
						<div className="service-content">
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
									<span>Floor installation</span>
								</div>
							</div>
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
									<span>Drywall repair</span>
								</div>
								<div className="service-item">
									<FontAwesomeIcon icon={faCheck} />
									<span>Drywall installation</span>
								</div>
							</div>
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
						<h4>Fencing</h4>
						<FontAwesomeIcon
							icon={faChevronDown}
							className={openService === "fencing" ? "rotate" : ""}
						/>
					</div>

					{openService === "fencing" && (
						<div className="service-content">
							<div className="service-list">
								<div className="service-item">
									<FontAwesomeIcon icon={faCheck} />
									<span>Fence build</span>
								</div>
								<div className="service-item">
									<FontAwesomeIcon icon={faCheck} />
									<span>Fence repair</span>
								</div>
							</div>
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
									<span>Electrical work</span>
								</div>
								<div className="service-item">
									<FontAwesomeIcon icon={faCheck} />
									<span>Welding</span>
								</div>
							</div>
							<p>
								Additional skilled services to handle a wide range of project
								needs.
							</p>
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
	);
}
