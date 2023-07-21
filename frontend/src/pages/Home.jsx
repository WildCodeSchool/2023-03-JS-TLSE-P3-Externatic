import { useEffect, useState } from "react";
import axios from "axios";
import OfferCardLarge from "../components/OfferCardLarge";

function Home() {
  const [offersList, setOffersList] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/offers`)
      .then((results) => setOffersList(results.data));
  }, []);
  return (
    <div className="offersListCardLargeContainer">
      {offersList.length ? (
        offersList.map((offer) => (
          <OfferCardLarge key={offer.id} offer={offer} />
        ))
      ) : (
        <div className="globalContainer">
          <h3 className="errorTitle">Pas de résultat</h3>
        </div>
      )}
    </div>
  );
}

export default Home;
