import { useEffect, useState } from "react";
import axios from "axios";
import OfferCardLarge from "../components/OfferCardLarge";
import OfferModal from "../components/OfferModal";

function Home() {
  const [offersList, setOffersList] = useState([]);
  const [modalOfferIsOpen, setModalOfferIsOpen] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState([]);

  const handleOpenModalOffer = (offerId) => {
    const findOffer = offersList.find((offer) => offer.id === offerId);
    setSelectedOffer(findOffer);
    setModalOfferIsOpen(true);
  };

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/offers`)
      .then((results) => setOffersList(results.data));
  }, []);
  return (
    <div>
      <OfferModal
        modalOfferIsOpen={modalOfferIsOpen}
        setModalOfferIsOpen={setModalOfferIsOpen}
        offer={selectedOffer}
      />
      <p>Home</p>
      <div className="offersListCardLargeContainer">
        {offersList.length ? (
          offersList.map((offer) => (
            <OfferCardLarge
              key={offer.id}
              offer={offer}
              modalOfferIsOpen={modalOfferIsOpen}
              setModalOfferIsOpen={setModalOfferIsOpen}
              onCardClick={handleOpenModalOffer}
            />
          ))
        ) : (
          <div className="globalContainer">
            <h3 className="errorTitle">Pas de résultat</h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
