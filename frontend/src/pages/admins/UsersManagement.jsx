import axios from "axios";
import { useEffect, useState } from "react";

import deleteUser from "../../assets/icons/black_delete_user.svg";

function UsersManagement() {
  const [allAdmins, setAllAdmins] = useState([]);
  const [allApplicants, setAllApplicants] = useState([]);
  const [allCompanies, setAllCompanies] = useState([]);
  const [adminInsertion, setAdminInsertion] = useState(false);
  const [adminInsertionObject] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const getAdmins = () => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/admins`).then((results) => {
      setAllAdmins(results.data);
    });
  };

  const createAdmin = (e) => {
    e.preventDefault();
    if (
      adminInsertionObject.firstname &&
      adminInsertionObject.lastname &&
      adminInsertionObject.email &&
      adminInsertionObject.password
    ) {
      axios
        .post(
          `${import.meta.env.VITE_BACKEND_URL}/signup/admin`,
          adminInsertionObject
        )
        .then(() => {
          getAdmins();
          setAdminInsertion(false);
        });
    } else {
      alert("Veuillez remplir tous les champs.");
    }
  };
  const deleteAdmin = (id) => {
    axios
      .delete(`${import.meta.env.VITE_BACKEND_URL}/admins/${id}`)
      .then(() => {
        getAdmins();
      });
  };

  const getApplicants = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/applicants`)
      .then((results) => {
        setAllApplicants(results.data);
      });
  };

  const deleteApplicant = (id) => {
    axios
      .delete(`${import.meta.env.VITE_BACKEND_URL}/applicants/${id}`)
      .then(() => {
        getApplicants();
      });
  };

  const getCompanies = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/companies`)
      .then((results) => {
        setAllCompanies(results.data);
      });
  };
  const deleteCompany = (id) => {
    axios
      .delete(`${import.meta.env.VITE_BACKEND_URL}/companies/${id}`)
      .then(() => {
        getCompanies();
      });
  };

  useEffect(() => {
    getAdmins();
    getApplicants();
    getCompanies();
  }, []);

  return (
    <div className="userManagementSection">
      <div className="userManagement">
        <h2>Administrateurs</h2>
        {allAdmins
          ? allAdmins.map((admin) => (
              <div className="userManagementCardContainer">
                <div className="userManagementCard">
                  <div className="userManagementCardRightPart">
                    <p>ID: {admin.id}</p>
                    <p>
                      {admin.firstname} {admin.lastname}
                    </p>
                  </div>
                  <div className="userManagementCardRightPart">
                    <p>Admin</p>
                    <button
                      type="button"
                      className="deleteUserButton"
                      onClick={() => deleteAdmin(admin.id)}
                    >
                      <img
                        src={deleteUser}
                        alt="Icône de suppression de l'utilisateur"
                      />
                    </button>
                  </div>
                </div>
                <hr />
              </div>
            ))
          : null}
        <button
          type="button"
          className="button"
          onClick={() => setAdminInsertion(!adminInsertion)}
        >
          Ajouter un Administrateur
        </button>
        {adminInsertion ? (
          <form onSubmit={createAdmin} className="form">
            <h3>Nouvel administrateur</h3>
            <div className="containerTextInput">
              <input
                type="text"
                name="firstname"
                placeholder="Prénom"
                className="textInput"
                onChange={(e) => {
                  adminInsertionObject.firstname = e.target.value;
                }}
                required
              />
            </div>
            <div className="containerTextInput">
              <input
                type="text"
                name="lastname"
                placeholder="Nom"
                className="textInput"
                onChange={(e) => {
                  adminInsertionObject.lastname = e.target.value;
                }}
                required
              />
            </div>

            <div className="containerTextInput">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="textInput"
                onChange={(e) => {
                  adminInsertionObject.email = e.target.value;
                }}
                required
              />
            </div>

            <div className="containerTextInput">
              <input
                type="password"
                name="password"
                placeholder="Mot de passe"
                className="textInput"
                onChange={(e) => {
                  adminInsertionObject.password = e.target.value;
                }}
                required
              />
            </div>
            <button type="submit" className="button">
              Ajouter l'administrateur
            </button>
          </form>
        ) : null}
      </div>
      <div className="userManagement">
        <h2>Candidats</h2>
        {allApplicants
          ? allApplicants.map((applicant) => (
              <div className="userManagementCardContainer">
                <div className="userManagementCard">
                  <div className="userManagementCardRightPart">
                    <p>ID: {applicant.id}</p>
                    <p>
                      {applicant.firstname} {applicant.lastname}
                    </p>
                  </div>
                  <div className="userManagementCardRightPart">
                    <p>Candidat</p>
                    <button
                      type="button"
                      className="deleteUserButton"
                      onClick={() => deleteApplicant(applicant.id)}
                    >
                      <img
                        src={deleteUser}
                        alt="Icône de suppression de l'utilisateur"
                      />
                    </button>
                  </div>
                </div>
                <hr />
              </div>
            ))
          : null}
      </div>
      <div className="userManagement">
        <h2>Entreprises</h2>
        {allCompanies
          ? allCompanies.map((company) => (
              <div className="userManagementCardContainer">
                <div className="userManagementCard">
                  <div className="userManagementCardRightPart">
                    <p>ID: {company.id}</p>
                    <p>
                      {company.name} | SIRET: {company.siret}
                    </p>
                  </div>
                  <div className="userManagementCardRightPart">
                    <p>Entreprise</p>
                    <button
                      type="button"
                      className="deleteUserButton"
                      onClick={() => deleteCompany(company.id)}
                    >
                      <img
                        src={deleteUser}
                        alt="Icône de suppression de l'utilisateur"
                      />
                    </button>
                  </div>
                </div>
                <hr />
              </div>
            ))
          : null}
      </div>
    </div>
  );
}

export default UsersManagement;
