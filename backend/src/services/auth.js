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
        res.status(403).send({ error: "Cet email existe déjà." });
      } else {
        models.applicant.findUserByEmail(email).then(([applicants]) => {
          if (applicants.length) {
            res.status(403).send({ error: "Cet email existe déjà." });
          } else {
            models.company.findUserByEmail(email).then(([companies]) => {
              if (companies.length) {
                res.status(403).send({ error: "Cet email existe déjà." });
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
      res.status(500).send({ error: "Une erreur est survenue." });
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
      res.status(500).send({ error: "Une erreur est survenue." });
    });
};
const hashNewPassword = (req, res, next) => {
  argon2
    .hash(req.body.newPassword, hashingOptions)
    .then((hashedPassword) => {
      req.body.hashedPassword = hashedPassword;
      delete req.body.newPassword;
      delete req.body.confirmNewPassword;
      next();
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send({ error: "Une erreur est survenue." });
    });
};

const verifyPassword = (req, res, next) => {
  argon2.verify(req.user.hashed_password, req.body.password).then((valid) => {
    if (valid) {
      next();
    } else {
      res.status(401).send({ error: "Le mot de passe est incorrect." });
    }
  });
};

const login = (req, res) => {
  try {
    const payload = {
      sub: req.user.id,
      role: req.user.role,
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    delete req.user.hashed_password;
    res.send({ token, user: req.user }).status(200);
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: "Une erreur est survenue." });
  }
};

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
    res.status(401).send({ error: "Vous devez vous authentifier." });
  }
};

const verifyAdmin = (req, res, next) => {
  try {
    if (req.payload.role !== "admin") {
      res
        .status(403)
        .send({ error: "Cette action est réservée aux administrateurs." });
    } else {
      next();
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Une erreur est survenue." });
  }
};

const verifyCompany = (req, res, next) => {
  try {
    if (req.payload.role !== "company") {
      res
        .status(403)
        .send({ error: "Cette action est réservée aux entreprises." });
    } else {
      next();
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Une erreur est survenue." });
  }
};

const verifyAdminOrCompany = (req, res, next) => {
  try {
    if (req.payload.role !== "company" && req.payload.role !== "admin") {
      res.status(403).send({
        error:
          "Cette action est réservée aux administrateurs et aux entreprises.",
      });
    } else {
      next();
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Une erreur est survenue." });
  }
};

const verifyApplicant = (req, res, next) => {
  try {
    if (req.payload.role !== "applicant") {
      res
        .sendtatus(403)
        .send({ error: "Cette action est réservée aux candidats." });
    } else {
      next();
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Une erreur est survenue." });
  }
};

module.exports = {
  verifyEmailForSubscription,
  hashPassword,
  verifyPassword,
  verifyToken,
  verifyAdmin,
  verifyCompany,
  verifyAdminOrCompany,
  login,
  hashNewPassword,
  verifyApplicant,
};
