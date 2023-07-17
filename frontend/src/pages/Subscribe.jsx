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
        setErrors({});
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
    setErrors({});
  };
  const handleCompanyCardClick = () => {
    setShowForm(true);
    setIsApplicantCardFocused(false);
    setIsCompanyCardFocused(true);
    setErrors({});
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
    if (!errors && isApplicantCardFocused) {
      axios
        .post(
          `${import.meta.env.VITE_BACKEND_URL}/signup/applicant`,
          formDataSubscription
        )
        .then((response) => {
          Swal.fire({
            icon: "success",
            text: "Votre compte a bien été créé, veuillez vous connecter",
            iconColor: "#ca2061",
            width: 300,
            confirmButtonColor: "black",
          });
          if (response.status === 201) {
            navigate("/connexion");
            setErrors(false);
          }
        })
        .catch((err) => {
          console.error(err);
          if (err.response.status === 403) {
            Swal.fire({
              icon: "error",
              text: "Ce mail a déjà été utilisé, veuillez en saisir un autre",
              iconColor: "#ca2061",
              width: 300,
              confirmButtonColor: "black",
            });
          } else if (err.response.status === 500) {
            Swal.fire({
              icon: "error",
              text: "Une erreur est survenue, veuillez réessayer plus tard",
              iconColor: "#ca2061",
              width: 300,
              confirmButtonColor: "black",
            });
          }
        });
      setFormDataSubscription({
        titleName: "",
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmedPassword: "",
      });
    } else if (!errors && isCompanyCardFocused) {
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
              iconColor: "#ca2061",
              width: 300,
              confirmButtonColor: "black",
            });
            navigate("/connexion");
            setErrors(false);
          }
        })
        .catch((err) => {
          console.error(err);
          if (err.response.status === 403) {
            Swal.fire({
              icon: "error",
              text: "Ce mail a déjà été utilisé, veuillez en saisir un autre",
              iconColor: "#ca2061",
              width: 300,
              confirmButtonColor: "black",
            });
          } else {
            Swal.fire({
              icon: "error",
              text: "Une erreur est survenue, veuillez réessayer plus tard",
              iconColor: "#ca2061",
              width: 300,
              confirmButtonColor: "black",
            });
          }
        });
      setFormDataSubscription({
        name: "",
        siret: 0,
        email: "",
        password: "",
        confirmedPassword: "",
      });
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
