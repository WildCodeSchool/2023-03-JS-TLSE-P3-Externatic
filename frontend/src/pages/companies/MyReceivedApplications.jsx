import { useContext, useEffect } from "react";

// Import des contexts
import MenuContext from "../../contexts/MenuContext";

function MyReceivedApplications() {
  const { setIsMenuShow } = useContext(MenuContext);

  useEffect(() => {
    setIsMenuShow(false);
  }, []);
  return <p>MyReceivedApplications</p>;
}

export default MyReceivedApplications;
