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

const verifyPassword = (req, res) => {
  argon2.verify(req.user.hashed_password, req.body.password).then((valid) => {
    if (valid) {
      const payload = {
        sub: req.user.id,
        role: req.user.role,
      };
      const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
      delete req.user.hashed_password;
      res.send({ token, user: req.user }).status(200);
    } else {
      res.sendStatus(401);
    }
  });
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
    res.sendStatus(401);
  }
};

const verifyAdmin = (req, res, next) => {
  try {
    if (req.payload.role !== "admin") {
      res.sendStatus(403);
    } else {
      next();
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(401);
  }
};

const verifyCompany = (req, res, next) => {
  try {
    if (req.payload.role !== "company") {
      res.sendStatus(403);
    } else {
      next();
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(401);
  }
};

const verifyAdminOrCompany = (req, res, next) => {
  try {
    if (req.payload.role !== "company" && req.payload.role !== "admin") {
      res.sendStatus(403);
    } else {
      next();
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(401);
  }
};

const verifyApplicant = (req, res, next) => {
  try {
    if (req.payload.role !== "applicant") {
      res.sendStatus(403);
    } else {
      next();
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(401);
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
  verifyApplicant,
};
