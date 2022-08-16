import "../style/Header.css";
import logo from "../assets/logo-sportsee.svg";

function Header() {
  return (
    <header className="header-sportsee">
      <img alt="logo de SportSee" src={logo}></img>
      <a href="/">Accueil</a>
      <a href="/">Profile</a>
      <a href="/">Réglage</a>
      <a href="/">Communauté</a>
    </header>
  );
}

export default Header;
