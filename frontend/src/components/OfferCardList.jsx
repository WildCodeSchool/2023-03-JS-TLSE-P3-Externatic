import PropTypes from "prop-types";
import { useState } from "react";
// Import style
import "../css/components/OfferCardList.css";
// Import icones
import iconWhiteHeartEmpty from "../assets/icons/white_heart_empty.svg";
import iconWhiteHeartFill from "../assets/icons/white_heart_fill.svg";
import iconWhiteCity from "../assets/icons/white_city_fill.svg";
import iconWhiteContract from "../assets/icons/contract_white.svg";

function OfferCardList({ offer }) {
  const { title, city } = offer;
  const [offerIsFavorite, setOfferIsFavorite] = useState(false);
  const handleClickOfferIsFavorite = () => {
    setOfferIsFavorite(!offerIsFavorite);
  };
  return (
    <div className="offerCard offerCardList">
      <div className="offerCardColor">
        <div className="offerTitleAndIcon">
          <h3 className="titleOfferCard">{title}</h3>
          <button type="button" onClick={handleClickOfferIsFavorite}>
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
          <p>CDI</p>
        </div>
      </div>
      <button type="button" className="buttonCard">
        Consulter l'offre
      </button>
    </div>
  );
}

OfferCardList.propTypes = {
  offer: PropTypes.shape({ title: PropTypes.string, city: PropTypes.string })
    .isRequired,
};

export default OfferCardList;
