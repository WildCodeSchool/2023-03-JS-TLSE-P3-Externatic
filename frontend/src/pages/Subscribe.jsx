// Import packages
import { useState, useEffect } from "react";

// Import components
import LinkLogInSubscribe from "../components/LinkLogInSubscribe";

// Import images
import cardApplicant from "../assets/images/card_applicant.png";
import cardCompany from "../assets/images/card_company.png";

// Import style
import "../css/pages/Subscribe.css";

function Subscribe() {
  // const [showForm, setShowForm] = useState(false);
  const [isApplicantCardFocused, setIsApplicantCardFocused] = useState(false);
  const [isCompanyCardFocused, setIsCompanyCardFocused] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        !e.target.closest(".applicant-card") &&
        !e.target.closest(".company-card") &&
        !e.target.closest(".signin-form")
      ) {
        // setShowForm(false);
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
    // setShowForm(true);
    setIsApplicantCardFocused(true);
    setIsCompanyCardFocused(false);
  };
  const handleCompanyCardClick = () => {
    // setShowForm(true);
    setIsApplicantCardFocused(false);
    setIsCompanyCardFocused(true);
  };
  return (
    <>
      <LinkLogInSubscribe />
      <div className="loginOption">
        <section className="connexionCards">
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
      </div>
      {/* {showForm && (
        <div>
          <form action="" method="post">
            {" "}
            name
          </form>
        </div>
      )} */}
    </>
  );
}
export default Subscribe;
