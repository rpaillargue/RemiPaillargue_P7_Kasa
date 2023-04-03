import logo from "../../assets/logo_header.png";
import "./header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <img className="logo-header" src={logo} alt="logo de kasa" />
      <nav className="nav-header">
        <Link to="/" className="nav-header-link">
          Accueil
        </Link>
        <Link to="/about" className="nav-header-link">
          À Propos
        </Link>
      </nav>
    </div>
  );
}

export default Header;
