// Import packages
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// Import components
import LinkLogInSubscribe from "../components/LinkLogInSubscribe";

// Import images
import cardApplicant from "../assets/images/card_applicant.png";
import cardCompany from "../assets/images/card_company.png";

// Import style
import "../css/pages/Subscribe.css";

function Subscribe() {
  const [showForm, setShowForm] = useState(false);
  const [isApplicantCardFocused, setIsApplicantCardFocused] = useState(false);
  const [isCompanyCardFocused, setIsCompanyCardFocused] = useState(false);
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    siret_number: "",
    email: "",
    password: "",
    confirmed_password: "",
  });

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

    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/signup`, values)
      .then((response) => {
        if (response.data.token) {
          navigate("/login");
        }
      })
      .catch((err) => {
        console.error(err);
      });
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
              {/* fisrtname */}
              {isApplicantCardFocused && (
                <div className="containerTextInput">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path
                        d="M11 7.96875C11 8.73021 10.6839 9.46049 10.1213 9.99892C9.55871 10.5374 8.79565 10.8398 8 10.8398C7.20435 10.8398 6.44129 10.5374 5.87868 9.99892C5.31607 9.46049 5 8.73021 5 7.96875C5 7.20729 5.31607 6.47701 5.87868 5.93858C6.44129 5.40015 7.20435 5.09766 8 5.09766C8.79565 5.09766 9.55871 5.40015 10.1213 5.93858C10.6839 6.47701 11 7.20729 11 7.96875Z"
                        fill="black"
                      />
                      <path
                        d="M14 13.7109V4.61914L9.5 0.3125H4C3.46957 0.3125 2.96086 0.51416 2.58579 0.873116C2.21071 1.23207 2 1.71892 2 2.22656V13.7109C2 14.2186 2.21071 14.7054 2.58579 15.0644C2.96086 15.4233 3.46957 15.625 4 15.625H12C12.5304 15.625 13.0391 15.4233 13.4142 15.0644C13.7893 14.7054 14 14.2186 14 13.7109ZM9.5 3.18359C9.5 3.56432 9.65804 3.92946 9.93934 4.19868C10.2206 4.4679 10.6022 4.61914 11 4.61914H13V13.4765C13 13.4765 12 11.7969 8 11.7969C4 11.7969 3 13.4765 3 13.4765V2.22656C3 1.97274 3.10536 1.72932 3.29289 1.54984C3.48043 1.37036 3.73478 1.26953 4 1.26953H9.5V3.18359Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_547_4986">
                        <rect
                          width="16"
                          height="15.3125"
                          fill="white"
                          transform="translate(0 0.3125)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <input
                    className="textInput"
                    type="text"
                    placeholder="Prénom"
                    required=""
                    name="firstname"
                    autoComplete="off"
                    onChange={handleInput}
                  />
                </div>
              )}
              {/* lastname */}
              {isApplicantCardFocused && (
                <div className="containerTextInput">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path
                        d="M11 7.96875C11 8.73021 10.6839 9.46049 10.1213 9.99892C9.55871 10.5374 8.79565 10.8398 8 10.8398C7.20435 10.8398 6.44129 10.5374 5.87868 9.99892C5.31607 9.46049 5 8.73021 5 7.96875C5 7.20729 5.31607 6.47701 5.87868 5.93858C6.44129 5.40015 7.20435 5.09766 8 5.09766C8.79565 5.09766 9.55871 5.40015 10.1213 5.93858C10.6839 6.47701 11 7.20729 11 7.96875Z"
                        fill="black"
                      />
                      <path
                        d="M14 13.7109V4.61914L9.5 0.3125H4C3.46957 0.3125 2.96086 0.51416 2.58579 0.873116C2.21071 1.23207 2 1.71892 2 2.22656V13.7109C2 14.2186 2.21071 14.7054 2.58579 15.0644C2.96086 15.4233 3.46957 15.625 4 15.625H12C12.5304 15.625 13.0391 15.4233 13.4142 15.0644C13.7893 14.7054 14 14.2186 14 13.7109ZM9.5 3.18359C9.5 3.56432 9.65804 3.92946 9.93934 4.19868C10.2206 4.4679 10.6022 4.61914 11 4.61914H13V13.4765C13 13.4765 12 11.7969 8 11.7969C4 11.7969 3 13.4765 3 13.4765V2.22656C3 1.97274 3.10536 1.72932 3.29289 1.54984C3.48043 1.37036 3.73478 1.26953 4 1.26953H9.5V3.18359Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_547_4986">
                        <rect
                          width="16"
                          height="15.3125"
                          fill="white"
                          transform="translate(0 0.3125)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <input
                    className="textInput"
                    type="text"
                    placeholder="Nom"
                    required=""
                    name="company name"
                    autoComplete="off"
                    onChange={handleInput}
                  />
                </div>
              )}
              {/* company name */}
              {isCompanyCardFocused && (
                <div className="containerTextInput">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.5593 0.640137V1.92014H1.2793V15.3601H14.7193V4.48014H9.5993V1.92014H8.3193V0.640137H2.5593ZM3.1993 1.28014H7.6793V2.56014H8.9593V14.7201H6.0793V12.4801H4.7993V14.7201H1.9193V2.56014H3.1993V1.28014ZM3.1993 3.20014V3.84014H3.8393V3.20014H3.1993ZM4.4793 3.20014V3.84014H5.1193V3.20014H4.4793ZM5.7593 3.20014V3.84014H6.3993V3.20014H5.7593ZM7.0393 3.20014V3.84014H7.6793V3.20014H7.0393ZM3.1993 4.80014V6.08014H3.8393V4.80014H3.1993ZM4.4793 4.80014V6.08014H5.1193V4.80014H4.4793ZM5.7593 4.80014V6.08014H6.3993V4.80014H5.7593ZM7.0393 4.80014V6.08014H7.6793V4.80014H7.0393ZM9.5993 5.12014H14.0793V14.7201H9.5993V5.12014ZM10.2393 5.76014V6.40014H10.8793V5.76014H10.2393ZM11.5193 5.76014V6.40014H12.1593V5.76014H11.5193ZM12.7993 5.76014V6.40014H13.4393V5.76014H12.7993ZM3.1993 6.72014V8.00014H3.8393V6.72014H3.1993ZM4.4793 6.72014V8.00014H5.1193V6.72014H4.4793ZM5.7593 6.72014V8.00014H6.3993V6.72014H5.7593ZM7.0393 6.72014V8.00014H7.6793V6.72014H7.0393ZM10.2393 7.04014V7.68014H10.8793V7.04014H10.2393ZM11.5193 7.04014V7.68014H12.1593V7.04014H11.5193ZM12.7993 7.04014V7.68014H13.4393V7.04014H12.7993ZM10.2393 8.32014V8.96014H10.8793V8.32014H10.2393ZM11.5193 8.32014V8.96014H12.1593V8.32014H11.5193ZM12.7993 8.32014V8.96014H13.4393V8.32014H12.7993ZM3.1993 8.64014V9.92014H3.8393V8.64014H3.1993ZM4.4793 8.64014V9.92014H5.1193V8.64014H4.4793ZM5.7593 8.64014V9.92014H6.3993V8.64014H5.7593ZM7.0393 8.64014V9.92014H7.6793V8.64014H7.0393ZM10.2393 9.60014V10.2401H10.8793V9.60014H10.2393ZM11.5193 9.60014V10.2401H12.1593V9.60014H11.5193ZM12.7993 9.60014V10.2401H13.4393V9.60014H12.7993ZM3.1993 10.5601V11.8401H3.8393V10.5601H3.1993ZM4.4793 10.5601V11.8401H5.1193V10.5601H4.4793ZM5.7593 10.5601V11.8401H6.3993V10.5601H5.7593ZM7.0393 10.5601V11.8401H7.6793V10.5601H7.0393ZM10.2393 10.8801V11.5201H10.8793V10.8801H10.2393ZM11.5193 10.8801V11.5201H12.1593V10.8801H11.5193ZM12.7993 10.8801V11.5201H13.4393V10.8801H12.7993ZM10.2393 12.1601V12.8001H10.8793V12.1601H10.2393ZM11.5193 12.1601V12.8001H12.1593V12.1601H11.5193ZM12.7993 12.1601V12.8001H13.4393V12.1601H12.7993ZM3.1993 12.4801V14.0801H3.8393V12.4801H3.1993ZM7.0393 12.4801V14.0801H7.6793V12.4801H7.0393ZM10.2393 13.4401V14.0801H10.8793V13.4401H10.2393ZM11.5193 13.4401V14.0801H12.1593V13.4401H11.5193ZM12.7993 13.4401V14.0801H13.4393V13.4401H12.7993Z"
                      fill="black"
                    />
                  </svg>
                  <input
                    className="textInput"
                    type="text"
                    placeholder="Nom de l'entreprise"
                    required=""
                    name="lastname"
                    autoComplete="off"
                    onChange={handleInput}
                  />
                </div>
              )}
              {isCompanyCardFocused && (
                <div className="containerTextInput">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.93862 14.1641H12.0681C13.4676 14.1641 14.1641 13.4676 14.1641 12.0882V3.91182C14.1641 2.53237 13.4676 1.83594 12.0681 1.83594H3.93862C2.54577 1.83594 1.83594 2.52565 1.83594 3.91182V12.0882C1.83594 13.4743 2.54577 14.1641 3.93862 14.1641ZM3.95871 13.0859C3.28908 13.0859 2.91408 12.731 2.91408 12.0346V3.96539C2.91408 3.26897 3.28908 2.91405 3.95871 2.91405H12.048C12.7109 2.91405 13.0859 3.26897 13.0859 3.96539V12.0346C13.0859 12.731 12.7109 13.0859 12.048 13.0859H3.95871ZM6.28237 11.2578C6.54354 11.2578 6.70425 11.1239 6.75782 10.8761L7.05917 9.43639H8.30468L8.03014 10.7489C7.96985 11.0234 8.16408 11.2578 8.43862 11.2578C8.71317 11.2578 8.88728 11.1239 8.93417 10.8761L9.23548 9.42968H9.93194C10.1931 9.42968 10.3806 9.23548 10.3806 8.98102C10.3806 8.75334 10.2199 8.58594 9.99888 8.58594H9.41631L9.70425 7.22657H10.4141C10.6685 7.22657 10.856 7.03237 10.856 6.77791C10.856 6.55022 10.6953 6.38279 10.4743 6.38279H9.87837L10.1395 5.13059C10.1931 4.85602 9.99219 4.62165 9.71765 4.62165C9.45648 4.62165 9.28908 4.75557 9.23548 5.01005L8.94754 6.38279H7.70202L7.96317 5.13059C8.01674 4.86274 7.82925 4.62165 7.54799 4.62165C7.28014 4.62165 7.11271 4.75557 7.05917 5.01005L6.77791 6.38279H6.06808C5.81362 6.38279 5.62611 6.57702 5.62611 6.83148C5.62611 7.05917 5.78685 7.22657 6.00782 7.22657H6.59711L6.30917 8.58594H5.59265C5.33817 8.58594 5.14399 8.78014 5.14399 9.03459C5.14399 9.26228 5.30468 9.42968 5.53237 9.42968H6.13505L5.86051 10.7489C5.80691 11.0234 6.00782 11.2578 6.28237 11.2578ZM7.18639 8.66628L7.49442 7.15959H8.84039L8.52568 8.66628H7.18639Z"
                      fill="black"
                    />
                  </svg>
                  <input
                    className="textInput"
                    type="text"
                    placeholder="Numéro SIRET"
                    required=""
                    name="lastname"
                    autoComplete="off"
                    onChange={handleInput}
                  />
                </div>
              )}
              {/* email */}
              <div className="containerTextInput">
                <svg
                  width="16"
                  height="13"
                  viewBox="0 0 16 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 2.75C0 2.25272 0.206413 1.77581 0.573832 1.42417C0.94125 1.07254 1.43958 0.875 1.95918 0.875H13.7143C14.2339 0.875 14.7322 1.07254 15.0996 1.42417C15.4671 1.77581 15.6735 2.25272 15.6735 2.75V10.25C15.6735 10.7473 15.4671 11.2242 15.0996 11.5758C14.7322 11.9275 14.2339 12.125 13.7143 12.125H1.95918C1.43958 12.125 0.94125 11.9275 0.573832 11.5758C0.206413 11.2242 0 10.7473 0 10.25V2.75ZM1.95918 1.8125C1.69938 1.8125 1.45022 1.91127 1.26651 2.08709C1.0828 2.2629 0.979592 2.50136 0.979592 2.75V2.95344L7.83673 6.89094L14.6939 2.95344V2.75C14.6939 2.50136 14.5907 2.2629 14.407 2.08709C14.2233 1.91127 13.9741 1.8125 13.7143 1.8125H1.95918ZM14.6939 4.04656L10.082 6.695L14.6939 9.41094V4.04656ZM14.6606 10.4928L9.13567 7.23875L7.83673 7.98406L6.5378 7.23875L1.0129 10.4919C1.06856 10.6914 1.19149 10.8677 1.3626 10.9935C1.53371 11.1193 1.74342 11.1875 1.95918 11.1875H13.7143C13.9299 11.1875 14.1395 11.1195 14.3106 10.9939C14.4817 10.8683 14.6047 10.6921 14.6606 10.4928ZM0.979592 9.41094L5.59151 6.695L0.979592 4.04656V9.41094Z"
                    fill="black"
                  />
                </svg>
                <input
                  className="textInput"
                  type="email"
                  placeholder="Email"
                  required=""
                  name="email"
                  autoComplete="off"
                  onChange={handleInput}
                />
                {/* {errors.email && <span className="errorEmail">{errors.email}</span>} */}
              </div>
              {/* password */}
              <div className="containerTextInput">
                <svg
                  width="16"
                  height="20"
                  viewBox="0 0 16 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.83634 6.25C8.18274 6.25 8.51496 6.3817 8.7599 6.61612C9.00485 6.85054 9.14246 7.16848 9.14246 7.5V8.75H6.53021V7.5C6.53021 7.16848 6.66782 6.85054 6.91277 6.61612C7.15771 6.3817 7.48993 6.25 7.83634 6.25ZM10.4486 8.845V7.5C10.4486 6.83696 10.1734 6.20107 9.68347 5.73223C9.19358 5.26339 8.52915 5 7.83634 5C7.14353 5 6.47909 5.26339 5.9892 5.73223C5.49931 6.20107 5.22409 6.83696 5.22409 7.5V8.845C4.51879 9.0525 3.91797 9.59125 3.91797 10.375V13.375C3.91797 14.395 4.93805 15 5.87715 15H9.79552C10.7346 15 11.7547 14.395 11.7547 13.375V10.375C11.7547 9.59125 11.1539 9.0525 10.4486 8.845ZM5.36123 10.1562C5.51021 10.0506 5.69179 9.99561 5.87715 10H9.79552C9.98084 9.9959 10.1623 10.0509 10.3114 10.1562C10.4225 10.2413 10.4486 10.3225 10.4486 10.375V13.375C10.4486 13.4275 10.4225 13.5087 10.3114 13.5938C10.1625 13.6994 9.98088 13.7544 9.79552 13.75H5.87715C5.69179 13.7544 5.51021 13.6994 5.36123 13.5938C5.25021 13.5087 5.22409 13.4275 5.22409 13.375V10.375C5.22409 10.3225 5.25021 10.2413 5.36123 10.1562Z"
                    fill="black"
                  />
                  <path
                    d="M2.61224 0C1.91943 0 1.255 0.263392 0.765109 0.732233C0.275218 1.20107 0 1.83696 0 2.5V17.5C0 18.163 0.275218 18.7989 0.765109 19.2678C1.255 19.7366 1.91943 20 2.61224 20H13.0612C13.754 20 14.4185 19.7366 14.9084 19.2678C15.3983 18.7989 15.6735 18.163 15.6735 17.5V2.5C15.6735 1.83696 15.3983 1.20107 14.9084 0.732233C14.4185 0.263392 13.754 0 13.0612 0L2.61224 0ZM2.61224 1.25H13.0612C13.4076 1.25 13.7398 1.3817 13.9848 1.61612C14.2297 1.85054 14.3673 2.16848 14.3673 2.5V17.5C14.3673 17.8315 14.2297 18.1495 13.9848 18.3839C13.7398 18.6183 13.4076 18.75 13.0612 18.75H2.61224C2.26584 18.75 1.93362 18.6183 1.68868 18.3839C1.44373 18.1495 1.30612 17.8315 1.30612 17.5V2.5C1.30612 2.16848 1.44373 1.85054 1.68868 1.61612C1.93362 1.3817 2.26584 1.25 2.61224 1.25Z"
                    fill="black"
                  />
                </svg>
                <input
                  className="textInput"
                  type="password"
                  placeholder="Mot de passe"
                  required=""
                  name="password"
                  onChange={handleInput}
                />
                {/* {errors.password && (
              <span className="errorPassword">{errors.password}</span>
            )} */}
              </div>
              {/* password confirmation */}
              <div className="containerTextInput">
                <svg
                  width="16"
                  height="20"
                  viewBox="0 0 16 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.83634 6.25C8.18274 6.25 8.51496 6.3817 8.7599 6.61612C9.00485 6.85054 9.14246 7.16848 9.14246 7.5V8.75H6.53021V7.5C6.53021 7.16848 6.66782 6.85054 6.91277 6.61612C7.15771 6.3817 7.48993 6.25 7.83634 6.25ZM10.4486 8.845V7.5C10.4486 6.83696 10.1734 6.20107 9.68347 5.73223C9.19358 5.26339 8.52915 5 7.83634 5C7.14353 5 6.47909 5.26339 5.9892 5.73223C5.49931 6.20107 5.22409 6.83696 5.22409 7.5V8.845C4.51879 9.0525 3.91797 9.59125 3.91797 10.375V13.375C3.91797 14.395 4.93805 15 5.87715 15H9.79552C10.7346 15 11.7547 14.395 11.7547 13.375V10.375C11.7547 9.59125 11.1539 9.0525 10.4486 8.845ZM5.36123 10.1562C5.51021 10.0506 5.69179 9.99561 5.87715 10H9.79552C9.98084 9.9959 10.1623 10.0509 10.3114 10.1562C10.4225 10.2413 10.4486 10.3225 10.4486 10.375V13.375C10.4486 13.4275 10.4225 13.5087 10.3114 13.5938C10.1625 13.6994 9.98088 13.7544 9.79552 13.75H5.87715C5.69179 13.7544 5.51021 13.6994 5.36123 13.5938C5.25021 13.5087 5.22409 13.4275 5.22409 13.375V10.375C5.22409 10.3225 5.25021 10.2413 5.36123 10.1562Z"
                    fill="black"
                  />
                  <path
                    d="M2.61224 0C1.91943 0 1.255 0.263392 0.765109 0.732233C0.275218 1.20107 0 1.83696 0 2.5V17.5C0 18.163 0.275218 18.7989 0.765109 19.2678C1.255 19.7366 1.91943 20 2.61224 20H13.0612C13.754 20 14.4185 19.7366 14.9084 19.2678C15.3983 18.7989 15.6735 18.163 15.6735 17.5V2.5C15.6735 1.83696 15.3983 1.20107 14.9084 0.732233C14.4185 0.263392 13.754 0 13.0612 0L2.61224 0ZM2.61224 1.25H13.0612C13.4076 1.25 13.7398 1.3817 13.9848 1.61612C14.2297 1.85054 14.3673 2.16848 14.3673 2.5V17.5C14.3673 17.8315 14.2297 18.1495 13.9848 18.3839C13.7398 18.6183 13.4076 18.75 13.0612 18.75H2.61224C2.26584 18.75 1.93362 18.6183 1.68868 18.3839C1.44373 18.1495 1.30612 17.8315 1.30612 17.5V2.5C1.30612 2.16848 1.44373 1.85054 1.68868 1.61612C1.93362 1.3817 2.26584 1.25 2.61224 1.25Z"
                    fill="black"
                  />
                </svg>
                <input
                  className="textInput"
                  type="password"
                  placeholder="Confirmation mot de passe"
                  required=""
                  name="password"
                  onChange={handleInput}
                />
                {/* {errors.password && (
              <span className="errorPassword">{errors.password}</span>
            )} */}
              </div>

              <button type="submit" className="button subscrition">
                Je m'inscris
              </button>
            </form>
          </div>
        )}
      </div>
    </>
  );
}
export default Subscribe;
