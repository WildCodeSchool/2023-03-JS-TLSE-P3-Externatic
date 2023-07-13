/* eslint-disable camelcase */
import PropTypes from "prop-types";
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

function OfferCardLarge({ offer, onCardClick }) {
  const { id, title, city, contract_type_name, company_name } = offer;
  const [offerIsFavorite, setOfferIsFavorite] = useState(false);

  const handleClickOfferIsFavorite = () => {
    setOfferIsFavorite(!offerIsFavorite);
  };
  const handleCardClick = () => {
    onCardClick(id);
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
        <h3 className="titleOfferCard">{title}</h3>
        <div className="offerTextAndIcon">
          <img src={iconWhiteProfil} alt="icon profil" />
          <p>{company_name}</p>
        </div>
        <div className="offerTextAndIcon">
          <img src={iconWhiteCity} alt="icon city" />
          <p>{city}</p>
        </div>
        <div className="offerTextAndIcon">
          <img src={iconWhiteContract} alt="icon contract" />
          <p>{contract_type_name}</p>
        </div>
      </div>
      <button type="button" className="buttonCard" onClick={handleCardClick}>
        Consulter l'offre
      </button>
    </div>
  );
}
OfferCardLarge.propTypes = {
  offer: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    city: PropTypes.string,
    contract_type_name: PropTypes.string,
    company_name: PropTypes.string,
  }).isRequired,
  onCardClick: PropTypes.func.isRequired,
};

export default OfferCardLarge;
