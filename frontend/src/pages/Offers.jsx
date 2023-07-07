import { useEffect, useState } from "react";
import axios from "axios";
// import des composants
import OfferCardList from "../components/OfferCardList";

function Offers() {
  const [offersList, setOffersList] = useState([]);
  const [categoriesList, setCategoriesList] = useState([]);
  const [contractList, setContractList] = useState([]);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isContractOpen, setIsContractOpen] = useState(false);

  const handleSubmit = () => {};

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/offers`)
      .then((results) => setOffersList(results.data));

    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/categories`)
      .then((results) => setCategoriesList(results.data));

    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/contracts-type`)
      .then((results) => setContractList(results.data));
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <div className="containerTextInput">
          <input type="text" className="textInput" placeholder="Mot-clé..." />
        </div>
        <div className="containerTextInput">
          <input
            type="text"
            className="textInput"
            placeholder="Localisation..."
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
              {categoriesList
                ? categoriesList.map((el) => (
                    <div value="" className="selectOption" key={el.id}>
                      <input
                        type="checkbox"
                        className="optionCheckbox"
                        id={el.name}
                        name={el.name}
                      />
                      <label htmlFor={el.name} className="optionLabel">
                        {el.name}
                      </label>
                    </div>
                  ))
                : "Chargement..."}
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
              {contractList
                ? contractList.map((el) => (
                    <div value="" className="selectOption" key={el.id}>
                      <input
                        type="checkbox"
                        className="optionCheckbox"
                        id={el.name}
                        name={el.name}
                      />
                      <label htmlFor={el.name} className="optionLabel">
                        {el.name}
                      </label>
                    </div>
                  ))
                : "Chargement..."}
            </div>
          </div>
        </div>
        <button type="submit" className="button">
          Lancer la recherche
        </button>
      </form>
      {offersList.length
        ? offersList.map((el) => <OfferCardList key={el.id} offer={el} />)
        : "Chargement..."}
    </div>
  );
}

export default Offers;
