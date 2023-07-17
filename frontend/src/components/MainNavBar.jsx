import { Link } from "react-router-dom";
import { useContext } from "react";

// Import des contexts
import MenuContext from "../contexts/MenuContext";
import TokenContext from "../contexts/TokenContext";

// Import des images
import logo from "../assets/logos/logo3.png";
import exit from "../assets/icons/black_exit.svg";
import cross from "../assets/icons/cross.svg";

function MainNavBar() {
  const { isMenuShow, setIsMenuShow } = useContext(MenuContext);
  const { userToken, setUserCookie } = useContext(TokenContext);

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
        <div className="crossSection">
          <button type="button" onClick={() => setIsMenuShow(false)}>
            <img src={cross} alt="Croix de fermeture du menu" />
          </button>
        </div>
        <button
          type="button"
          className="button"
          onClick={() => setIsMenuShow(false)}
        >
          {userToken ? (
            <Link to="/dashboard/my-profile">
              Mon compte&nbsp;<span className="greenSpanRole">(connecté)</span>
            </Link>
          ) : (
            <Link to="/connexion">
              Mon compte&nbsp;<span className="redSpanRole">(déconnecté)</span>
            </Link>
          )}
        </button>

        {!userToken ? (
          <button
            type="button"
            className="subscribeLink"
            onClick={() => setIsMenuShow(false)}
          >
            <Link to="/subscribe">S'inscrire</Link>
          </button>
        ) : null}
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
        {userToken ? (
          <button
            type="button"
            className="disconnectLink"
            onClick={() => {
              setIsMenuShow(false);
              setUserCookie();
            }}
          >
            <Link to="/">
              <img src={exit} alt="Icone de déconnection" />
              <p>&nbsp;Se déconnecter</p>
            </Link>
          </button>
        ) : null}
      </div>
    </nav>
  );
}

export default MainNavBar;
