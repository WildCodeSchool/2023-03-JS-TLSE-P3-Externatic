function ValidationConnexion(values) {
  const error = {};
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,3}$/;
  if (values.email === "") {
    error.email = "Le mail est requis";
  } else if (!emailRegex.test(values.email)) {
    error.email = "Le mail n'est pas valide";
  } else {
    error.email = "";
  }

  if (values.password === "") {
    error.password = "Le mot de passe est requis";
  } else {
    error.password = "";
  }
  return error;
}

export default ValidationConnexion;
