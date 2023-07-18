// Import packages
import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import Swal from "sweetalert2";

// Import components
import LinkLogInSubscribe from "../components/LinkLogInSubscribe";
import FormNewApplicant from "../components/FormNewApplicant";
import FormNewCompany from "../components/FormNewCompany";

// Import context
// import ValidationFormContext from "../contexts/ValidationFormContext";

// Import images
import cardApplicant from "../assets/images/card_applicant.png";
import cardCompany from "../assets/images/card_company.png";

function Subscribe() {
  const [showForm, setShowForm] = useState(false);
  const [isApplicantCardFocused, setIsApplicantCardFocused] = useState(false);
  const [isCompanyCardFocused, setIsCompanyCardFocused] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        !e.target.closest(".applicantCard") &&
        !e.target.closest(".companyCard") &&
        !e.target.closest(".formContainer")
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
      <LinkLogInSubscribe />
      <div className="subscribeOption">
        <section className="subscribeCards">
          <button
            type="button"
            className={`applicantCard ${
              isApplicantCardFocused ? "focused" : ""
            }`}
            onClick={handleApplicantCardClick}
          >
            <h2>Je suis un candidat</h2>
            <img src={cardApplicant} alt="applicant" />
          </button>
          <button
            type="button"
            className={`companyCard ${isCompanyCardFocused ? "focused" : ""}`}
            onClick={handleCompanyCardClick}
          >
            <img src={cardCompany} alt="company" />
            <h2>Je suis un employeur</h2>
          </button>
        </section>
        {showForm && (
          <div className="formContainer">
            {isApplicantCardFocused && <FormNewApplicant />}
            {isCompanyCardFocused && <FormNewCompany />}
          </div>
        )}
      </div>
    </>
  );
}

export default Subscribe;
