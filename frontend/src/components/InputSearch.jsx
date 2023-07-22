// Import des packages
import { useEffect, useState } from "react";
import axios from "axios";

function InputSearch() {
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  // const [hasResults, setHasResults] = useState(false);
  const handleSearchInputChange = (event) => {
    const { value } = event.target;
    setSearchValue(value);
  };

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/offers`
        );
        const filteredResults = response.data.filter((offer) =>
          offer.title.toLowerCase().includes(searchValue.toLowerCase())
        );
        // console.log(filteredResults);
        setSearchSuggestions(filteredResults);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSearchResults();
  }, [searchValue]);
  return (
    <div className="inputContainer">
      <span className="inputMessage">Quel poste recherchez vous ?</span>
      <div className="searchInputContainer">
        <input
          className="textInput searchBar"
          type="text"
          placeholder="Web développeur, data analyst ..."
          value={searchValue}
          onChange={handleSearchInputChange}
        />
      </div>
      <div className="resultsSearch show">
        {searchValue && searchSuggestions.length > 0 && (
          <ul className="searchSuggestions">
            {searchSuggestions.map((suggestion) => (
              <li key={suggestion.id}>{suggestion.title}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default InputSearch;
