// Reset CSS
import "./reset.css";

// Import des packages
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Import des pages
import Home from "./pages/Home";
import Connexion from "./pages/Connexion";
import Subscribe from "./pages/Subscribe";
import Offers from "./pages/Offers";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

// Import des composants
import MainNavBar from "./components/MainNavBar";
import Footer from "./components/Footer";

// Import du style
import "./App.css";
import "./css/pages/Offers.css";
import "./css/pages/Connexion.css";
import "./css/pages/MyProfile.css";
import "./css/components/OfferModal.css";
import "./css/pages/UsersManagement.css";
import "./css/components/FormNewUser.css";
import "./css/pages/Subscribe.css";
import "./css/pages/FieldsManagement.css";
import "./css/pages/MyPublishedOffers.css";
import "./css/components/MainNavBar.css";
import "./css/components/OfferCardCarousel.css";
import "./css/pages/Home.css";
import "./css/components/Error.css";

// Import des contexts
import { MenuContextProvider } from "./contexts/MenuContext";
import { TokenContextProvider } from "./contexts/TokenContext";
import { FiltersContextProvider } from "./contexts/FiltersContext";
import { ModificationProfileContextProvider } from "./contexts/ModificationProfileContext";
import { MessagesErrorContextProvider } from "./contexts/MessagesErrorContext";

function App() {
  return (
    <div className="App">
      <MessagesErrorContextProvider>
        <FiltersContextProvider>
          <MenuContextProvider>
            <TokenContextProvider>
              <ModificationProfileContextProvider>
                <Router>
                  <MainNavBar />
                  <main>
                    <Routes>
                      <Route path="" element={<Home />} />
                      <Route path="connexion" element={<Connexion />} />
                      <Route path="subscribe" element={<Subscribe />} />
                      <Route path="offers" element={<Offers />} />
                      <Route path="dashboard/*" element={<Dashboard />} />
                      <Route path="*" element={<NotFound />} />
                    </Routes>
                  </main>
                  <Footer />
                </Router>
              </ModificationProfileContextProvider>
            </TokenContextProvider>
          </MenuContextProvider>
        </FiltersContextProvider>
      </MessagesErrorContextProvider>
    </div>
  );
}

export default App;
