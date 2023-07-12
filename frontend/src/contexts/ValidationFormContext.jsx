import { createContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

const ValidationFormContext = createContext();

export default ValidationFormContext;

export function ValidationFormContextProvider({ children }) {
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    companyName: "",
    siret: "",
    email: "",
    password: "",
    confirmedPassword: "",
  });
  const handleInputClick = () => {
    setErrors(false);
  };
  function ValidationConnexion(el) {
    const error = {};

    const emailPattern =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,3}$/;

    const namePattern = /^[a-zA-Z]/;

    const siretPattern = /^\d{14}$/;

    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;

    // vérification du prénom
    if (el.firstname === "") {
      error.firstname = "Veuillez saisir votre prénom";
    } else if (el.firstname.length > 20) {
      error.firstname = "Le prénom est trop long";
    } else if (!namePattern.test(el.firstname)) {
      error.firstname = "Le prénom ne doit contenir que des lettres";
    } else {
      error.firstname = "";
    }

    // vérification du nom
    if (el.lastname === "") {
      error.lastname = "Veuillez saisir votre nom";
    } else if (el.lastname.length > 20) {
      error.lastname = "Le nom est trop long";
    } else if (!namePattern.test(el.lastname)) {
      error.lastname = "Le nom ne doit contenir que des lettres";
    } else {
      error.lastname = "";
    }

    // vérification du nom de l'entreprise
    if (el.companyName === "") {
      error.companyName = "Veuillez saisir le nom de l'entreprise";
    } else if (el.companyName.length > 30) {
      error.companyName = "Le nom de l'entreprise est trop long";
    } else if (!namePattern.test(el.companyName)) {
      error.companyName = "Le nom ne doit contenir que des lettres";
    } else {
      error.companyName = "";
    }

    // vérification du SIRET
    if (el.siret === "") {
      error.siret = "Veuillez saisir le SIRET de l'entreprise";
    } else if (el.siret.length !== 15) {
      error.siret = "Le SIRET doit faire contenir 15 chiffres";
    } else if (!siretPattern.test(el.siret)) {
      error.siret = "Le SIRET ne doit contenir que des chiffres";
    } else {
      error.siret = "";
    }

    // vérification de l'email
    if (el.email === "") {
      error.email = "Le mail est requis";
    } else if (!emailPattern.test(el.email)) {
      error.email = "Le mail n'est pas valide";
    } else {
      error.email = "";
    }

    // vérification du mot de passe
    if (el.password === "") {
      error.password = "Le mot de passe est requis";
    } else if (el.password.length < 8) {
      error.password = "Le mot de passe doit contenir 8 caractères minimum ";
    } else if (!passwordPattern.test(el.password)) {
      error.password =
        "Le mot de passe doit contenir au moins 8 caractères, une majuscule, un chiffre et un caractère spécial";
    } else {
      error.password = "";
    }

    // vérification de la confirmation du mot de passe
    if (el.confirmedpassword === "" || el.password === "") {
      error.confirmedpassword = "Veuillez confirmer votre mot de passe";
    } else if (el.confirmedpassword !== el.password) {
      error.confirmedpassword = "Les mots de passe ne correspondent pas";
    } else {
      error.confirmedpassword = "";
    }
    return error;
  }

  const ValidationFormContextValue = useMemo(() => {
    return {
      values,
      setValues,
      errors,
      setErrors,
      ValidationConnexion,
      handleInputClick,
    };
  });
  return (
    <ValidationFormContext.Provider value={ValidationFormContextValue}>
      {children}
    </ValidationFormContext.Provider>
  );
}

ValidationFormContextProvider.propTypes = {
  children: PropTypes.shape({}).isRequired,
};
