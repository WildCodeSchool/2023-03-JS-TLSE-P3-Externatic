import { useContext, useEffect } from "react";

// Import des contexts
import MenuContext from "../contexts/MenuContext";

function AdminConnexion() {
  const { setIsMenuShow } = useContext(MenuContext);

  useEffect(() => {
    setIsMenuShow(false);
  }, []);
  return <p>AdminConnexion</p>;
}

export default AdminConnexion;
