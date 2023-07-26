// Import packages
import { Link } from "react-router-dom";

// Import du style
import "../css/components/LinkLogInSubscribe.css";

function LinkLogInSubscribe() {
  const currentUrl = window.location.pathname;
  return (
    <div>
      {currentUrl === "/subscribe" ? (
        <nav className="navBarConnexion">
          <ul>
            <li className="signinLinkSelected">
              <Link to="/subscribe">S'inscrire</Link>
            </li>
            <li className="loginLink">
              <Link to="/connexion">Se connecter</Link>
            </li>
          </ul>
        </nav>
      ) : (
        <nav className="navBarConnexion">
          <ul>
            <li className="signinLink">
              <Link to="/subscribe">S'inscrire</Link>
            </li>
            <li className="loginLinkSelected">
              <Link to="/connexion">Se connecter</Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}
export default LinkLogInSubscribe;
