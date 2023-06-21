import { useContext, useEffect } from "react";

// Import des contexts
import MenuContext from "../contexts/MenuContext";

function Home() {
  const { setIsMenuShow } = useContext(MenuContext);

  useEffect(() => {
    setIsMenuShow(false);
  }, []);
  return (
    <header className="App-header">
      <p>Home</p>
    </header>
  );
}

export default Home;
