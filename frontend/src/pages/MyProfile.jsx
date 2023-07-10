import React, { useState, useContext } from "react";
import "../css/pages/MyProfile.css";
import identificationBlack from "../assets/icons/identification_black.svg";
import mailBlack from "../assets/icons/mail_black.svg";
import mobileBlack from "../assets/icons/mobile_black.svg";
import cityBlack from "../assets/icons/black_city.svg";
import whiteTrash from "../assets/icons/white_trash.svg";
import lockBlack from "../assets/icons/lock_black.svg";
import TokenContext from "../contexts/TokenContext";

function MyProfile() {
  const [errors, setErrors] = useState({});
  const { userRole } = useContext(TokenContext);
  const validateTelephone = () => {
    // Logique de validation du téléphone
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    // Vérification des champs
    const { nom, prenom, email, telephone, localisation } =
      event.target.elements;
    const newErrors = {};

    if (!nom.value.trim()) {
      newErrors.nom = "Veuillez saisir votre nom.";
    }

    if (!prenom.value.trim()) {
      newErrors.prenom = "Veuillez saisir votre prénom.";
    }

    if (!email.value.trim()) {
      newErrors.email = "Veuillez saisir votre adresse e-mail.";
    }

    if (!telephone.value.trim()) {
      newErrors.telephone = "Veuillez saisir un numéro de téléphone.";
    } else if (!/^\d{10}$/.test(telephone.value.trim())) {
      newErrors.telephone =
        "Veuillez saisir un numéro de téléphone valide (10 chiffres).";
    }

    if (!localisation.value.trim()) {
      newErrors.localisation = "Veuillez saisir votre ville.";
    }

    setErrors(newErrors);

    // Soumettre le formulaire si aucune erreur
    if (Object.keys(newErrors).length === 0) {
      // Effectuer l'action de soumission du formulaire ici
    }
  };

  return (
    <div className="myProfileSection">
      {userRole && userRole === "applicant" && (
        <>
          <h1>Profile Applicant</h1>
          <form onSubmit={handleSubmit} className="form">
            <h2>Modifier mon profil</h2>
            <div className="groupRadio">
              <div className="containerRadioInput">
                <label htmlFor="femmeInput" className="labelRadioInput">
                  Femme
                </label>
                <input
                  id="femmeInput"
                  className="radioInput"
                  type="radio"
                  value="option1"
                  name="genre"
                  defaultChecked
                />
              </div>
              <div className="containerRadioInput">
                <label htmlFor="hommeInput" className="labelRadioInput">
                  Homme
                </label>
                <input
                  id="hommeInput"
                  className="radioInput"
                  type="radio"
                  value="option2"
                  name="genre"
                />
              </div>
              <div className="containerRadioInput">
                <label htmlFor="autreInput" className="labelRadioInput">
                  Autre
                </label>
                <input
                  id="autreInput"
                  className="radioInput"
                  type="radio"
                  value="option3"
                  name="genre"
                />
              </div>
            </div>

            <div className="containerTextInput">
              <img
                className="iconForm"
                src={identificationBlack}
                alt="person"
              />
              <input
                type="text"
                placeholder="Nom"
                name="nom"
                className="textInput"
              />
              {errors.nom && <small className="error">{errors.nom}</small>}
            </div>

            <div className="containerTextInput">
              <img
                className="iconForm"
                src={identificationBlack}
                alt="person"
              />
              <input
                type="text"
                placeholder="Prénom"
                name="prenom"
                className="textInput"
              />
              {errors.prenom && (
                <small className="error">{errors.prenom}</small>
              )}
            </div>
            <div className="containerTextInput">
              <img className="iconForm" src={mailBlack} alt="person" />
              <input
                type="email"
                placeholder=" Email"
                name="email"
                className="textInput"
              />
              {errors.email && <small className="error">{errors.email}</small>}
            </div>

            <div className="containerTextInput">
              <img className="iconForm" src={mobileBlack} alt="mobile" />
              <div className="inputContainer">
                <input
                  type="tel"
                  placeholder="Téléphone"
                  name="telephone"
                  onChange={(e) => validateTelephone(e.target.value)}
                  className="textInput"
                />
                {errors.telephone && (
                  <p className="error">{errors.telephone}</p>
                )}
              </div>
            </div>

            <div className="containerTextInput">
              <img className="iconForm" src={cityBlack} alt="city" />
              <input
                type="text"
                placeholder="Ville"
                name="localisation"
                className="textInput"
              />
              {errors.localisation && (
                <small className="error">{errors.localisation}</small>
              )}
            </div>

            <button className="button" type="submit">
              J'enregistre
            </button>
          </form>
          <form className="form">
            <h2>Modifier mon mot de passe</h2>
            <div className="containerTextInput">
              <img className="iconForm" src={lockBlack} alt="lock" />
              <input
                type="text"
                placeholder="Ancien mot de passe"
                name="ancienMdp"
                className="textInput"
              />
            </div>
            <div className="containerTextInput">
              <img className="iconForm" src={lockBlack} alt="lock" />
              <input
                type="text"
                placeholder="Nouveau mot de passe"
                name="nouveauMdp"
                className="textInput"
              />
              <small className="error">{errors.password}</small>
            </div>
            <div className="containerTextInput">
              <img className="iconForm" src={lockBlack} alt="lock" />
              <input
                type="email"
                placeholder="Confirmer mot de passe"
                name="newMdp"
                className="textInput"
              />
              <small className="error">{errors.password}</small>
            </div>
            <div>
              <button type="submit" className="button">
                J'enregistre
              </button>
            </div>
          </form>
          <button type="button" className="button">
            <img
              className="iconForm2"
              src={whiteTrash}
              alt="Poubelle du bouton permettant de supprimer son compte"
            />
            Je supprime mon compte
          </button>
        </>
      )}

      {userRole && userRole === "Admin" && (
        <>
          <h1>MyProfile Admin</h1>
          <form onSubmit={handleSubmit} className="form">
            <h2>Modifier mon profil</h2>
            <div className="groupRadio">
              <div className="containerRadioInput">
                <label htmlFor="femmeInput" className="labelRadioInput">
                  Femme
                </label>
                <input
                  id="femmeInput"
                  className="radioInput"
                  type="radio"
                  value="option1"
                  name="genre"
                  defaultChecked
                />
              </div>
              <div className="containerRadioInput">
                <label htmlFor="hommeInput" className="labelRadioInput">
                  Homme
                </label>
                <input
                  id="hommeInput"
                  className="radioInput"
                  type="radio"
                  value="option2"
                  name="genre"
                />
              </div>
              <div className="containerRadioInput">
                <label htmlFor="autreInput" className="labelRadioInput">
                  Autre
                </label>
                <input
                  id="autreInput"
                  className="radioInput"
                  type="radio"
                  value="option3"
                  name="genre"
                />
              </div>
            </div>

            <div className="containerTextInput">
              <img
                className="iconForm"
                src={identificationBlack}
                alt="person"
              />
              <input
                type="text"
                placeholder="Nom"
                name="nom"
                className="textInput"
              />
              {errors.nom && <small className="error">{errors.nom}</small>}
            </div>

            <div className="containerTextInput">
              <img className="iconForm" src={mailBlack} alt="person" />
              <input
                type="email"
                placeholder=" Email"
                name="email"
                className="textInput"
              />
              {errors.email && <small className="error">{errors.email}</small>}
            </div>

            <div className="containerTextInput">
              <img className="iconForm" src={mobileBlack} alt="mobile" />

              <div className="inputContainer">
                <input
                  type="tel"
                  placeholder="Téléphone"
                  name="telephone"
                  onChange={(e) => validateTelephone(e.target.value)}
                  className="textInput"
                />
                {errors.telephone && (
                  <p className="error">{errors.telephone}</p>
                )}
              </div>
            </div>

            <div className="containerTextInput">
              <img className="iconForm" src={cityBlack} alt="city" />
              <input
                type="text"
                placeholder="Ville"
                name="localisation"
                className="textInput"
              />
              {errors.localisation && (
                <small className="error">{errors.localisation}</small>
              )}
            </div>

            <button className="button" type="submit">
              J'enregistre
            </button>
          </form>
          <form className="form">
            <h2>Modifier mon mot de passe</h2>
            <div className="containerTextInput">
              <img className="iconForm" src={lockBlack} alt="lock" />
              <input
                type="text"
                placeholder="Ancien mot de passe"
                name="ancienMdp"
                className="textInput"
              />
            </div>
            <div className="containerTextInput">
              <img className="iconForm" src={lockBlack} alt="lock" />
              <input
                type="text"
                placeholder="Nouveau mot de passe"
                name="nouveauMdp"
                className="textInput"
              />
              <small className="error">{errors.password}</small>
            </div>
            <div className="containerTextInput">
              <img className="iconForm" src={lockBlack} alt="lock" />
              <input
                type="email"
                placeholder="Confirmer mot de passe"
                name="newMdp"
                className="textInput"
              />
              <small className="error">{errors.password}</small>
            </div>
            <div>
              <button type="submit" className="button">
                J'enregistre
              </button>
            </div>
          </form>
          <button type="button" className="button">
            <img
              className="iconForm2"
              src={whiteTrash}
              alt="Poubelle du bouton permettant de supprimer son compte"
            />
            Je supprime mon compte
          </button>
        </>
      )}

      {userRole && userRole === "Company" && (
        <>
          <h1>MyProfile Company</h1>
          <form onSubmit={handleSubmit} className="form">
            <h2>Modifier mon profil</h2>
            <div className="groupRadio">
              <div className="containerRadioInput">
                <label htmlFor="femmeInput" className="labelRadioInput">
                  Femme
                </label>
                <input
                  id="femmeInput"
                  className="radioInput"
                  type="radio"
                  value="option1"
                  name="genre"
                  defaultChecked
                />
              </div>
              <div className="containerRadioInput">
                <label htmlFor="hommeInput" className="labelRadioInput">
                  Homme
                </label>
                <input
                  id="hommeInput"
                  className="radioInput"
                  type="radio"
                  value="option2"
                  name="genre"
                />
              </div>
              <div className="containerRadioInput">
                <label htmlFor="autreInput" className="labelRadioInput">
                  Autre
                </label>
                <input
                  id="autreInput"
                  className="radioInput"
                  type="radio"
                  value="option3"
                  name="genre"
                />
              </div>
            </div>

            <div className="containerTextInput">
              <img
                className="iconForm"
                src={identificationBlack}
                alt="person"
              />
              <input
                type="text"
                placeholder="Nom"
                name="nom"
                className="textInput"
              />
              {errors.nom && <small className="error">{errors.nom}</small>}
            </div>

            <div className="containerTextInput">
              <img
                className="iconForm"
                src={identificationBlack}
                alt="person"
              />
              <input
                type="text"
                placeholder="Prénom"
                name="prenom"
                className="textInput"
              />
              {errors.prenom && (
                <small className="error">{errors.prenom}</small>
              )}
            </div>
            <div className="containerTextInput">
              <img className="iconForm" src={mailBlack} alt="person" />
              <input
                type="email"
                placeholder=" Email"
                name="email"
                className="textInput"
              />
              {errors.email && <small className="error">{errors.email}</small>}
            </div>

            <div className="containerTextInput">
              <img className="iconForm" src={mobileBlack} alt="mobile" />
              <div className="inputContainer">
                <input
                  type="tel"
                  placeholder="Téléphone"
                  name="telephone"
                  onChange={(e) => validateTelephone(e.target.value)}
                  className="textInput"
                />
                {errors.telephone && (
                  <p className="error">{errors.telephone}</p>
                )}
              </div>
            </div>

            <div className="containerTextInput">
              <img className="iconForm" src={cityBlack} alt="city" />
              <input
                type="text"
                placeholder="Ville"
                name="localisation"
                className="textInput"
              />
              {errors.localisation && (
                <small className="error">{errors.localisation}</small>
              )}
            </div>

            <button className="button" type="submit">
              J'enregistre
            </button>
          </form>
          <form className="form">
            <h2>Modifier mon mot de passe</h2>
            <div className="containerTextInput">
              <img className="iconForm" src={lockBlack} alt="lock" />
              <input
                type="text"
                placeholder="Ancien mot de passe"
                name="ancienMdp"
                className="textInput"
              />
            </div>
            <div className="containerTextInput">
              <img className="iconForm" src={lockBlack} alt="lock" />
              <input
                type="text"
                placeholder="Nouveau mot de passe"
                name="nouveauMdp"
                className="textInput"
              />
              <small className="error">{errors.password}</small>
            </div>
            <div className="containerTextInput">
              <img className="iconForm" src={lockBlack} alt="lock" />
              <input
                type="email"
                placeholder="Confirmer mot de passe"
                name="newMdp"
                className="textInput"
              />
              <small className="error">{errors.password}</small>
            </div>
            <div>
              <button type="submit" className="button">
                J'enregistre
              </button>
            </div>
          </form>
          <button type="button" className="button">
            <img
              className="iconForm2"
              src={whiteTrash}
              alt="Poubelle du bouton permettant de supprimer son compte"
            />
            Je supprime mon compte
          </button>
        </>
      )}
    </div>
  );
}

export default MyProfile;
