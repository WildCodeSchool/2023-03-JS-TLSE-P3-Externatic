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
import "./css/components/CustomStyleSwal.css";
import "./css/pages/MyPublishedOffers.css";
import "./css/components/MainNavBar.css";
import "./css/components/OfferCardCarousel.css";

// Import des contexts
import { MenuContextProvider } from "./contexts/MenuContext";
import { TokenContextProvider } from "./contexts/TokenContext";
import { FiltersContextProvider } from "./contexts/FiltersContext";
import { ModificationProfileContextProvider } from "./contexts/ModificationProfileContext";

function App() {
  return (
    <div className="App">
      <FiltersContextProvider>
        <MenuContextProvider>
          <TokenContextProvider>
            <ModificationProfileContextProvider>
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
            </ModificationProfileContextProvider>
          </TokenContextProvider>
        </MenuContextProvider>
      </FiltersContextProvider>
    </div>
  );
}

export default App;
