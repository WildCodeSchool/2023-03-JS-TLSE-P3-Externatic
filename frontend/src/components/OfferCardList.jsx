/* eslint-disable camelcase */
import PropTypes from "prop-types";
import { useState } from "react";
// Import style
import "../css/components/OfferCardList.css";
// Import icones
import iconWhiteHeartEmpty from "../assets/icons/white_heart_empty.svg";
import iconWhiteHeartFill from "../assets/icons/white_heart_fill.svg";
import iconWhiteCity from "../assets/icons/white_city_fill.svg";
import iconWhiteContract from "../assets/icons/contract_white.svg";

function OfferCardList({ offer, onCardClick, addFavorite }) {
  const { id, title, city, contract_type_name } = offer;
  const [offerIsFavorite, setOfferIsFavorite] = useState(false);
  const handleClickOfferIsFavorite = () => {
    setOfferIsFavorite(!offerIsFavorite);
  };
  const handleCardClick = () => {
    onCardClick(id);
  };
  return (
    <div className="offerCard offerCardList">
      <div className="offerCardColor">
        <div className="offerTitleAndIcon">
          <h3 className="titleOfferCard">{title}</h3>
          <button
            type="button"
            onClick={() => {
              handleClickOfferIsFavorite();
              addFavorite(offer);
            }}
          >
            <img
              src={offerIsFavorite ? iconWhiteHeartFill : iconWhiteHeartEmpty}
              alt="icon add favorite"
              className="heart"
            />
          </button>
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

OfferCardList.propTypes = {
  offer: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    city: PropTypes.string,
    contract_type_name: PropTypes.string,
  }).isRequired,
  onCardClick: PropTypes.func.isRequired,
  addFavorite: PropTypes.func.isRequired,
};

export default OfferCardList;
