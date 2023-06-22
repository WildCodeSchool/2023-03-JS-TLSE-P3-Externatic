import { NavLink } from "react-router-dom";

// Import du style
import "../css/components/SecondaryNavBar.css";

function SecondaryNavBar() {
  return (
    <nav className="secNav">
      <NavLink
        to="./offers-management"
        className={({ isActive }) => {
          return isActive ? "linkSelected" : "";
        }}
      >
        Les offres
      </NavLink>
      <NavLink
        to="./users-management"
        className={({ isActive }) => {
          return isActive ? "linkSelected" : "";
        }}
      >
        Les utilisateurs
      </NavLink>
      <NavLink
        to="./reports-management"
        className={({ isActive }) => {
          return isActive ? "linkSelected" : "";
        }}
      >
        Signalements
      </NavLink>
      <NavLink
        to="./my-profile"
        className={({ isActive }) => {
          return isActive ? "linkSelected" : "";
        }}
      >
        Mon profil
      </NavLink>
    </nav>
  );
}

export default SecondaryNavBar;
