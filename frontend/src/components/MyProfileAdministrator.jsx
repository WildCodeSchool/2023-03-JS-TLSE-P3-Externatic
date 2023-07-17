// Import des packages
import { useContext } from "react";

// Import context
import ValidationFormContext from "../contexts/ValidationFormContext";

// Import des icons
import identificationBlack from "../assets/icons/identification_black.svg";
import mailBlack from "../assets/icons/mail_black.svg";
import mobileBlack from "../assets/icons/mobile_black.svg";
import cityBlack from "../assets/icons/black_city.svg";
// import ModificationProfileContext from "../contexts/ModificationProfileContext";

function MyProfileAdmin() {
  const { errors } = useContext(ValidationFormContext);
  // const { editingInputs, setEditingInputs } = useContext(
  //   ModificationProfileContext
  // );
  return (
    <>
      <div className="containerTitleName">
        <div className="containerRadioInput">
          <input
            type="radio"
            id="radio1"
            className="radioInput"
            name="titleName"
          />
          <label htmlFor="radio1" className="labelRadioInput miss">
            Madame
          </label>
        </div>
        <div className="containerRadioInput">
          <input
            type="radio"
            id="radio2"
            className="radioInput"
            name="titleName"
          />
          <label htmlFor="radio2" className="labelRadioInput mister">
            Monsieur
          </label>
        </div>
      </div>
      <div className="containerTextInput">
        <img className="iconForm" src={identificationBlack} alt="person" />

        <input
          className="textInput"
          type="text"
          placeholder="Prénom"
          required=""
          name="firstname"
          autoComplete="off"
          //   onChange={handleInput}
          //   onClick={resetInputOnClick}
        />
        {/* {errors.firstname && (
          <span className="errorMessage">{errors.firstname}</span>
        )} */}
      </div>
      <div className="containerTextInput">
        <img className="iconForm" src={identificationBlack} alt="person" />

        <input
          className="textInput"
          type="text"
          placeholder="Nom"
          required=""
          name="lastname"
          autoComplete="off"
          //   onChange={handleInput}
          //   onClick={resetInputOnClick}
        />
        {errors.lastname && (
          <span className="errorMessage">{errors.lastname}</span>
        )}
      </div>
      <div className="containerTextInput">
        <img className="iconForm" src={mailBlack} alt="icone mail" />
        <input
          className="textInput"
          type="email"
          placeholder="Email"
          required=""
          name="email"
          autoComplete="off"
          //   onChange={handleInput}
          //   onClick={resetInputOnClick}
        />
        {errors.email && <span className="errorMessage">{errors.email}</span>}
      </div>
      <div className="containerTextInput">
        <img className="iconForm" src={mobileBlack} alt="mobile" />
        <input
          type="tel"
          placeholder="Téléphone"
          name="telephone"
          className="textInput"
          //   onChange={(e) => validateTelephone(e.target.value)}
        />
        {/* {telephoneError && <div className="error">{telephoneError}</div>} */}
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
      <button type="submit" className="button">
        J'enregistre
      </button>
    </>
  );
}

export default MyProfileAdmin;
