import { useState, useEffect, useContext } from "react";
import axios from "axios";

// Import context
import TokenContext from "../../contexts/TokenContext";
import MessagesErrorContext from "../../contexts/MessagesErrorContext";

// import des composants
import OfferCardManagement from "../../components/OfferCardManagement";
import Error401Unauthorized from "../../components/Error401Unauthorized";

function OffersManagement() {
  const { userRole } = useContext(TokenContext);
  const { messages } = useContext(MessagesErrorContext);

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
        <Error401Unauthorized message={messages.unauthorized} />
      )}
    </div>
  );
}

export default OffersManagement;
