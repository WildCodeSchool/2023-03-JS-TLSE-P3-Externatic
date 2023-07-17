// Import des packages
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Import des pages
import Home from "./pages/Home";
import Connexion from "./pages/Connexion";
import Subscribe from "./pages/Subscribe";
import Offers from "./pages/Offers";
import Dashboard from "./pages/Dashboard";

// Import des composants
import MainNavBar from "./components/MainNavBar";

// Import du style
import "./reset.css";
import "./App.css";
import "./css/pages/Offers.css";
import "./css/pages/Connexion.css";
import "./css/pages/MyProfile.css";
import "./css/components/OfferModal.css";
import "./css/pages/UsersManagement.css";
import "./css/components/FormNewUser.css";
import "./css/pages/Subscribe.css";
import "./css/pages/FieldsManagement.css";

// Import des contexts
import { MenuContextProvider } from "./contexts/MenuContext";
import { TokenContextProvider } from "./contexts/TokenContext";
import { ValidationFormContextProvider } from "./contexts/ValidationFormContext";
import { FiltersContextProvider } from "./contexts/FiltersContext";

function App() {
  return (
    <div className="App">
      <FiltersContextProvider>
        <MenuContextProvider>
          <TokenContextProvider>
            <ValidationFormContextProvider>
              <Router>
                <MainNavBar />
                <Routes>
                  <Route path="" element={<Home />} />
                  <Route path="connexion" element={<Connexion />} />
                  <Route path="subscribe" element={<Subscribe />} />
                  <Route path="offers" element={<Offers />} />
                  <Route path="dashboard/*" element={<Dashboard />} />
                </Routes>
              </Router>
            </ValidationFormContextProvider>
          </TokenContextProvider>
        </MenuContextProvider>
      </FiltersContextProvider>
    </div>
  );
}

export default App;
