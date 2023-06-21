import { Link } from "react-router-dom";
import { useContext } from "react";

// Import du style
import "../css/components/MainNavBar.css";

// Import des contexts
import MenuContext from "../contexts/MenuContext";

// Import des images
import logo from "../assets/logos/logo3.png";
import exit from "../assets/icons/black_exit.svg";
import cross from "../assets/icons/cross.svg";

function MainNavBar() {
  const { isMenuShow, setIsMenuShow } = useContext(MenuContext);

  return (
    <nav className="mainNav">
      <div className="logo">
        <img src={logo} alt="" className="logoImg" />
      </div>
      <button
        type="button"
        className="burger"
        onClick={() => setIsMenuShow(true)}
      >
        <span />
        <span />
        <span />
      </button>
      <div className={`menu ${isMenuShow ? "showMenu" : null}`}>
        <ul>
          <li>
            <button type="button" onClick={() => setIsMenuShow(false)}>
              <img src={cross} alt="" />
            </button>
          </li>
          <li className="myAccountLink">
            <Link to="/dashboard/my-profile">Mon compte</Link>
          </li>
          <li className="subscribeLink">
            <Link to="/subscribe">S'inscrire</Link>
          </li>
          <li className="homeLink">
            <Link to="/">Accueil</Link>
          </li>
          <li className="offersLink">
            <Link to="/offers">Offres d'emploi</Link>
          </li>
          <li className="disconnectLink">
            <Link to="/">
              <img src={exit} alt="Icone de déconnection" />
              &nbsp;Se déconnecter
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default MainNavBar;
