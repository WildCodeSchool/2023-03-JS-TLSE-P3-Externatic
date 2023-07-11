// import axios from "axios";
// import { useEffect, useState } from "react";

// import deleteUser from "../../assets/icons/black_delete_user.svg";

function UsersManagement() {
  // const [allAdmins, setAllAdmins] = useState([]);
  // const [allApplicants, setAllApplicants] = useState([]);
  // const [allCompanies, setAllCompanies] = useState([]);

  // const getAdmins = () => {
  //   axios.get(`${import.meta.env.VITE_BACKEND_URL}/admins`).then((results) => {
  //     setAllAdmins(results.data);
  //   });
  // };

  // const createAdmin = (id) => {};
  // const deleteAdmin = (id) => {
  //   axios
  //     .delete(`${import.meta.env.VITE_BACKEND_URL}/admins/${id}`)
  //     .then(() => {
  //       getAdmins();
  //     });
  // };

  // const getApplicants = () => {
  //   axios
  //     .get(`${import.meta.env.VITE_BACKEND_URL}/applicants`)
  //     .then((results) => {
  //       setAllApplicants(results.data);
  //     });
  // };

  // const createApplicant = (id) => {};
  // const deleteApplicant = (id) => {
  //   axios
  //     .delete(`${import.meta.env.VITE_BACKEND_URL}/applicants/${id}`)
  //     .then(() => {
  //       getApplicants();
  //     });
  // };

  // const getCompanies = () => {
  //   axios
  //     .get(`${import.meta.env.VITE_BACKEND_URL}/companies`)
  //     .then((results) => {
  //       setAllCompanies(results.data);
  //     });
  // };
  // const createCompany = (id) => {};
  // const deleteCompany = (id) => {
  //   axios
  //     .delete(`${import.meta.env.VITE_BACKEND_URL}/companies/${id}`)
  //     .then(() => {
  //       getCompanies();
  //     });
  // };

  // useEffect(() => {
  //   getAdmins();
  //   getApplicants();
  //   getCompanies();
  // }, []);

  // useEffect(() => {
  //   console.log(allAdmins, allApplicants, allCompanies);
  // }, [allAdmins, allApplicants, allCompanies]);

  return (
    <div className="userManagementSection">
      {/* <div className="userManagement">
        <h2>Administrateurs</h2>
        {allAdmins
          ? allAdmins.map((admin) => (
              <div>
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
                      // onClick={() => deleteAdmin(admin.id)}
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
        <button type="button" className="button">
          Ajouter un Administrateur
        </button>
      </div>
      <div className="userManagement">
        <h2>Candidats</h2>
      </div>
      <div className="userManagement">
        <h2>Entreprises</h2>
      </div> */}
    </div>
  );
}

export default UsersManagement;
