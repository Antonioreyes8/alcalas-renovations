import { Link } from "react-router-dom";
import logo from "./assets/images/AlcalasRenovationsLogo.png";

export default function Header() {
	return (
		<header className="header">
			<div className="header-inner">
				<Link to="/" aria-label="Alcala's Renovations home">
					<img src={logo} alt="Alcala's Renovations" className="logo" />
				</Link>
				<nav className="nav" aria-label="Main navigation">
					<Link to="/">Home</Link>
					<Link to="/contact" className="nav-contact">
						Contact
					</Link>
				</nav>
			</div>
		</header>
	);
}
