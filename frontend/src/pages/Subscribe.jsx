// Import packages
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// Import components
import LinkLogInSubscribe from "../components/LinkLogInSubscribe";
import FormNewApplicant from "../components/FormNewApplicant";
import FormNewCompany from "../components/FormNewCompany";

// Import context
import ValidationFormContext from "../contexts/ValidationFormContext";

// Import images
import cardApplicant from "../assets/images/card_applicant.png";
import cardCompany from "../assets/images/card_company.png";

// Import style
import "../css/pages/Subscribe.css";

function Subscribe() {
  const [showForm, setShowForm] = useState(false);
  const [isApplicantCardFocused, setIsApplicantCardFocused] = useState(false);
  const [isCompanyCardFocused, setIsCompanyCardFocused] = useState(false);
  const { values, setValues, errors, setErrors, ValidationConnexion } =
    useContext(ValidationFormContext);

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
  const navigate = useNavigate();
  const handleInput = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(ValidationConnexion(values));
    if (Object.keys(errors).length === 0 && isApplicantCardFocused) {
      axios
        .post(`${import.meta.env.VITE_BACKEND_URL}/signup/applicant`, values)
        .then((response) => {
          if (response.data.token) {
            navigate("/login");
          }
        })
        .catch((err) => {
          console.error(err);
        });
    } else if (Object.keys(errors).length === 0 && isCompanyCardFocused) {
      axios
        .post(`${import.meta.env.VITE_BACKEND_URL}/signup/company`, values)
        .then((response) => {
          if (response.data.token) {
            navigate("/login");
          }
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      console.error("Votre inscription n'a pu aboutir");
    }
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
            <form className="form subscription" onSubmit={handleSubmit}>
              {isApplicantCardFocused && (
                <FormNewApplicant handleInput={handleInput} />
              )}
              {isCompanyCardFocused && (
                <FormNewCompany handleInput={handleInput} />
              )}
            </form>
          </div>
        )}
      </div>
    </>
  );
}

export default Subscribe;
