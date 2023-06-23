import React, { useState } from "react";
import "../css/pages/MyProfile.css";
import identificationBlack from "../assets/icons/identification_black.svg";
import mailBlack from "../assets/icons/mail_black.svg";
import mobileBlack from "../assets/icons/mobile_black.svg";
import cityBlack from "../assets/icons/black_city.svg";
import whiteTrash from "../assets/icons/white_trash.svg";
import lockBlack from "../assets/icons/lock_black.svg";

function MyProfile() {
  const [genre, setGenre] = useState("");

  return (
    <div>
      <div className="containerForm">
        <h4 className="myProfil">Modifier mon profil</h4>
        <div className="containerForm_2">
          <form action=" " method="POST" className="allForm">
            <div className="button-ratio">
              <div className="groupRadio">
                <label htmlFor="femmeInput">Femme</label>
                <input
                  id="femmeInput"
                  type="radio"
                  value="option1"
                  name="genre"
                  checked={genre === "option1"}
                  onChange={() => setGenre("option1")}
                />
                <label htmlFor="hommeInput">Homme</label>
                <input
                  id="hommeInput"
                  type="radio"
                  value="option2"
                  name="genre"
                  checked={genre === "option2"}
                  onChange={() => setGenre("option2")}
                />
                <label htmlFor="autreInput">Autre</label>
                <input
                  id="autreInput"
                  type="radio"
                  value="option3"
                  name="genre"
                  checked={genre === "option3"}
                  onChange={() => setGenre("option3")}
                />
              </div>
            </div>

            <div className="input">
              <img
                className="iconForm"
                src={identificationBlack}
                alt="person"
              />
              <input
                type="text"
                placeholder="Nom"
                name="nom"
                className="inputForm"
              />
            </div>

            <div className="input">
              <img
                className="iconForm"
                src={identificationBlack}
                alt="person"
              />
              <input
                type="text"
                placeholder="Prenom"
                name="prenom"
                className="inputForm"
              />
            </div>

            <div className="input">
              <img className="iconForm" src={mailBlack} alt="person" />
              <input
                type="email"
                placeholder=" Email"
                name="email"
                className="inputForm"
              />
            </div>

            <div className="input">
              <img className="iconForm" src={lockBlack} alt="lock" />
              <input
                type="password"
                placeholder="Password"
                name="password"
                className="inputForm"
              />
            </div>

            <div className="input">
              <img className="iconForm" src={mobileBlack} alt="mobile" />
              <input
                type="tel"
                placeholder="Téléphone"
                name="telephone"
                className="inputForm"
              />
            </div>

            <div className="input">
              <img className="iconForm" src={cityBlack} alt="city" />
              <input
                type="text"
                placeholder="ville de residence"
                name="localisation"
                className="inputForm"
              />
              <small />
            </div>

            <button className="registerButton" type="submit">
              J'enregistre
            </button>
          </form>
        </div>
      </div>

      <div className="containerModif">
        <h4 className="myProfil2">Modifier mon mot de passe</h4>

        <div className="allForm">
          <div className="input">
            <img className="iconForm" src={lockBlack} alt="lock" />
            <input
              type="text"
              placeholder="Ancien mot de passe"
              name="ancienMdp"
              className="inputForm"
            />
          </div>
          <div className="input">
            <img className="iconForm" src={lockBlack} alt="lock" />
            <input
              type="text"
              placeholder="Nouveau mot de passe"
              name="nouveauMdp"
              className="inputForm"
            />
          </div>
          <div className="input">
            <img className="iconForm" src={lockBlack} alt="lock" />
            <input
              type="email"
              placeholder="Confirmer mot de passe"
              name="newMdp"
              className="inputForm"
            />
          </div>
          <button type="submit" className="registerButton">
            J'enregistre
          </button>

          <div className="input2">
            <button type="submit" className="deleteButton">
              <img className="iconForm2" src={whiteTrash} alt="clean" />
              Je supprime mon compte
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
