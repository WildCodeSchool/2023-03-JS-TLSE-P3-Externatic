import { useContext, useEffect } from "react";

// Import des contexts
import MenuContext from "../../contexts/MenuContext";

function OffersManagement() {
  const { setIsMenuShow } = useContext(MenuContext);

  useEffect(() => {
    setIsMenuShow(false);
  }, []);
  return <p>OffersManagement</p>;
}

export default OffersManagement;
