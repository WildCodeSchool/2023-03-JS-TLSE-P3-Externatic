function ValidationConnexion(values) {
  const error = {};
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,3}$/;
  /* le mot de passe doit contenir au moins 8 caractères, 1 majuscule, 1 minuscule, 1 chiffre et 1 caractère spécial */
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  if (values.email === "") {
    error.email = "Le mail est requis";
  } else if (!emailRegex.test(values.email)) {
    error.email = "Le mail n'est pas valide";
  } else {
    error.email = "";
  }

  if (values.password === "") {
    error.password = "Le mot de passe est requis";
  } else if (!passwordRegex.test(values.password)) {
    error.password = "Le mot de passe n'est pas valide";
  } else {
    error.email = "";
  }
  return error;
}

export default ValidationConnexion;
