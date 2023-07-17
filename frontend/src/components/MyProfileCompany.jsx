// Import des packages
import { useContext } from "react";

// Import context
import ValidationFormContext from "../contexts/ValidationFormContext";

// Import des icons
import companyIcon from "../assets/icons/company_building_black.svg";
import numberIcon from "../assets/icons/number_black.svg";
import mailBlack from "../assets/icons/mail_black.svg";
import mobileBlack from "../assets/icons/mobile_black.svg";
import cityBlack from "../assets/icons/black_city.svg";

function MyProfileCompany() {
  const { errors } = useContext(ValidationFormContext);
  return (
    <>
      <div className="containerTextInput">
        <img className="iconForm" src={companyIcon} alt="person" />

        <input
          className="textInput"
          type="text"
          placeholder="Nom de l'entreprise"
          required=""
          name="name"
          autoComplete="on"
          //   onChange={handleInput}
          //   onClick={resetInputOnClick}
        />
        {errors.firstname && (
          <span className="errorMessage">{errors.firstname}</span>
        )}
      </div>
      <div className="containerTextInput">
        <img className="iconForm" src={numberIcon} alt="person" />

        <input
          className="textInput"
          type="text"
          placeholder="Numéro SIRET"
          required=""
          name="siret"
          autoComplete="on"
          maxLength="14"
          //   onChange={handleInput}
          //   onClick={resetInputOnClick}
        />
        {/* {errors.lastname && (
          <span className="errorMessage">{errors.lastname}</span>
        )} */}
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
        {/* {errors.email && <span className="errorMessage">{errors.email}</span>} */}
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
        {/* {errors.localisation && (
          <small className="error">{errors.localisation}</small>
        )} */}
      </div>
      <button type="submit" className="button">
        J'enregistre
      </button>
    </>
  );
}

export default MyProfileCompany;
