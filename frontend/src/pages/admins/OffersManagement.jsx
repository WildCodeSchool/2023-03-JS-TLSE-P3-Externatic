import { useState, useEffect, useContext } from "react";
import axios from "axios";

// Import context
import TokenContext from "../../contexts/TokenContext";

// import des composants
import OfferCardManagement from "../../components/OfferCardManagement";

function OffersManagement() {
  const { userRole } = useContext(TokenContext);
  const [offersList, setOffersList] = useState([]);

  const getOffers = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/offers`)
      .then((results) => setOffersList(results.data));
  };

  useEffect(() => {
    getOffers();
  }, []);

  return (
    <div>
      {userRole === "admin" ? (
        <div className="fieldManagement">
          <div className="globalContainer">
            <h2>Offres d'emploi</h2>
            {offersList.length ? (
              offersList.map((el) => (
                <OfferCardManagement
                  key={el.id}
                  offer={el}
                  getOffers={getOffers}
                />
              ))
            ) : (
              <div className="globalContainer">
                <h3 className="errorTitle">Pas de résultat</h3>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="globalContainer">
          <h3 className="errorTitle">⛔ Vous n'êtes pas administrateur</h3>
        </div>
      )}
    </div>
  );
}

export default OffersManagement;
