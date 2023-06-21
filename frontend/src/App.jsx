// Import des packages
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useContext } from "react";

// Import des pages
import Home from "./pages/Home";
import Connexion from "./pages/Connexion";
import Subscribe from "./pages/Subscribe";
import Offers from "./pages/Offers";
import AdminConnexion from "./pages/AdminConnexion";
import Dashboard from "./pages/Dashboard";

// Import des composants
import MainNavBar from "./components/MainNavBar";

// Import du style
import "./reset.css";
import "./App.css";

// Import des contexts
import MenuContext from "./contexts/MenuContext";

function App() {
  const { setIsMenuShow } = useContext(MenuContext);

  useEffect(() => {
    setIsMenuShow(false);
  }, []);

  return (
    <div className="App">
      <Router>
        <MainNavBar />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="connexion" element={<Connexion />} />
          <Route path="subscribe" element={<Subscribe />} />
          <Route path="offers" element={<Offers />} />
          <Route path="admin-connexion" element={<AdminConnexion />} />
          <Route path="dashboard/*" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
