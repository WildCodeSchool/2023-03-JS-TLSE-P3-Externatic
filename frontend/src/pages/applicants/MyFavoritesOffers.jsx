import { useState, useEffect, useContext } from "react";
import axios from "axios";
import Swal from "sweetalert2";

// Import context
import TokenContext from "../../contexts/TokenContext";
import MessagesErrorContext from "../../contexts/MessagesErrorContext";

// Import des composants
import OfferCardList from "../../components/OfferCardList";
import OfferModal from "../../components/OfferModal";
import ErrorNoData from "../../components/ErrorNoData";

function MyFavoritesOffers() {
  const { userToken } = useContext(TokenContext);
  const { messages } = useContext(MessagesErrorContext);

  // gestion de la modale
  const [modalOfferIsOpen, setModalOfferIsOpen] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState([]);

  const [offersList, setOffersList] = useState([]);

  // gestion de la mise en favoris
  const [offersFavorited, setOffersFavorited] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/offers`)
      .then((results) => setOffersList(results.data))
      .catch((err) => {
        console.error(err);
        Swal.fire({
          icon: "error",
          text: err.response.data.error,
          iconColor: "#ca2061",
          width: 300,
          buttonsStyling: false,
          customClass: {
            confirmButton: "button",
          },
        });
      });
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
      })
      .catch((err) => {
        console.error(err);
        Swal.fire({
          icon: "error",
          text: err.response.data.error,
          iconColor: "#ca2061",
          width: 300,
          buttonsStyling: false,
          customClass: {
            confirmButton: "button",
          },
        });
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
        <ErrorNoData message={messages.favorites} />
      )}
    </div>
  );
}

export default MyFavoritesOffers;
