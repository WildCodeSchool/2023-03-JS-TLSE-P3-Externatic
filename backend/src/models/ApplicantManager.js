const AbstractManager = require("./AbstractManager");

class Applicantmanager extends AbstractManager {
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
        applicant.firstname,
        applicant.lastname,
        applicant.hashedPassword,
        applicant.email,
        applicant.id,
      ]
    );
  }

  // ------------récupérer l'email du candidat------------
  findApplicantByEmail(email) {
    return this.database.query(`select * from ${this.table} WHERE email = ?`, [
      email,
    ]);
  }
}

module.exports = Applicantmanager;
