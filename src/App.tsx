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
        text: "Complete interior refresh including custom built-ins, precision trim, and painted millwork to modernize the living areas while preserving original character.",
    },
    {
        img: project2,
        text: "Full exterior repaint with surface prep, color consultation, and durable weatherproof finishes that transformed curb appeal and protected the home for years.",
    },
    {
        img: project3,
        text: "A kitchen cabinetry overhaul featuring shaker-style custom cabinets, soft-close hardware, and integrated shelving to maximize storage and flow.",
    },
    {
        img: project4,
        text: "Accent wall installation using vertical paneling and a hand-finished stain to create depth and a focal point in the open-plan dining area.",
    },
    {
        img: project5,
        text: "Built-in seating and storage for a compact mudroom: engineered joinery with durable finishes and hidden compartments for a clean, functional entry.",
    },
    {
        img: project6,
        text: "This project for a clinic in Denton featured a large-scale diamond lattice accent wall, meticulously measured and installed to create depth and visual interest.",
    },
    {
        img: project7,
        text: "Bathroom refresh with new tile, floating vanity, upgraded plumbing fixtures, and optimized layout to improve both style and usability.",
    },
    {
        img: project8,
        text: "Custom fence and gate installation using weather-resistant timbers and stainless hardware, designed for privacy and long-term durability.",
    },
    {
        img: project9,
        text: "Deck refinishing and structural repairs, including sand-and-seal treatment and reinforcement of joists for a safe, long-lasting outdoor space.",
    },
    {
        img: project10,
        text: "Interior door replacements and trim upgrades across multiple rooms to improve consistency, sound isolation, and finish quality.",
    },
    {
        img: project11,
        text: "From the oversized crown molding that anchors the unit to the ceiling, to the precision-fit lower drawers with luxury brass pulls, every element was built to spec.",
    },
    {
        img: project12,
        text: "From the installation of ornate crown molding to the precision-fit cabinetry and updated recessed lighting, this remodel balanced classic detail with modern function.",
    },
    {
        img: project13,
        text: "We brought this open-concept kitchen to life by blending warm natural wood tones with a stunning full-height brick accent wall and custom millwork.",
    },
    {
        img: project14,
        text: "By pairing deep charcoal horizontal slats with rich, warm-toned structural timbers, we created a striking fence that reads like architectural art.",
    },
    {
        img: project15,
        text: "This project featured staining a wood fence to a rich, warm tone that complements the home’s exterior and surrounding landscaping.",
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
                        <div className="container">
                            <div className="divider"></div>
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
                                        we take pride in delivering high-quality work with meticulous
                                        attention to detail and reliability.
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
                                                    <p>{project.text}</p>
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
                                                <p>
                                                    Custom woodwork and detailed carpentry built to match
                                                    your home's style and needs.
                                                </p>
                                            </div>
                                            <div className="service-right">
                                                <div className="service-project-card">
                                                    <img
                                                        src={project6}
                                                        alt="Clinic diamond lattice accent wall"
                                                    />
                                                </div>
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
                                                <p>
                                                    Full remodels designed to improve functionality and
                                                    increase home value.
                                                </p>
                                            </div>
                                            <div className="service-right">
                                                <div className="service-project-card">
                                                    <img
                                                        src={project13}
                                                        alt="Open-concept kitchen with brick accent wall"
                                                    />
                                                </div>
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
                                            <p>Durable flooring solutions installed with care.</p>
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
                                            <p>Seamless drywall work and professional finishes.</p>
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
                                                <p>
                                                    By pairing deep charcoal horizontal slats with rich,
                                                    warm-toned structural timbers, we created a striking
                                                    fence that reads like architectural art.
                                                </p>
                                            </div>
                                            <div className="service-right">
                                                <div className="service-project-card">
                                                    <img
                                                        src={project14}
                                                        alt="Modern horizontal slat fence"
                                                    />
                                                </div>
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
                                            <p>Ask us about any project — we can usually help.</p>
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