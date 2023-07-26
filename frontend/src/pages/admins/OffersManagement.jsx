import { useState, useEffect, useContext } from "react";
import axios from "axios";
import Swal from "sweetalert2";

// Import context
import TokenContext from "../../contexts/TokenContext";
import MessagesErrorContext from "../../contexts/MessagesErrorContext";

// import des composants
import OfferCardManagement from "../../components/OfferCardManagement";
import Error401Unauthorized from "../../components/Error401Unauthorized";
import ErrorNoData from "../../components/ErrorNoData";

function OffersManagement() {
  const { userRole } = useContext(TokenContext);
  const { messages } = useContext(MessagesErrorContext);

  const [offersList, setOffersList] = useState([]);

  const getOffers = () => {
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
              <ErrorNoData message={messages.result} />
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
