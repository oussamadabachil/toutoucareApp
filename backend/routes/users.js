var express = require("express");
var router = express.Router();


require("../models/connection");
const User = require("../models/users");
const { checkBody } = require("../modules/checkBody");
const uid2 = require("uid2");
const bcrypt = require("bcrypt");

router.post("/signup", (req, res) => {
  if (!checkBody(req.body, ["email", "password"])) {
    res.json({ result: false, error: "Missing or empty fields" });
    return;
  }

  // Check if the user has not already been registered
  User.findOne({ email: req.body.email }).then((data) => {
    if (data === null) {
      const hash = bcrypt.hashSync(req.body.password, 10);

      const newUser = new User({
        email: req.body.email,
        password: hash,
        token: uid2(32),
        code_creche: req.body.code_creche,
        nom: req.body.nom,
        prenom: req.body.prenom,
        chien: req.body.chien,
        date_de_naissance: req.body.date_de_naissance,
        telephone: req.body.telephone,
        rue: req.body.rue,
        code_postal: req.body.code_postal,
        ville: req.body.ville,
        profession: req.body.profession,
        nom_contact_urgence: req.body.nom_contact_urgence,
        tel_contact_urgence: req.body.tel_contact_urgence,
      });

      newUser.save().then((newDoc) => {
        res.json({ result: true, token: newDoc.token });
      });
    } else {
      // User already exists in database
      res.json({ result: false, error: "User already exists" });
    }
  });
});

router.get("/all", (req, res) => {
  User.find({}).then((data) => {
    if (data) {
      res.json({
        data
      });
    }
  });
});

router.get("/all/:nom", (req, res) => {
  User.findOne({
    nom: { $regex: new RegExp(req.params.nom, "i") },
  }).then(data => {
    if (data) {
      res.json({ result: true, user: data });
    } else {
      res.json({ result: false, error: "User not found" });
    }
  });
});

router.post("/signin", (req, res) => {
  if (!checkBody(req.body, ["email", "password"])) {
    res.json({ result: false, error: "Missing or empty fields" });
    return;
  }

  User.findOne({ email: req.body.email }).then((data) => {
    if (data && bcrypt.compareSync(req.body.password, data.password)) {
      //if (data && req.body.password == data.password) {
      res.json({ result: true, token: data.token });
    } else {
      res.json({ result: false, error: "User not found or wrong password" });
    }
  });
});

/*router.get("/code_creche/:token", (req, res) => {
  User.findOne({ token: req.params.token }).then((data) => {
    if (data) {
      res.json({ result: true, codeCreche: data.codeCreche });
    } else {
      res.json({ result: false, error: "User not found" });
    }
  });
});*/


module.exports = router;
