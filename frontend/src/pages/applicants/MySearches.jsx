import { useContext, useEffect } from "react";

// Import des contexts
import MenuContext from "../../contexts/MenuContext";

function MySearches() {
  const { setIsMenuShow } = useContext(MenuContext);

  useEffect(() => {
    setIsMenuShow(false);
  }, []);
  return <p>MySearches</p>;
}

export default MySearches;
