import { useState, useEffect, useContext } from "react";
import axios from "axios";

// Import context
import TokenContext from "../../contexts/TokenContext";

// Import des composants
import OfferCardList from "../../components/OfferCardList";
import OfferModal from "../../components/OfferModal";

function MyFavoritesOffers() {
  const { userToken } = useContext(TokenContext);
  // gestion de la modale
  const [modalOfferIsOpen, setModalOfferIsOpen] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState([]);

  const [offersList, setOffersList] = useState([]);

  // gestion de la mise en favoris
  const [offersFavorited, setOffersFavorited] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/offers`)
      .then((results) => setOffersList(results.data));
  }, []);
  // gestion de la modale
  const handleOpenModalOffer = (offerId) => {
    const findOffer = offersList.find((offer) => offer.id === offerId);
    setSelectedOffer(findOffer);
    setModalOfferIsOpen(true);
  };
  const favoritesByApplicantId = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/all-favorites`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then((results) => {
        setOffersFavorited(results.data);
      });
  };
  useEffect(() => {
    favoritesByApplicantId();
  }, []);
  const findFavoritesOffers = offersList.filter((offer) =>
    offersFavorited.some((favorite) => favorite.offer_id === offer.id)
  );
  return (
    <div className="offersFavoriesContainer">
      <OfferModal
        modalOfferIsOpen={modalOfferIsOpen}
        setModalOfferIsOpen={setModalOfferIsOpen}
        offer={selectedOffer}
      />
      {findFavoritesOffers.length ? (
        findFavoritesOffers.map((el) => (
          <OfferCardList
            key={el.id}
            offer={el}
            modalOfferIsOpen={modalOfferIsOpen}
            setModalOfferIsOpen={setModalOfferIsOpen}
            onCardClick={handleOpenModalOffer}
            favoritesByApplicantId={favoritesByApplicantId}
          />
        ))
      ) : (
        <div className="globalContainer">
          <h3 className="errorTitle">Vous n'avez aucune offre en favoris</h3>
        </div>
      )}
    </div>
  );
}

export default MyFavoritesOffers;
