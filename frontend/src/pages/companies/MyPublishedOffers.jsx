import { useContext, useEffect } from "react";

// Import des contexts
import MenuContext from "../../contexts/MenuContext";

function MyPublishedOffers() {
  const { setIsMenuShow } = useContext(MenuContext);

  useEffect(() => {
    setIsMenuShow(false);
  }, []);
  return <p>MyPublishedOffers</p>;
}

export default MyPublishedOffers;
