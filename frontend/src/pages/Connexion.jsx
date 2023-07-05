import { useState, useEffect, useContext } from "react";

// Import du context
import ConnexionContext from "../contexts/ConnexionContext";

// Import style & images
import "../css/pages/Connexion.css";
import cardApplicant from "../assets/images/card_applicant.png";
import cardCompany from "../assets/images/card_company.png";

// Import composants
import FormularConnexion from "../components/FormularConnexion";
import ConnexionLinks from "../components/ConnexionLinks";

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
    <div>
      <ConnexionLinks />
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
        {showForm && <FormularConnexion />}
      </div>
    </div>
  );
}
export default Connexion;
