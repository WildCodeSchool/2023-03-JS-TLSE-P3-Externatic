import { useContext, useEffect } from "react";

// Import des contexts
import MenuContext from "../contexts/MenuContext";

function Connexion() {
  const { setIsMenuShow } = useContext(MenuContext);

  useEffect(() => {
    setIsMenuShow(false);
  }, []);
  return (
    <div>
      <h1>Connexion</h1>
    </div>
  );
}
export default Connexion;
