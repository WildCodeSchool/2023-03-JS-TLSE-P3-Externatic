import { Link } from "react-router-dom";

function Connexion() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/subscribe">S'inscrire</Link>
          </li>
          <li>
            <Link to="/connexion">Se connecter</Link>
          </li>
        </ul>
      </nav>
      <div>
        <p>Je suis un candidat</p>
        <img src="./images/candidat.jpg" alt="applicant" />
      </div>
      <div>
        <p>Je suis un employeur</p>
        <img src="../assets/images/card_company.png" alt="company" />
      </div>
      <form
        className="signin-form"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Mot de passe" />
        <span>Mot de passe oublié?</span>
        <button type="button">Je me connecte</button>
      </form>
    </>
  );
}
export default Connexion;
