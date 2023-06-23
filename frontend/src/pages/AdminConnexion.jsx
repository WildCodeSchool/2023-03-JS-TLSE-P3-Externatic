/* eslint-disable no-alert */
/* eslint-disable no-restricted-syntax */
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from "axios";

import "../style_pages/AdminConnexion.css";
import ValidationConnexion from "../utils/ValidationConnexion";

function AdminConnexion() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const handleInput = (e) => {
    setValues((value) => ({ ...value, [e.target.name]: [e.target.value] }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(ValidationConnexion(values));

    axios
      .post(`http://localhost:6000/login`, values)
      .then((res) => {
        if (res.status === 200) {
          navigate("/dashboard/my-profile");
        } else {
          alert("Erreur d'authentification");
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <h1 className="titleEspaceAdmin">Espace Administrateur</h1>
      <div className="container-login">
        <form className="signin-form" onSubmit={handleSubmit}>
          <div className="mail">
            <svg
              width="16"
              height="13"
              viewBox="0 0 16 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mail-icon"
            >
              <path
                d="M0 2.75C0 2.25272 0.206413 1.77581 0.573832 1.42417C0.94125 1.07254 1.43958 0.875 1.95918 0.875H13.7143C14.2339 0.875 14.7322 1.07254 15.0996 1.42417C15.4671 1.77581 15.6735 2.25272 15.6735 2.75V10.25C15.6735 10.7473 15.4671 11.2242 15.0996 11.5758C14.7322 11.9275 14.2339 12.125 13.7143 12.125H1.95918C1.43958 12.125 0.94125 11.9275 0.573832 11.5758C0.206413 11.2242 0 10.7473 0 10.25V2.75ZM1.95918 1.8125C1.69938 1.8125 1.45022 1.91127 1.26651 2.08709C1.0828 2.2629 0.979592 2.50136 0.979592 2.75V2.95344L7.83673 6.89094L14.6939 2.95344V2.75C14.6939 2.50136 14.5907 2.2629 14.407 2.08709C14.2233 1.91127 13.9741 1.8125 13.7143 1.8125H1.95918ZM14.6939 4.04656L10.082 6.695L14.6939 9.41094V4.04656ZM14.6606 10.4928L9.13567 7.23875L7.83673 7.98406L6.5378 7.23875L1.0129 10.4919C1.06856 10.6914 1.19149 10.8677 1.3626 10.9935C1.53371 11.1193 1.74342 11.1875 1.95918 11.1875H13.7143C13.9299 11.1875 14.1395 11.1195 14.3106 10.9939C14.4817 10.8683 14.6047 10.6921 14.6606 10.4928ZM0.979592 9.41094L5.59151 6.695L0.979592 4.04656V9.41094Z"
                fill="black"
              />
            </svg>
            <input
              type="email"
              placeholder="Email"
              required=""
              name="email"
              onChange={handleInput}
            />
            {errors.email && (
              <span className="error-email">{errors.email}</span>
            )}
          </div>

          <div className="password">
            <svg
              width="16"
              height="20"
              viewBox="0 0 16 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="password-icon"
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
              type="password"
              placeholder="Mot de passe"
              required=""
              name="password"
              onChange={handleInput}
            />
            {errors.password && (
              <span className="error-password">{errors.password}</span>
            )}
          </div>
          <Link to="/password-forgotten">Mot de passe oublié?</Link>

          <button type="submit" className="btn-connexion">
            Je me connecte
          </button>
        </form>
      </div>
    </>
  );
}

export default AdminConnexion;
