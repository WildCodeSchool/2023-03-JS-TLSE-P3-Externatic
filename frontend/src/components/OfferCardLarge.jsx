import { useState } from "react";
// Import style
import "../css/components/OfferCardList.css";
// Import icones
import iconWhiteHeartEmpty from "../assets/icons/white_heart_empty.svg";
import iconWhiteHeartFill from "../assets/icons/white_heart_fill.svg";
import iconWhiteProfil from "../assets/icons/person_white.svg";
import iconWhiteCity from "../assets/icons/white_city_fill.svg";
import iconWhiteContract from "../assets/icons/contract_white.svg";
// Import images
import jobCard from "../assets/images/card_applicant.png";

function OfferCardLarge() {
  const [offerIsFavorite, setOfferIsFavorite] = useState(false);
  const handleClickOfferIsFavorite = () => {
    setOfferIsFavorite(!offerIsFavorite);
  };
  return (
    <div className="offerCard offerCardLarge">
      <div className="offerCardColor">
        <div className="heartCardLarge">
          <button type="button" onClick={handleClickOfferIsFavorite}>
            <img
              src={offerIsFavorite ? iconWhiteHeartEmpty : iconWhiteHeartFill}
              alt="icon add favorite"
              className="heart"
            />
          </button>
        </div>
        <img className="jobCardImage" src={jobCard} alt="job" />
        <h3 className="titleOfferCard">Offer title </h3>
        <div className="offerTextAndIcon">
          <img src={iconWhiteProfil} alt="icon profil" />
          <p>L'entreprise</p>
        </div>
        <div className="offerTextAndIcon">
          <img src={iconWhiteCity} alt="icon city" />
          <p>Ville</p>
        </div>
        <div className="offerTextAndIcon">
          <img src={iconWhiteContract} alt="icon contract" />
          <p>Contrat</p>
        </div>
      </div>
      <button type="button" className="buttonCard">
        Consulter l'offre
      </button>
    </div>
  );
}

export default OfferCardLarge;
