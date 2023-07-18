/* eslint-disable camelcase */
import { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import TokenContext from "../contexts/TokenContext";
// Import style
import "../css/components/OfferCardList.css";
// Import icones
import iconWhiteHeartEmpty from "../assets/icons/white_heart_empty.svg";
import iconWhiteHeartFill from "../assets/icons/white_heart_fill.svg";
import iconWhiteCity from "../assets/icons/white_city_fill.svg";
import iconWhiteContract from "../assets/icons/contract_white.svg";

function OfferCardList({ offer, onCardClick, favoritesByApplicantId }) {
  const { id, title, city, contract_type_name } = offer;
  const [isFavorite, setIsFavorite] = useState(false);
  const { userToken } = useContext(TokenContext);
  const handleCardClick = () => {
    onCardClick(id);
  };
  const verifyIsFavorite = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/favorites/${offer.id}`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then((res) => {
        if (res.data.length) {
          setIsFavorite(true);
        } else {
          setIsFavorite(false);
        }
      });
  };

  const addFavorite = () => {
    axios
      .post(
        `${import.meta.env.VITE_BACKEND_URL}/favorites`,
        {
          offerId: offer.id,
        },
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      )
      .then(() => {
        verifyIsFavorite();
      });
  };

  const deleteFavorite = () => {
    axios
      .delete(`${import.meta.env.VITE_BACKEND_URL}/favorites/${offer.id}`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then(() => {
        verifyIsFavorite();
        favoritesByApplicantId();
      });
  };
  useEffect(() => {
    verifyIsFavorite();
  }, []);
  return (
    <div className="offerCard offerCardList">
      <div className="offerCardColor">
        <div className="offerTitleAndIcon">
          <h3 className="titleOfferCard">{title}</h3>
          {isFavorite ? (
            <button type="button" onClick={() => deleteFavorite()}>
              <img
                src={iconWhiteHeartFill}
                alt="icon add favorite"
                className="heart"
              />
            </button>
          ) : (
            <button type="button" onClick={() => addFavorite()}>
              <img
                src={iconWhiteHeartEmpty}
                alt="icon add favorite"
                className="heart"
              />
            </button>
          )}
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
  favoritesByApplicantId: PropTypes.func.isRequired,
};

export default OfferCardList;
