import { useState, useEffect, useContext } from "react";
import axios from "axios";

// Import context
import TokenContext from "../../contexts/TokenContext";
import FiltersContext from "../../contexts/FiltersContext";

// import des composants
import OfferCardManagement from "../../components/OfferCardManagement";

function MyPublishedOffers() {
  const { userToken, userRole } = useContext(TokenContext);
  const { categoriesList, contractList, getCategories, getContracts } =
    useContext(FiltersContext);
  const [offersList, setOffersList] = useState([]);
  const [offerInsertion, setOfferInsertion] = useState(false);
  const [offerInsertionObject] = useState({
    title: "",
    contractType: null,
    category: null,
    city: "",
    missions: "",
    technical: "",
    advantages: "",
  });

  const getOffers = () => {
    if (userRole === "company") {
      axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/company-offers`, {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        })
        .then((results) => setOffersList(results.data));
    }
  };

  const createOffer = (e) => {
    e.preventDefault();
    if (
      offerInsertionObject.title &&
      offerInsertionObject.contractType &&
      offerInsertionObject.category &&
      offerInsertionObject.city &&
      offerInsertionObject.missions &&
      offerInsertionObject.technical &&
      offerInsertionObject.advantages
    ) {
      axios
        .post(
          `${import.meta.env.VITE_BACKEND_URL}/create-offer`,
          offerInsertionObject,
          {
            headers: {
              Authorization: `Bearer ${userToken}`,
            },
          }
        )
        .then(() => {
          getOffers();
          setOfferInsertion(false);
        });
    }
  };

  useEffect(() => {
    getContracts();
    getCategories();
    getOffers();
  }, []);

  return (
    <div>
      {userRole === "company" ? (
        <div className="fieldManagement">
          <div className="globalContainer">
            <h2>Offres d'emploi postées</h2>
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
            <button
              type="button"
              className="button"
              onClick={() => setOfferInsertion(!offerInsertion)}
            >
              Créer une offre
            </button>
            {offerInsertion ? (
              <form onSubmit={(e) => createOffer(e)} className="form">
                <h3>Nouvelle offre</h3>
                <div className="containerTextInput">
                  <input
                    type="text"
                    name="offerTitle"
                    placeholder="Titre de l'offre"
                    className="textInput"
                    onChange={(e) => {
                      offerInsertionObject.title = e.target.value;
                    }}
                    required
                  />
                </div>
                <div className="containerTextInput">
                  <input
                    type="text"
                    name="city"
                    placeholder="Ville"
                    className="textInput"
                    onChange={(e) => {
                      offerInsertionObject.city = e.target.value;
                    }}
                    required
                  />
                </div>
                <h3>Type de contrat</h3>
                <div className="radioDiv">
                  {contractList.length ? (
                    contractList.map((el) => (
                      <div className="radioContainer">
                        <input
                          type="radio"
                          name="contract_type"
                          className="optionCheckbox"
                          id={el.contract_type_name}
                          value={el.id}
                          onChange={(e) => {
                            offerInsertionObject.contractType = e.target.value;
                          }}
                          required
                        />
                        <label
                          htmlFor={el.contract_type_name}
                          className="optionLabel"
                        >
                          {el.contract_type_name}
                        </label>
                      </div>
                    ))
                  ) : (
                    <h3 className="errorTitle">
                      Aucun type de contrat répertorié. Contactez
                      l'administrateur.
                    </h3>
                  )}
                </div>
                <h3>Catégories</h3>
                <div className="radioDiv">
                  {categoriesList.length ? (
                    categoriesList.map((el) => (
                      <div className="radioContainer">
                        <input
                          type="radio"
                          name="category"
                          className="optionCheckbox"
                          id={el.category_name}
                          value={el.id}
                          onChange={(e) => {
                            offerInsertionObject.category = e.target.value;
                          }}
                          required
                        />
                        <label
                          htmlFor={el.category_name}
                          className="optionLabel"
                        >
                          {el.category_name}
                        </label>
                      </div>
                    ))
                  ) : (
                    <h3 className="errorTitle">
                      Aucun type de contrat répertorié. Contactez
                      l'administrateur.
                    </h3>
                  )}
                </div>
                <textarea
                  name="missions"
                  className="textAreaInput"
                  placeholder="Les missions du poste..."
                  onChange={(e) => {
                    offerInsertionObject.missions = e.target.value;
                  }}
                  required
                />
                <textarea
                  name="technical"
                  className="textAreaInput"
                  placeholder="L'environnement technique..."
                  onChange={(e) => {
                    offerInsertionObject.technical = e.target.value;
                  }}
                  required
                />
                <textarea
                  name="advantages"
                  className="textAreaInput"
                  placeholder="Les avantages..."
                  onChange={(e) => {
                    offerInsertionObject.advantages = e.target.value;
                  }}
                  required
                />
                <button type="submit" className="button">
                  Créer l'annonce
                </button>
              </form>
            ) : null}
          </div>
        </div>
      ) : (
        <div className="globalContainer">
          <h3 className="errorTitle">
            ⛔ Vous devez être connecté avec un compte entreprise
          </h3>
        </div>
      )}
    </div>
  );
}

export default MyPublishedOffers;
