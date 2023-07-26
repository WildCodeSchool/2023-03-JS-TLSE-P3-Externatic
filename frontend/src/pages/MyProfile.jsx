import React, { useContext } from "react";

// Import des composants
import AdminForm from "../components/AdminForm";
import CompanyForm from "../components/CompanyForm";
import ApplicantForm from "../components/ApplicantForm";

// Import context
import TokenContext from "../contexts/TokenContext";

function MyProfile() {
  const { userRole } = useContext(TokenContext);

  return (
    <div className="myProfileSection">
      {userRole === "admin" ? <AdminForm /> : null}
      {userRole === "company" ? <CompanyForm /> : null}
      {userRole === "applicant" ? <ApplicantForm /> : null}
    </div>
  );
}

export default MyProfile;
