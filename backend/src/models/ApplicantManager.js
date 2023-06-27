const AbstractManager = require("./AbstractManager");

class ApplicantManager extends AbstractManager {
  constructor() {
    super({ table: "applicant" });
  }

  // ------------Création du candidat - Route POST------------
  createApplicant(applicant) {
    return this.database.query(
      `insert into ${this.table} set title_name = ?, firstname = ?, lastname = ?, email = ?, hashed_password = ?, message = ?, city = ?, phone = ?`,
      [
        applicant.titleName,
        applicant.firstname,
        applicant.lastname,
        applicant.email,
        applicant.hashedPassword,
        applicant.message,
        applicant.city,
        applicant.phone,
      ]
    );
  }

  // ------------modification du candidat - Route PUT------------

  updateApplicant(applicant) {
    return this.database.query(
      `update ${this.table} set title_name = ?, firstname = ?, lastname = ?, email = ?, hashed_password = ?, message = ?, city = ?, phone = ? where id = ?`,
      [
        applicant.titleName,
        applicant.firstname,
        applicant.lastname,
        applicant.email,
        applicant.hashedPassword,
        applicant.message,
        applicant.city,
        applicant.phone,
        applicant.id,
      ]
    );
  }
}

module.exports = ApplicantManager;
