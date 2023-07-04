// import du style
import "../css/pages/AdminConnexion.css";

// Import des composants
import ConnexionLinks from "../components/ConnexionLinks";
import FormularConnexion from "../components/FormularConnexion";

function AdminConnexion() {
  return (
    <div>
      <ConnexionLinks />
      <div className="container-admin-connexion">
        <FormularConnexion />
      </div>
    </div>
  );
}

export default AdminConnexion;
