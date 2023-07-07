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
            Mes offres publiées
          </NavLink>
          <NavLink
            to="./my-received-applications"
            className={({ isActive }) => {
              return isActive ? "linkSelected" : "";
            }}
          >
            Candidatures reçues
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
            to="./my-applications"
            className={({ isActive }) => {
              return isActive ? "linkSelected" : "";
            }}
          >
            Mes candidatures
          </NavLink>
          <NavLink
            to="./my-favorite-offers"
            className={({ isActive }) => {
              return isActive ? "linkSelected" : "";
            }}
          >
            Mes offres favorites
          </NavLink>
          <NavLink
            to="./my-searches"
            className={({ isActive }) => {
              return isActive ? "linkSelected" : "";
            }}
          >
            Mes recherches
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
