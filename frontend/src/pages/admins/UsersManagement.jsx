import axios from "axios";
import { useEffect, useState, useContext } from "react";

// Import images
import deleteUser from "../../assets/icons/black_delete_user.svg";

// Import context
import TokenContext from "../../contexts/TokenContext";

function UsersManagement() {
  const { userToken, userRole } = useContext(TokenContext);

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
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/admins`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then((results) => {
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
          adminInsertionObject,
          {
            headers: {
              Authorization: `Bearer ${userToken}`,
            },
          }
        )
        .then(() => {
          getAdmins();
          setAdminInsertion(false);
        });
    }
  };
  const deleteAdmin = (id) => {
    axios
      .delete(`${import.meta.env.VITE_BACKEND_URL}/admins/${id}`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then(() => {
        getAdmins();
      });
  };

  const getApplicants = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/applicants`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then((results) => {
        setAllApplicants(results.data);
      });
  };

  const deleteApplicant = (id) => {
    axios
      .delete(`${import.meta.env.VITE_BACKEND_URL}/applicants/${id}`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then(() => {
        getApplicants();
      });
  };

  const getCompanies = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/companies`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then((results) => {
        setAllCompanies(results.data);
      });
  };
  const deleteCompany = (id) => {
    axios
      .delete(`${import.meta.env.VITE_BACKEND_URL}/companies/${id}`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
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
    <div>
      {userRole === "admin" ? (
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
      ) : (
        <div className="globalContainer">
          <h3 className="errorTitle">⛔ Vous n'êtes pas administrateur</h3>
        </div>
      )}
    </div>
  );
}

export default UsersManagement;
