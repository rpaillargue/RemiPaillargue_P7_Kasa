import logo from "../../assets/logo_footer.png";

function Footer() {
  return (
    <div className="footer">
      <img className="logo-footer" src={logo} alt="logo kasa" />
      <p className="text-footer">© 2020 Kasa. All rights reserved</p>
    </div>
  );
}

export default Footer;
