import logo from "../../assets/logo_header.png";
import "./header.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <img className="logo-header" src={logo} alt="logo de kasa" />
      <nav className="nav-header">
        <NavLink to="/" className="nav-header-link">
          Accueil
        </NavLink>
        <NavLink to="/about" className="nav-header-link">
          À Propos
        </NavLink>
      </nav>
    </div>
  );
}

export default Header;
