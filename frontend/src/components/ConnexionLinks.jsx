import { Link } from "react-router-dom";

// Import du style
import "../css/components/ConnexionLinks.css";

function ConnexionLinks() {
  const currentUrl = window.location.pathname;
  return (
    <div>
      {currentUrl === "/admin-connexion" ? (
        <h1 id="titleEspaceAdmin">Espace Administrateur</h1>
      ) : (
        <nav className="nav-bar-connexion">
          <ul>
            <li className="signin-selected">
              <Link to="/subscribe">S'inscrire</Link>
            </li>
            <li className="login-selected">
              <Link to="/connexion">Se connecter</Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}

export default ConnexionLinks;
