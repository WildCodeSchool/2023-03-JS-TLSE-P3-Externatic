const AbstractManager = require("./AbstractManager");

class ApplicantManager extends AbstractManager {
  constructor() {
    super({ table: "applicant" });
  }

  // ------------Création du candidat - Route POST------------
  createApplicant(applicant) {
    const {
      titleName,
      firstname,
      lastname,
      email,
      hashedPassword,
      message,
      city,
      phone,
    } = applicant;
    return this.database.query(
      `insert into ${this.table} (title_name, firstname, lastname, email, hashed_password, message, city, phone) values (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        titleName,
        firstname,
        lastname,
        email,
        hashedPassword,
        message,
        city,
        phone,
      ]
    );
  }

  // ------------modification du candidat - Route PUT------------

  updateApplicant(applicant) {
    const {
      titleName,
      firstname,
      lastname,
      email,
      hashedPassword,
      message,
      city,
      phone,
      id,
    } = applicant;
    return this.database.query(
      `update ${this.table} set title_name = ?, firstname = ?, lastname = ?, email = ?, hashed_password = ?, message = ?, city = ?, phone = ? where id = ?`,
      [
        titleName,
        firstname,
        lastname,
        email,
        hashedPassword,
        message,
        city,
        phone,
        id,
      ]
    );
  }
}

module.exports = ApplicantManager;
