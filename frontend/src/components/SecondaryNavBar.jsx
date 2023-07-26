import { NavLink } from "react-router-dom";
import { useContext } from "react";

// Import du style
import "../css/components/SecondaryNavBar.css";

// Import des contexts
import TokenContext from "../contexts/TokenContext";

function SecondaryNavBar() {
  const { userRole } = useContext(TokenContext);

  return (
    <nav className="secNav">
      {userRole === "admin" ? (
        <div className="adminSecNav">
          <NavLink
            to="./offers-management"
            className={({ isActive }) => {
              return isActive ? "linkSelected" : "";
            }}
          >
            Gestion des offres
          </NavLink>
          <NavLink
            to="./users-management"
            className={({ isActive }) => {
              return isActive ? "linkSelected" : "";
            }}
          >
            Gestion des utilisateurs
          </NavLink>
          <NavLink
            to="./fields-management"
            className={({ isActive }) => {
              return isActive ? "linkSelected" : "";
            }}
          >
            Gestion des filtres
          </NavLink>
          <NavLink
            to="./my-profile"
            className={({ isActive }) => {
              return isActive ? "linkSelected" : "";
            }}
          >
            Mon profil
          </NavLink>
        </div>
      ) : null}
      {userRole === "company" ? (
        <div className="companySecNav">
          <NavLink
            to="./my-published-offers"
            className={({ isActive }) => {
              return isActive ? "linkSelected" : "";
            }}
          >
            Mes offres
          </NavLink>
          <NavLink
            to="./my-profile"
            className={({ isActive }) => {
              return isActive ? "linkSelected" : "";
            }}
          >
            Mon profil
          </NavLink>
        </div>
      ) : null}
      {userRole === "applicant" ? (
        <div className="applicantSecNav">
          <NavLink
            to="./my-favorite-offers"
            className={({ isActive }) => {
              return isActive ? "linkSelected" : "";
            }}
          >
            Mes offres favorites
          </NavLink>
          <NavLink
            to="./my-profile"
            className={({ isActive }) => {
              return isActive ? "linkSelected" : "";
            }}
          >
            Mon profil
          </NavLink>
        </div>
      ) : null}
    </nav>
  );
}

export default SecondaryNavBar;
