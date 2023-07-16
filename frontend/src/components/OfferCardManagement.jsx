/* eslint-disable camelcase */
import PropTypes from "prop-types";
// import { useState } from "react";

// Import icones
import trash from "../assets/icons/white_trash.svg";
import iconWhiteCity from "../assets/icons/white_city_fill.svg";
import iconWhiteContract from "../assets/icons/contract_white.svg";

function OfferCardManagement({ offer }) {
  const { id, title, city, contract_type_name } = offer;

  return (
    <div className="offerCard offerCardList">
      <div className="offerCardColor">
        <div className="offerTitleAndIcon">
          <p className="titleOfferCard">ID: {id}</p>
          <button type="button">
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
      <button type="button" className="buttonCard">
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
};

export default OfferCardManagement;
