import { Link } from "react-router-dom";
import logo from "./assets/images/AlcalasRenovationsLogo.png";

export default function Header() {
	return (
		<header className="header">
			<Link to="/">
				<img src={logo} alt="logo" className="logo" />
			</Link>
			<nav className="nav">
				<Link to="/">Home</Link>
				<Link to="/contact">Contact</Link>
			</nav>
		</header>
	);
}
