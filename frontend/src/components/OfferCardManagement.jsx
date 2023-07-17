/* eslint-disable camelcase */
import PropTypes from "prop-types";
import { useState, useContext } from "react";
import axios from "axios";

// import des composants
import OfferModalManagement from "./OfferModalManagement";

// Import icones
import trash from "../assets/icons/white_trash.svg";
import iconWhiteCity from "../assets/icons/white_city_fill.svg";
import iconWhiteContract from "../assets/icons/contract_white.svg";

// Import context
import TokenContext from "../contexts/TokenContext";

function OfferCardManagement({ offer, getOffers }) {
  const { userToken } = useContext(TokenContext);
  const { id, title, city, contract_type_name } = offer;
  const [modalOfferIsOpen, setModalOfferIsOpen] = useState(false);

  const deleteOffer = (offerId) => {
    axios
      .delete(`${import.meta.env.VITE_BACKEND_URL}/offers/${offerId}`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then(() => {
        getOffers();
      });
  };

  return (
    <div className="offerCard offerCardList">
      <OfferModalManagement
        modalOfferIsOpen={modalOfferIsOpen}
        setModalOfferIsOpen={setModalOfferIsOpen}
        offer={offer}
      />
      <div className="offerCardColor">
        <div className="offerTitleAndIcon">
          <p className="titleOfferCard">ID: {id}</p>
          <button type="button" onClick={() => deleteOffer(id)}>
            <img src={trash} alt="icon add favorite" className="trash" />
          </button>
        </div>
        <h3 className="titleOfferCard">{title}</h3>
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
    </div>
  );
}

OfferCardManagement.propTypes = {
  offer: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    city: PropTypes.string,
    contract_type_name: PropTypes.string,
  }).isRequired,
  getOffers: PropTypes.func.isRequired,
};

export default OfferCardManagement;
