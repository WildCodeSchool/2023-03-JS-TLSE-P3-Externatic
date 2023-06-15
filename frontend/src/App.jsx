// Import des packages
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Import des pages
import Home from "./pages/Home";
import Connexion from "./pages/Connexion";
import Subscribe from "./pages/Subscribe";
import Offers from "./pages/Offers";
import AdminConnexion from "./pages/AdminConnexion";

// Import des composants

// Import du style
import "./App.css";
import MySpace from "./pages/MySpace";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="connexion" element={<Connexion />} />
          <Route path="subscribe" element={<Subscribe />} />
          <Route path="offers" element={<Offers />} />
          <Route path="admin-connexion" element={<AdminConnexion />} />
          <Route path="myspace/*" element={<MySpace />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
