/* eslint-disable camelcase */
import { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import TokenContext from "../contexts/TokenContext";
// Import des composants
import OfferModal from "./OfferModal";
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

function OfferCardLarge({ offer, favoritesByApplicantId }) {
  const { title, city, contract_type_name, company_name } = offer;
  const [isFavorite, setIsFavorite] = useState(false);
  const { userToken, userRole } = useContext(TokenContext);

  // gestion de la modale
  const [modalOfferIsOpen, setModalOfferIsOpen] = useState(false);
  const verifyIsFavorite = () => {
    if (userToken) {
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
    }
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
    <div className="offerCard offerCardLarge">
      <div className="offerCardColor">
        <div className="heartCardLarge">
          {isFavorite && userRole === "applicant" ? (
            <button type="button" onClick={() => deleteFavorite()}>
              <img
                src={iconWhiteHeartFill}
                alt="icon add favorite"
                className="heart"
              />
            </button>
          ) : null}
          {!isFavorite && userRole === "applicant" ? (
            <button type="button" onClick={() => addFavorite()}>
              <img
                src={iconWhiteHeartEmpty}
                alt="icon add favorite"
                className="heart"
              />
            </button>
          ) : null}
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
      <button
        type="button"
        className="buttonCard"
        onClick={() => setModalOfferIsOpen(true)}
      >
        Consulter l'offre
      </button>
      <OfferModal
        modalOfferIsOpen={modalOfferIsOpen}
        setModalOfferIsOpen={setModalOfferIsOpen}
        offer={offer}
        isFavorite={isFavorite}
        addFavorite={addFavorite}
        deleteFavorite={deleteFavorite}
      />
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
  favoritesByApplicantId: PropTypes.func.isRequired,
};

export default OfferCardLarge;
