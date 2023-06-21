import { useState } from "react";

// Import du style
import "../css/components/MainNavBar.css";

// Import des images
import logo from "../assets/logos/logo3.png";
import exit from "../assets/icons/black_exit.svg";
import cross from "../assets/icons/cross.svg";

function MainNavBar() {
  const [isMenuShow, setIsMenuShow] = useState(false);

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
            <a href="../dashboard/my-profile">Mon compte</a>
          </li>
          <li className="subscribeLink">
            <a href="../subscribe">S'inscrire</a>
          </li>
          <li className="homeLink">
            <a href="../">Accueil</a>
          </li>
          <li className="offersLink">
            <a href="../offers">Offres d'emploi</a>
          </li>
          <li className="disconnectLink">
            <a href="../">
              <img src={exit} alt="Icone de déconnection" />
              &nbsp;Se déconnecter
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default MainNavBar;
