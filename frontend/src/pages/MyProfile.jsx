import { useContext, useEffect } from "react";

// Import des contexts
import MenuContext from "../contexts/MenuContext";

function MyProfile() {
  const { setIsMenuShow } = useContext(MenuContext);

  useEffect(() => {
    setIsMenuShow(false);
  }, []);
  return <p>MyProfile</p>;
}

export default MyProfile;
