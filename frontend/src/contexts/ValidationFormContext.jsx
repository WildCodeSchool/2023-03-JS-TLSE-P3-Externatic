import { createContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

const ValidationFormContext = createContext();

export default ValidationFormContext;

export function ValidationFormContextProvider({ children }) {
  const [errors, setErrors] = useState({});
  const [formDataLogIn, setFormDataLogIn] = useState({
    email: "",
    password: "",
  });
  const [formDataSubscription, setFormDataSubscription] = useState({
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
    setErrors({});
  };
  function ValidationConnexion(el) {
    const error = {};

    const emailPattern =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,3}$/;

    const namePattern = /^[a-zA-Z]/;

    const siretPattern = /^\d{14}$/;
    // vérification madame ou monsieur coché
    if (!el.titleName) {
      error.titleName = "Veuillez sélectionner Madame ou Monsieur";
    }

    // vérification du prénom
    if (el.firstname === "") {
      error.firstname = "Veuillez saisir votre prénom";
    } else if (!namePattern.test(el.firstname)) {
      error.firstname = "Le prénom ne doit contenir que des lettres";
    }

    // vérification du nom
    if (el.lastname === "") {
      error.lastname = "Veuillez saisir votre nom";
    } else if (!namePattern.test(el.lastname)) {
      error.lastname = "Le nom ne doit contenir que des lettres";
    }

    // vérification du nom de l'entreprise
    if (el.name === "") {
      error.name = "Veuillez saisir le nom de l'entreprise";
    } else if (!namePattern.test(el.name)) {
      error.name = "Le nom ne doit contenir que des lettres";
    }

    // vérification du SIRET
    if (el.siret === "") {
      error.siret = "Veuillez saisir le SIRET de l'entreprise";
    } else if (!siretPattern.test(el.siret)) {
      error.siret = "Le SIRET doit contenir exactement 14 chiffres";
    }

    // vérification de l'email
    if (el.email === "") {
      error.email = "Le mail est requis";
    } else if (!emailPattern.test(el.email)) {
      error.email = "Le mail n'est pas valide";
    }

    // vérification du mot de passe
    if (el.password === "") {
      error.password = "Le mot de passe est requis";
    } else if (el.password.length < 4) {
      error.password = "Le mot de passe doit contenir 4 caractères minimum ";
    }
    // vérification de la confirmation du mot de passe
    if (el.confirmedPassword === "" || el.password === "") {
      error.confirmedPassword = "Veuillez confirmer votre mot de passe";
    } else if (el.confirmedPassword !== el.password) {
      error.confirmedPassword = "Les mots de passe ne correspondent pas";
    }
    return error;
  }

  const ValidationFormContextValue = useMemo(() => {
    return {
      formDataLogIn,
      setFormDataLogIn,
      formDataSubscription,
      setFormDataSubscription,
      errors,
      setErrors,
      ValidationConnexion,
      resetInputOnClick,
    };
  }, [formDataLogIn, formDataSubscription, errors]);
  return (
    <ValidationFormContext.Provider value={ValidationFormContextValue}>
      {children}
    </ValidationFormContext.Provider>
  );
}

ValidationFormContextProvider.propTypes = {
  children: PropTypes.shape({}).isRequired,
};
