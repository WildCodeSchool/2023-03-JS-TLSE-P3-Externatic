// Import packages
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

// Import components
import LinkLogInSubscribe from "../components/LinkLogInSubscribe";
import FormNewApplicant from "../components/FormNewApplicant";
import FormNewCompany from "../components/FormNewCompany";

// Import context
import ValidationFormContext from "../contexts/ValidationFormContext";

// Import images
import cardApplicant from "../assets/images/card_applicant.png";
import cardCompany from "../assets/images/card_company.png";

function Subscribe() {
  const [showForm, setShowForm] = useState(false);
  const [isApplicantCardFocused, setIsApplicantCardFocused] = useState(false);
  const [isCompanyCardFocused, setIsCompanyCardFocused] = useState(false);
  const {
    formDataSubscription,
    setFormDataSubscription,
    errors,
    setErrors,
    ValidationConnexion,
  } = useContext(ValidationFormContext);

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
        setErrors(false);
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
    setErrors(false);
  };
  const handleCompanyCardClick = () => {
    setShowForm(true);
    setIsApplicantCardFocused(false);
    setIsCompanyCardFocused(true);
    setErrors(false);
  };
  const navigate = useNavigate();
  const handleInput = (e) => {
    setFormDataSubscription({
      ...formDataSubscription,
      [e.target.name]: e.target.value,
    });
    if (formDataSubscription) {
      setErrors(false);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(ValidationConnexion(formDataSubscription));
    if (Object.keys(errors).length === 0 && isApplicantCardFocused) {
      axios
        .post(
          `${import.meta.env.VITE_BACKEND_URL}/signup/applicant`,
          formDataSubscription
        )
        .then((response) => {
          if (response.status === 201) {
            navigate("/connexion");
            setErrors(false);
          } else if (response.status === 403) {
            console.error("Ce mail est déjà utilisé");
          }
        })
        .catch((err) => {
          console.error(err);
        });
    } else if (Object.keys(errors).length === 0 && isCompanyCardFocused) {
      axios
        .post(
          `${import.meta.env.VITE_BACKEND_URL}/signup/company`,
          formDataSubscription
        )
        .then((response) => {
          if (response.status === 201) {
            Swal.fire({
              icon: "success",
              text: "Votre compte a bien été créé, veuillez vous connecter",
              customClass: {
                title: "my-swal-title",
                confirmButton: "my-swal-confirm-button",
              },
            });
            navigate("/connexion");
            setErrors(false);
          } else if (response.status === 403) {
            Swal.fire({
              icon: "warning",
              text: "Ce mail est déjà utilisé",
              customClass: {
                title: "my-swal-title",
                confirmButton: "my-swal-confirm-button",
              },
            });
          }
        })
        .catch((err) => {
          console.error(err);
          Swal.fire({
            icon: "warning",
            text: "Votre inscription n'a pas abouti, veuillez réessayer",
            customClass: {
              title: "my-swal-title",
              confirmButton: "my-swal-confirm-button",
            },
          });
        });
    } else {
      console.error("Votre inscription n'a pas abouti");
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
                <FormNewApplicant
                  handleInput={handleInput}
                  handleSubmit={handleSubmit}
                />
              )}
              {isCompanyCardFocused && (
                <FormNewCompany
                  handleInput={handleInput}
                  handleSubmit={handleSubmit}
                />
              )}
            </form>
          </div>
        )}
      </div>
    </>
  );
}

export default Subscribe;
