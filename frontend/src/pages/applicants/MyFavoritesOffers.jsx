import { useContext, useEffect } from "react";

// Import des contexts
import MenuContext from "../../contexts/MenuContext";

function MyFavoritesOffers() {
  const { setIsMenuShow } = useContext(MenuContext);

  useEffect(() => {
    setIsMenuShow(false);
  }, []);
  return <p>MyFavoritesOffers</p>;
}

export default MyFavoritesOffers;
