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
        <img src={logo} alt="Logo d'Externatic" className="logoImg" />
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
        <button type="button" onClick={() => setIsMenuShow(false)}>
          <img src={cross} alt="Croix de fermeture du menu" />
        </button>
        <button
          type="button"
          className="myAccountLink"
          onClick={() => setIsMenuShow(false)}
        >
          <Link to="/dashboard/my-profile">Mon compte</Link>
        </button>
        <button
          type="button"
          className="subscribeLink"
          onClick={() => setIsMenuShow(false)}
        >
          <Link to="/subscribe">S'inscrire</Link>
        </button>
        <button
          type="button"
          className="homeLink"
          onClick={() => setIsMenuShow(false)}
        >
          <Link to="/">Accueil</Link>
        </button>
        <button
          type="button"
          className="offersLink"
          onClick={() => setIsMenuShow(false)}
        >
          <Link to="/offers">Offres d'emploi</Link>
        </button>
        <button
          type="button"
          className="disconnectLink"
          onClick={() => setIsMenuShow(false)}
        >
          <Link to="/">
            <img src={exit} alt="Icone de déconnection" />
            &nbsp;Se déconnecter
          </Link>
        </button>
      </div>
    </nav>
  );
}

export default MainNavBar;
