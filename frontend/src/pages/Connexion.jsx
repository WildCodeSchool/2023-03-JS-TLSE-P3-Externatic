import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";

// Import du context
import ConnexionContext from "../contexts/ConnexionContext";

// Import style & images
import "../css/pages/Connexion.css";
import cardApplicant from "../assets/images/card_applicant.png";
import cardCompany from "../assets/images/card_company.png";

// Import composant
import FormularConnexion from "../components/FormularConnexion";

function Connexion() {
  const { showForm, setShowForm } = useContext(ConnexionContext);
  const [isApplicantCardFocused, setIsApplicantCardFocused] = useState(false);
  const [isCompanyCardFocused, setIsCompanyCardFocused] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        !e.target.closest(".applicant-card") &&
        !e.target.closest(".company-card") &&
        !e.target.closest(".signin-form")
      ) {
        setShowForm(false);
        setIsApplicantCardFocused(false);
        setIsCompanyCardFocused(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  const handleApplicantCardClick = () => {
    setShowForm(true);
    setIsApplicantCardFocused(true);
    setIsCompanyCardFocused(false);
  };
  const handleCompanyCardClick = () => {
    setShowForm(true);
    setIsApplicantCardFocused(false);
    setIsCompanyCardFocused(true);
  };

  return (
    <>
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
      <div className="container-login">
        <div className="login-option">
          <section className="connexion-cards">
            <button
              type="button"
              className={`applicant-card ${
                isApplicantCardFocused ? "focused" : ""
              }`}
              onClick={handleApplicantCardClick}
            >
              <h2>Je suis un candidat</h2>
              <img src={cardApplicant} alt="applicant" />
            </button>
            <button
              type="button"
              className={`company-card ${
                isCompanyCardFocused ? "focused" : ""
              }`}
              onClick={handleCompanyCardClick}
            >
              <img src={cardCompany} alt="company" />
              <h2>Je suis un employeur</h2>
            </button>
          </section>
        </div>
        {showForm && (
          <div className="form-container">
            {" "}
            <FormularConnexion />
          </div>
        )}
      </div>
    </>
  );
}
export default Connexion;
