import { useContext, useEffect } from "react";

// Import des contexts
import MenuContext from "../contexts/MenuContext";

function Subscribe() {
  const { setIsMenuShow } = useContext(MenuContext);

  useEffect(() => {
    setIsMenuShow(false);
  }, []);
  return <p>Subscribe</p>;
}

export default Subscribe;
