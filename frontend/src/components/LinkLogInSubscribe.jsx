// Import packages
import { Link } from "react-router-dom";
import { useContext } from "react";

// Import du context
import ValidationFormContext from "../contexts/ValidationFormContext";

// Import du style
import "../css/components/LinkLogInSubscribe.css";

function LinkLogInSubscribe() {
  const { handleInputClick } = useContext(ValidationFormContext);
  const currentUrl = window.location.pathname;
  return (
    <div>
      {currentUrl === "/subscribe" ? (
        <nav className="navBarConnexion">
          <ul>
            <li className="signinLinkSelected">
              <Link to="/subscribe" onClick={handleInputClick}>
                S'inscrire
              </Link>
            </li>
            <li className="loginLink">
              <Link to="/connexion" onClick={handleInputClick}>
                Se connecter
              </Link>
            </li>
          </ul>
        </nav>
      ) : (
        <nav className="navBarConnexion">
          <ul>
            <li className="signinLink">
              <Link to="/subscribe" onClick={handleInputClick}>
                S'inscrire
              </Link>
            </li>
            <li className="loginLinkSelected">
              <Link to="/connexion" onClick={handleInputClick}>
                Se connecter
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}
export default LinkLogInSubscribe;
