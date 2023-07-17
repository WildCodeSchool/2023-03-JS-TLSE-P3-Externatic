/* eslint-disable camelcase */
import PropTypes from "prop-types";
import Modal from "react-modal";

// import des icones
import cross from "../assets/icons/cross.svg";
import iconBlackCity from "../assets/icons/black_city_fill.svg";
import iconBlackContract from "../assets/icons/contract_black.svg";
import iconPinkRocket from "../assets/icons/rocket_pink.svg";
import iconPinkTools from "../assets/icons/tools_pink.svg";
import iconBlackProfil from "../assets/icons/person_black.svg";

function OfferModal({ modalOfferIsOpen, setModalOfferIsOpen, offer }) {
  const {
    title,
    city,
    job_responsibilities,
    technical_environment,
    benefits,
    contract_type_name,
    company_name,
  } = offer;
  return (
    <Modal
      closeTimeoutMS={200}
      isOpen={modalOfferIsOpen}
      onRequestClose={() => setModalOfferIsOpen(false)}
      id="offerModalContent"
      style={{
        overlay: {
          backdropFilter: "blur(6px)",
          backgroundColor: "none",
          zIndex: "12",
        },
        content: {
          border: "1px solid #ccc",
          borderRadius: "4px",
          margin: "auto",
          inset: "0",
          padding: "0.5rem",
        },
      }}
    >
      <div className="buttonModal crossSectionModal">
        <button
          className="buttonClose"
          type="button"
          onClick={() => setModalOfferIsOpen(false)}
        >
          <img src={cross} alt="Croix de fermeture du menu" />
        </button>
      </div>
      {offer && (
        <>
          <h3>{title}</h3>
          <div className="offerTextAndIcon">
            <img src={iconBlackProfil} alt="icon profil" />
            <h3>{company_name}</h3>
          </div>
          <div className="offerTextAndIcon">
            <img src={iconBlackCity} alt="icon city" />
            <h3>{city}</h3>
          </div>
          <div className="offerTextAndIcon">
            <img src={iconBlackContract} alt="icon contract" />
            <h3>{contract_type_name}</h3>
          </div>
          <div className="offerTextAndIcon">
            <img src={iconPinkRocket} alt="icon contract" />
            <h3 className="titleModal">Vos missions</h3>
          </div>
          <p>{job_responsibilities}</p>
          <div className="offerTextAndIcon">
            <img src={iconPinkTools} alt="icon contract" />
            <h3 className="titleModal">L'environnement technique</h3>
          </div>
          <p>{technical_environment}</p>
          <div className="offerTextAndIcon">
            <img src={iconPinkRocket} alt="icon contract" />
            <h3 className="titleModal">Les avantages</h3>
          </div>
          <p>{benefits}</p>
        </>
      )}
      <div className="buttonModal">
        <button
          type="button"
          className="button"
          onClick={() => setModalOfferIsOpen(false)}
        >
          Fermer
        </button>
      </div>
    </Modal>
  );
}

OfferModal.propTypes = {
  offer: PropTypes.shape({
    title: PropTypes.string,
    city: PropTypes.string,
    job_responsibilities: PropTypes.string,
    technical_environment: PropTypes.string,
    benefits: PropTypes.string,
    contract_type_name: PropTypes.string,
    company_name: PropTypes.string,
  }).isRequired,
  modalOfferIsOpen: PropTypes.bool.isRequired,
  setModalOfferIsOpen: PropTypes.bool.isRequired,
};

export default OfferModal;
