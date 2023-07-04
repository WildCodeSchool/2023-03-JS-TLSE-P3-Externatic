const argon2 = require("argon2");
const jwt = require("jsonwebtoken");

const models = require("../models");

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 2 ** 16,
  timeCost: 5,
  parallelism: 1,
};

// ------------vérification de l'email avant l'inscription------------
const verifyEmailForSubscription = (req, res, next) => {
  const { email } = req.body;

  models.admin
    .findUserByEmail(email)
    .then(([admins]) => {
      if (admins.length) {
        res.sendStatus(403);
      } else {
        models.applicant.findUserByEmail(email).then(([applicants]) => {
          if (applicants.length) {
            res.sendStatus(403);
          } else {
            models.company.findUserByEmail(email).then(([companies]) => {
              if (companies.length) {
                res.sendStatus(403);
              } else {
                next();
              }
            });
          }
        });
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};

// ------------hachage du mot de passe à l'inscription------------
const hashPassword = (req, res, next) => {
  argon2
    .hash(req.body.password, hashingOptions)
    .then((hashedPassword) => {
      req.body.hashedPassword = hashedPassword;
      delete req.body.password;
      next();
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

// ------------vérification du mot de passe de l'admin à la connexion------------
const verifyPasswordForAdmin = (req, res) => {
  argon2.verify(req.admin.hashed_password, req.body.password).then((valid) => {
    if (valid) {
      const payload = {
        sub: req.admin.id,
      };
      const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
      delete req.admin.hashed_password;
      res.send({ token, admin: req.admin }).status(200);
    } else {
      res.sendStatus(401);
    }
  });
};
// ------------vérification du mot de passe du candidat à la connexion------------
const verifyPasswordForApplicant = (req, res) => {
  argon2
    .verify(req.applicant.hashed_password, req.body.password)
    .then((valid) => {
      if (valid) {
        const payload = {
          sub: req.applicant.id,
        };
        const token = jwt.sign(payload, process.env.JWT_SECRET, {
          expiresIn: "1h",
        });
        delete req.applicant.hashed_password;
        res.send({ token, applicant: req.applicant }).status(200);
      } else {
        res.sendStatus(401);
      }
    });
};
// ------------vérification du mot de passe de l'entreprise à la connexion------------
const verifyPasswordForCompany = (req, res) => {
  argon2
    .verify(req.company.hashed_password, req.body.password)
    .then((valid) => {
      if (valid) {
        const payload = {
          sub: req.company.id,
        };
        const token = jwt.sign(payload, process.env.JWT_SECRET, {
          expiresIn: "1h",
        });
        delete req.company.hashed_password;
        res.send({ token, company: req.company }).status(200);
      } else {
        res.sendStatus(401);
      }
    });
};

// const verifyPassword = (req, res) => {
//   argon2
//     .verify(req.admin.hashed_password, req.body.password)
//     .then((adminPasswordIsValid) => {
//       if (adminPasswordIsValid) {
//         const payload = {
//           sub: req.admin.id,
//         };
//         const token = jwt.sign(payload, process.env.JWT_SECRET, {
//           expiresIn: "1h",
//         });
//         delete req.admin.hashed_password;
//         res.send({ token, admin: req.admin }).status(200);
//       } else {
//         argon2
//           .verify(req.applicant.hashed_password, req.body.password)
//           .then((applicantPasswordIsValid) => {
//             if (applicantPasswordIsValid) {
//               const payload = {
//                 sub: req.applicant.id,
//               };
//               const token = jwt.sign(payload, process.env.JWT_SECRET, {
//                 expiresIn: "1h",
//               });
//               delete req.applicant.hashed_password;
//               res.send({ token, applicant: req.applicant }).status(200);
//             } else {
//               argon2
//                 .verify(req.company.hashed_password, req.body.password)
//                 .then((companyPasswordIsValid) => {
//                   if (companyPasswordIsValid) {
//                     const payload = {
//                       sub: req.company.id,
//                     };
//                     const token = jwt.sign(payload, process.env.JWT_SECRET, {
//                       expiresIn: "1h",
//                     });
//                     delete req.company.hashed_password;
//                     res.send({ token, company: req.company }).status(200);
//                   } else {
//                     res.sendStatus(401);
//                   }
//                 });
//             }
//           });
//       }
//     });
// };

const verifyToken = (req, res, next) => {
  try {
    const authorizationHeader = req.get("Authorization");
    if (authorizationHeader == null) {
      throw new Error("Authorization header is missing");
    }
    const [type, token] = authorizationHeader.split(" ");
    if (type !== "Bearer") {
      throw new Error("Authorization header has not 'Bearer' type");
    }
    req.payload = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (error) {
    console.error(error);
    res.sendStatus(401);
  }
};

module.exports = {
  verifyEmailForSubscription,
  hashPassword,
  verifyPasswordForAdmin,
  verifyPasswordForApplicant,
  verifyPasswordForCompany,
  // verifyPassword,
  verifyToken,
};