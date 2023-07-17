import { useState, useEffect, useContext } from "react";
import axios from "axios";

// Import context
import TokenContext from "../../contexts/TokenContext";

// Import des composants
import OfferCardList from "../../components/OfferCardList";
import OfferModal from "../../components/OfferModal";

function MyFavoritesOffers() {
  const { userToken } = useContext(TokenContext);
  // const [offersFavoriesByApplicantId, setOffersFavoriesByApplicantId] =
  useState([]);
  // gestion de la modale
  const [modalOfferIsOpen, setModalOfferIsOpen] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState([]);
  // gestion de la mise en favoris
  const [offersFavorited, setOffersFavorited] = useState([]);
  // gestion de la modale
  const handleOpenModalOffer = (offerId) => {
    const findOffer = offersFavorited.find((offer) => offer.id === offerId);
    setSelectedOffer(findOffer);
    setModalOfferIsOpen(true);
  };
  const favoriesByApplicantId = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/favorites`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then((results) => setOffersFavorited(results.data));
  };
  useEffect(() => {
    favoriesByApplicantId();
  }, []);

  return (
    <div className="offersFavoriesContainer">
      <OfferModal
        modalOfferIsOpen={modalOfferIsOpen}
        setModalOfferIsOpen={setModalOfferIsOpen}
        offer={selectedOffer}
      />
      {offersFavorited.map((offer) => (
        <OfferCardList
          key={offer.id}
          offer={offer}
          modalOfferIsOpen={modalOfferIsOpen}
          setModalOfferIsOpen={setModalOfferIsOpen}
          onCardClick={handleOpenModalOffer}
          offersFavorited={offersFavorited}
          setOffersFavorited={setOffersFavorited}
        />
      ))}
    </div>
  );
}

export default MyFavoritesOffers;
