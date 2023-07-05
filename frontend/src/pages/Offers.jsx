import { useEffect } from "react";
import axios from "axios";

function Offers() {
  // const [offersList, setOffersList] = useState([]);
  const handleSubmit = () => {};

  useEffect(() => {
    axios.get("");
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
        <select className="select">
          <option value="" className="option">
            Catégories
          </option>
          <option value="" className="option">
            Test
          </option>
          <option value="" className="option">
            Test
          </option>
        </select>
        <select className="select">
          <option value="" className="option">
            Type de contrat
          </option>
          <option value="" className="option">
            Test
          </option>
          <option value="" className="option">
            Test
          </option>
        </select>
        <button type="submit" className="button">
          Lancer la recherche
        </button>
      </form>
    </div>
  );
}

export default Offers;
