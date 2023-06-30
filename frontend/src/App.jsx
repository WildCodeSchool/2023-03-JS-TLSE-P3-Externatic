// Import des packages
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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
import { MenuContextProvider } from "./contexts/MenuContext";
import { ConnexionContextProvider } from "./contexts/ConnexionContext";

function App() {
  return (
    <div className="App">
      <MenuContextProvider>
        <ConnexionContextProvider>
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
        </ConnexionContextProvider>
      </MenuContextProvider>
    </div>
  );
}

export default App;
