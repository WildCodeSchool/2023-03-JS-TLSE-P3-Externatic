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

// Import des contexts
import { MenuContextProvider } from "./contexts/MenuContext";
import { TokenContextProvider } from "./contexts/TokenContext";
import { ValidationFormContextProvider } from "./contexts/ValidationFormContext";

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
