import { useState, useEffect } from "react";
import axios from "axios";

function FieldsManagement() {
  const [categoriesList, setCategoriesList] = useState([]);
  const [contractList, setContractList] = useState([]);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isContractOpen, setIsContractOpen] = useState(false);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/categories`)
      .then((results) => setCategoriesList(results.data));

    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/contracts-type`)
      .then((results) => setContractList(results.data));
  }, []);

  return (
    <div>
      {/* Category types */}
      <div className="globalContainer">
        <button
          type="button"
          className="selectTitle"
          onClick={() => setIsCategoryOpen(!isCategoryOpen)}
        >
          Catégories
        </button>

        <div className={`${!isCategoryOpen ? "hide" : ""}`}>
          <hr className="divider" />

          <div className="selectOptionsContainer">
            {isCategoryOpen ? (
              categoriesList.map((el) => (
                <div value="" className="selectOption" key={el.id}>
                  <input
                    type="checkbox"
                    className="optionCheckbox"
                    id={el.category_name}
                    name={el.category_name}
                  />
                  <label htmlFor={el.category_name} className="optionLabel">
                    {el.category_name}
                  </label>
                </div>
              ))
            ) : (
              <div className="globalContainer">
                <h3 className="errorTitle">Chargement...</h3>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Contract types */}
      <div className="globalContainer">
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
            {contractList ? (
              contractList.map((el) => (
                <div value="" className="selectOption" key={el.id}>
                  <input
                    type="checkbox"
                    className="optionCheckbox"
                    id={el.contract_type_name}
                    name={el.contract_type_name}
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
              <div className="globalContainer">
                <h3 className="errorTitle">Chargement...</h3>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FieldsManagement;
