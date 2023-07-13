import { useState, useEffect, useContext } from "react";
import axios from "axios";

// Import context
import TokenContext from "../../contexts/TokenContext";
import FiltersContext from "../../contexts/FiltersContext";

// Import images
import trash from "../../assets/icons/black_trash.svg";

function FieldsManagement() {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isNewCategoryOpen, setIsNewCategoryOpen] = useState(false);
  const [newCategoryContent, setNewCategoryContent] = useState("");
  const [isContractOpen, setIsContractOpen] = useState(false);
  const [isNewContractOpen, setIsNewContractOpen] = useState(false);
  const [newContractContent, setNewConctractContent] = useState("");

  const { userToken } = useContext(TokenContext);
  const { categoriesList, contractList, getCategories, getContracts } =
    useContext(FiltersContext);

  const handleDeleteCategory = (id) => {
    axios
      .delete(`${import.meta.env.VITE_BACKEND_URL}/categories/${id}`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then(() => {
        getCategories();
      });
  };

  const handleAddCategory = (e) => {
    e.preventDefault();

    axios
      .post(
        `${import.meta.env.VITE_BACKEND_URL}/categories`,
        { categoryName: newCategoryContent },
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      )
      .then(() => {
        getCategories();
        setIsNewCategoryOpen(false);
      });
  };

  const handleDeleteContract = (id) => {
    axios
      .delete(`${import.meta.env.VITE_BACKEND_URL}/contracts-type/${id}`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then(() => {
        getContracts();
      });
  };

  const handleAddContract = (e) => {
    e.preventDefault();

    axios
      .post(
        `${import.meta.env.VITE_BACKEND_URL}/contracts-type`,
        { contractTypeName: newContractContent },
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      )
      .then(() => {
        getContracts();
        setIsNewContractOpen(false);
      });
  };

  useEffect(() => {
    getCategories();
    getContracts();
  }, []);

  return (
    <div className="fieldManagement">
      {/* Category types */}
      <div className="globalContainer">
        <button
          type="button"
          className="selectTitle fieldSelectTitle"
          onClick={() => setIsCategoryOpen(!isCategoryOpen)}
        >
          Catégories
        </button>

        <div className={`${!isCategoryOpen ? "hide" : ""}`}>
          <hr className="divider" />

          <div className="selectOptionsContainer">
            {isCategoryOpen ? (
              categoriesList.map((el) => (
                <div className="fieldManagementCardContainer" key={el.id}>
                  <div className="fieldManagementCard">
                    <div className="fieldManagementCardRightPart">
                      <p>ID: {el.id}</p>
                      <p>{el.category_name}</p>
                    </div>
                    <div className="fieldManagementCardRightPart">
                      <button
                        type="button"
                        className="deleteFieldButton"
                        onClick={() => {
                          handleDeleteCategory(el.id);
                        }}
                      >
                        <img
                          src={trash}
                          alt="Icône de suppression de la catégorie"
                        />
                      </button>
                    </div>
                  </div>
                  <hr />
                </div>
              ))
            ) : (
              <div className="globalContainer">
                <h3 className="errorTitle">Chargement...</h3>
              </div>
            )}
            {isNewCategoryOpen ? (
              <div className="fieldManagementCardContainer">
                <form
                  className="fieldManagementCard"
                  onSubmit={(e) => handleAddCategory(e)}
                >
                  <input
                    type="text"
                    placeholder="Nom de la catégorie"
                    className="textInput"
                    onChange={(e) => {
                      setNewCategoryContent(e.target.value);
                    }}
                  />
                  <button type="submit" className="button">
                    Ajouter la catégorie
                  </button>
                </form>
                <hr />
              </div>
            ) : null}
            <button
              type="button"
              className="button"
              onClick={() => {
                setIsNewCategoryOpen(!isNewCategoryOpen);
              }}
            >
              Nouvelle catégorie
            </button>
          </div>
        </div>
      </div>
      {/* Contract types */}
      <div className="globalContainer">
        <button
          type="button"
          className="selectTitle fieldSelectTitle"
          onClick={() => setIsContractOpen(!isContractOpen)}
        >
          Types de contrat
        </button>

        <div className={`${!isContractOpen ? "hide" : ""}`}>
          <hr className="divider" />

          <div className="selectOptionsContainer">
            {isContractOpen ? (
              contractList.map((el) => (
                <div className="fieldManagementCardContainer" key={el.id}>
                  <div className="fieldManagementCard">
                    <div className="fieldManagementCardRightPart">
                      <p>ID: {el.id}</p>
                      <p>{el.contract_type_name}</p>
                    </div>
                    <div className="fieldManagementCardRightPart">
                      <button
                        type="button"
                        className="deleteFieldButton"
                        onClick={() => {
                          handleDeleteContract(el.id);
                        }}
                      >
                        <img
                          src={trash}
                          alt="Icône de suppression du type de contrat"
                        />
                      </button>
                    </div>
                  </div>
                  <hr />
                </div>
              ))
            ) : (
              <div className="globalContainer">
                <h3 className="errorTitle">Chargement...</h3>
              </div>
            )}
            {isNewContractOpen ? (
              <div className="fieldManagementCardContainer">
                <form
                  className="fieldManagementCard"
                  onSubmit={(e) => handleAddContract(e)}
                >
                  <input
                    type="text"
                    placeholder="Nom du type de contrat"
                    className="textInput"
                    onChange={(e) => {
                      setNewConctractContent(e.target.value);
                    }}
                  />
                  <button type="submit" className="button">
                    Ajouter le type de contrat
                  </button>
                </form>
                <hr />
              </div>
            ) : null}
            <button
              type="button"
              className="button"
              onClick={() => {
                setIsNewContractOpen(!isNewContractOpen);
              }}
            >
              Nouveau type de contrat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FieldsManagement;
