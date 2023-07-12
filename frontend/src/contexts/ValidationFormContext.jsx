import { createContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

const ValidationFormContext = createContext();

export default ValidationFormContext;

export function ValidationFormContextProvider({ children }) {
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    titleName: "",
    firstname: "",
    lastname: "",
    name: "",
    siret: 0,
    email: "",
    password: "",
    confirmedPassword: "",
  });
  const resetInputOnClick = () => {
    setErrors(false);
  };
  function ValidationConnexion(el) {
    const error = {};

    const emailPattern =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,3}$/;

    const namePattern = /^[a-zA-Z]/;

    const siretPattern = /^\d{14}$/;

    // vérification madame ou monsieur coché
    if (!el.titleName || !el.titleName) {
      error.titleName = "Veuillez cocher Madame ou Monsieur";
    } else {
      error.titleName = "";
    }

    // vérification du prénom
    if (el.firstname === "") {
      error.firstname = "Veuillez saisir votre prénom";
    } else if (!namePattern.test(el.firstname)) {
      error.firstname = "Le prénom ne doit contenir que des lettres";
    } else {
      error.firstname = "";
    }

    // vérification du nom
    if (el.lastname === "") {
      error.lastname = "Veuillez saisir votre nom";
    } else if (!namePattern.test(el.lastname)) {
      error.lastname = "Le nom ne doit contenir que des lettres";
    } else {
      error.lastname = "";
    }

    // vérification du nom de l'entreprise
    if (el.name === "") {
      error.name = "Veuillez saisir le nom de l'entreprise";
    } else if (!namePattern.test(el.name)) {
      error.name = "Le nom ne doit contenir que des lettres";
    } else {
      error.name = "";
    }

    // vérification du SIRET
    if (el.siret === "") {
      error.siret = "Veuillez saisir le SIRET de l'entreprise";
    } else if (el.siret.length !== 14) {
      error.siret = "Le SIRET doit faire contenir 14 chiffres";
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
    } else if (el.password.length < 4) {
      error.password = "Le mot de passe doit contenir 4 caractères minimum ";
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
      resetInputOnClick,
    };
  }, [values, errors]);
  return (
    <ValidationFormContext.Provider value={ValidationFormContextValue}>
      {children}
    </ValidationFormContext.Provider>
  );
}

ValidationFormContextProvider.propTypes = {
  children: PropTypes.shape({}).isRequired,
};
