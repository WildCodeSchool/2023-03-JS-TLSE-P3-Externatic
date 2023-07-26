import { createContext, useState, useMemo } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import Swal from "sweetalert2";

const FiltersContext = createContext();

export default FiltersContext;

export function FiltersContextProvider({ children }) {
  const [categoriesList, setCategoriesList] = useState([]);
  const [contractList, setContractList] = useState([]);
  const getCategories = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/categories`)
      .then((results) => setCategoriesList(results.data))
      .catch((err) => {
        console.error(err);
        Swal.fire({
          icon: "error",
          text: err.response.data.error,
          width: 300,
          buttonsStyling: false,
          iconColor: "#ca2061cc",
          customClass: {
            confirmButton: "button",
          },
        });
      });
  };

  const getContracts = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/contracts-type`)
      .then((results) => setContractList(results.data))
      .catch((err) => {
        console.error(err);
        Swal.fire({
          icon: "error",
          text: err.response.data.error,
          width: 300,
          buttonsStyling: false,
          iconColor: "#ca2061cc",
          customClass: {
            confirmButton: "button",
          },
        });
      });
  };
  const FiltersContextValue = useMemo(() => {
    return {
      categoriesList,
      setCategoriesList,
      contractList,
      setContractList,
      getCategories,
      getContracts,
    };
  });
  return (
    <FiltersContext.Provider value={FiltersContextValue}>
      {children}
    </FiltersContext.Provider>
  );
}

FiltersContextProvider.propTypes = {
  children: PropTypes.shape({}).isRequired,
};
