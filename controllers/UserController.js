const { Users, Token } = require("../database/models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const env = process.env.NODE_ENV || "development";
const { jwt_secret } = require("../config/config.js")[env];

/* USERCONTROLLER DEFINITION */
const UserController = {};

/* CRUD USERS */

//CREATE
UserController.create = async (req, res) => {
  req.body.password = bcrypt.hashSync(req.body.password, 10); //Encrypt the user password
  Users
    .create(req.body)
    .then((user) => res.status(201).send(user))
    .catch((err) => {
      console.error(err);
      res.status(500).send({
        message: `There was a problem trying to register the user`,
        error: err.message,
      });
    });
};

//READ
UserController.read = async (req, res) => {
  //READ ALL
  if (!req.params.id) {
    Users.findAll().then((user) => {
      res.status(200).json(user);
    });
    //READ ONE
  } else {
    let user = await Users.findByPk(req.params.id);
    if (!user) {
      return res.status(400).send({ message: "This user doesn't exists" });
    } else {
      return res.status(200).send(user);
    }
  }
};

//UPDATE
UserController.update = async (req, res) => {
  let u = req.body;
  await Users
    .findOne({
      where: { id: req.params.id },
    })
    .then((user) => {
      u.password = bcrypt.hashSync(req.body.password, 10);
      user.update(u);
      user.save().then(() => {
        res.status(200).send({
          message: "User updated correctly",
        });
      }).catch((err) => {
        res.status(400).send({
          message: "Error updating user",
          error: err.message,
        });
      });
    })
};

//DELETE
UserController.delete = async (req, res) => {
  await Users
    .findByPk(req.params.id)
    .then((user) => {
      user.destroy();
      res.status(200).send({
        message: "User deleted correctly",
      });
    })
    .catch((err) => {
      res.status(400).send({
        message: "Error deleting user",
        error: err.message,
      });
    });
};

/* LOGIN */

UserController.login = async (req, res) => {
  try {
    //Username / Email validation
    const user = await Users.findOne({
      $or: [{ email: req.body.email }, { user_name: req.body.user_name }],
    });
    if (!user) {
      return res.status(400).send({ message: "This user doesn't exists" });
    }

    //Password validation
    const pwMatch = bcrypt.compare(req.body.password, user.password);
    if (!pwMatch) {
      return res.status(400).send({ message: "Password error" });
    }

    //JWT Creation
    const jwToken = jwt.sign({ id: user.id }, jwt_secret, { expiresIn: '2d' } ); //SignToken, and secret (stored at .env file)
    Token.create({ token: jwToken, id_user: user.id });
    res.send({
      message: "User loged: " + user.user_name,
      user,
      jwToken,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send({
      message: "There whas a problem trying to login",
      error: err.message,
    });
  }
};

module.exports = UserController;
