// Import des packages
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import axios from "axios";

// Import des pages
import Home from "./pages/Home";
import Connexion from "./pages/Connexion";
import Subscribe from "./pages/Subscribe";
import Offers from "./pages/Offers";
import Dashboard from "./pages/Dashboard";

// Import des composants
import MainNavBar from "./components/MainNavBar";
import Footer from "./components/Footer";

// Import du style
import "./reset.css";
import "./App.css";

// Import des contexts
import { MenuContextProvider } from "./contexts/MenuContext";
import { TokenContextProvider } from "./contexts/TokenContext";

function App() {
  return (
    <div className="App">
      <MenuContextProvider>
        <TokenContextProvider>
          <Router>
            <MainNavBar />
            <Routes>
              <Route path="" element={<Home />} />
              <Route path="connexion" element={<Connexion />} />
              <Route path="subscribe" element={<Subscribe />} />
              <Route path="offers" element={<Offers />} />
              <Route path="dashboard/*" element={<Dashboard />} />
            </Routes>
            <Footer />
          </Router>
        </TokenContextProvider>
      </MenuContextProvider>
    </div>
  );
}

export default App;
