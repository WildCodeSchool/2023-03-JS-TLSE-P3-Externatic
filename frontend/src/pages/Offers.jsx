import { useEffect, useState, useContext } from "react";
import axios from "axios";

// Import context
import FiltersContext from "../contexts/FiltersContext";
import TokenContext from "../contexts/TokenContext";

// import des composants
import OfferCardList from "../components/OfferCardList";
import OfferModal from "../components/OfferModal";

function Offers() {
  const [offersList, setOffersList] = useState([]);
  const [keywordInput, setKeywordInput] = useState("");
  const [localizationInput, setLocalizationInput] = useState("");
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isContractOpen, setIsContractOpen] = useState(false);
  // gestion de la modale
  const [modalOfferIsOpen, setModalOfferIsOpen] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState([]);
  const { categoriesList, contractList, getCategories, getContracts } =
    useContext(FiltersContext);
  const { userToken } = useContext(TokenContext);
  // gestion de la mise en favoris
  const [offersFavorited, setOffersFavorited] = useState([]);

  // gestion de la modale
  const handleOpenModalOffer = (offerId) => {
    const findOffer = offersList.find((offer) => offer.id === offerId);
    setSelectedOffer(findOffer);
    setModalOfferIsOpen(true);
  };

  const handleCheck = (el, list) => {
    if (list === "category") {
      for (let i = 0; i < categoriesList.length; i += 1) {
        if (categoriesList[i].id === el.id) {
          if (categoriesList[i].checked) {
            categoriesList[i].checked = false;
          } else {
            categoriesList[i].checked = true;
          }
        }
      }
    } else if (list === "contract") {
      for (let i = 0; i < contractList.length; i += 1) {
        if (contractList[i].id === el.id) {
          if (contractList[i].checked) {
            contractList[i].checked = false;
          } else {
            contractList[i].checked = true;
          }
        }
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/filtered-offers`, {
        keyword: keywordInput,
        localization: localizationInput,
        categories: categoriesList,
        contract: contractList,
      })
      .then((results) => setOffersList(results.data));
  };

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/offers`)
      .then((results) => setOffersList(results.data));

    getCategories();
    getContracts();
  }, []);

  // gestion de la mise en favoris
  const addFavorite = (offer) => {
    const isAlreadyFavorite = offersFavorited.some(
      (favoriteOffer) => favoriteOffer.offer_id === offer.id
    );
    // console.log(`la liste des offres ${offer}`);
    if (!isAlreadyFavorite) {
      const favoriteData = {
        offerId: offer.id,
      };
      axios
        .post(`${import.meta.env.VITE_BACKEND_URL}/favorites`, favoriteData, {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        })
        .then(() => {
          setOffersFavorited([...offersFavorited, offer]);
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      // console.log("offer already favorited");
    }
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

  const removeFavorite = (offer) => {
    const isAlreadyFavorite = offersFavorited.some(
      (favoriteOffer) => favoriteOffer.offer_id === offer.id
    );
    if (isAlreadyFavorite) {
      const favoriteData = {
        offerId: offer.id,
      };
      axios
        .delete(`${import.meta.env.VITE_BACKEND_URL}/favorites`, {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
          data: favoriteData,
        })
        .then(() => {
          setOffersFavorited(
            offersFavorited.filter(
              (favoriteOffer) => favoriteOffer.id !== offer.id
            )
          );
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };
  useEffect(() => {
    addFavorite(selectedOffer);
    favoriesByApplicantId();
    removeFavorite(selectedOffer);
  }, []);
  return (
    <div className="offersPage">
      <OfferModal
        modalOfferIsOpen={modalOfferIsOpen}
        setModalOfferIsOpen={setModalOfferIsOpen}
        offer={selectedOffer}
      />
      <form onSubmit={handleSubmit} className="form formOffersFilters">
        <div className="containerTextInput">
          <input
            type="text"
            className="textInput"
            placeholder="Mot-clé..."
            onChange={(e) => {
              setKeywordInput(e.target.value);
            }}
          />
        </div>
        <div className="containerTextInput">
          <input
            type="text"
            className="textInput"
            placeholder="Localisation..."
            onChange={(e) => {
              setLocalizationInput(e.target.value);
            }}
          />
        </div>
        <div type="button" className="selectContainer">
          <button
            type="button"
            value=""
            className="selectTitle"
            onClick={() => setIsCategoryOpen(!isCategoryOpen)}
          >
            Catégories
          </button>
          <div className={`${!isCategoryOpen ? "hide" : ""}`}>
            <hr className="divider" />

            <div className="selectOptionsContainer">
              {categoriesList.length ? (
                categoriesList.map((el) => (
                  <div value="" className="selectOption" key={el.id}>
                    <input
                      type="checkbox"
                      className="optionCheckbox"
                      id={el.category_name}
                      name={el.category_name}
                      onChange={() => handleCheck(el, "category")}
                    />
                    <label htmlFor={el.category_name} className="optionLabel">
                      {el.category_name}
                    </label>
                  </div>
                ))
              ) : (
                <h3 className="errorTitle">Chargement...</h3>
              )}
            </div>
          </div>
        </div>
        <div type="button" className="selectContainer">
          <button
            type="button"
            className="selectTitle"
            onClick={() => setIsContractOpen(!isContractOpen)}
          >
            Type de contrat
          </button>

          <div className={`${!isContractOpen ? "hide" : ""}`}>
            <hr className="divider" />

            <div className="selectOptionsContainer">
              {contractList.length ? (
                contractList.map((el) => (
                  <div value="" className="selectOption" key={el.id}>
                    <input
                      type="checkbox"
                      className="optionCheckbox"
                      id={el.contract_type_name}
                      name={el.contract_type_name}
                      onChange={() => handleCheck(el, "contract")}
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
                <h3 className="errorTitle">Chargement...</h3>
              )}
            </div>
          </div>
        </div>
        <button type="submit" className="button">
          Lancer la recherche
        </button>
      </form>
      <div className="offersListContainer">
        {offersList.length ? (
          offersList.map((el) => (
            <OfferCardList
              key={el.id}
              offer={el}
              modalOfferIsOpen={modalOfferIsOpen}
              setModalOfferIsOpen={setModalOfferIsOpen}
              onCardClick={handleOpenModalOffer}
              addFavorite={addFavorite}
              removeFavorite={removeFavorite}
              offersFavorited={offersFavorited}
              setOffersFavorited={setOffersFavorited}
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

export default Offers;
