var express = require("express");
var router = express.Router();
const db = require('../database/users');


require("../models/connection");
const User = require("../models/users");
const { checkBody } = require("../modules/checkBody");
const uid2 = require("uid2");
const bcrypt = require("bcrypt");


// Création de la DB dans Mongoose
router.post("/all", (req, res) => {
 db.map(async(data) => {

      const hash = bcrypt.hashSync(data.password, 10);
      const newUser = new User({
        code_creche: data.code_creche,
        nom: data.nom,
        prenom: data.prenom,
        chien: data.chien,
        date_de_naissance: data.date_de_naissance,
        telephone: data.telephone,
        email: data.email,
        password: hash,
        rue: data.rue,
        code_postal:data.code_postal,
        ville: data.ville,
        profession: data.profession,
        nom_contact_urgence: data.nom_contact_urgence,
        tel_contact_urgence: data.tel_contact_urgence,
        token: uid2(32),
            })
    
    let userSaved = await newUser.save()
 
  })
  res.json({result : true}) 

})
// router.post("/signup", (req, res) => {
//   if (!checkBody(req.body, ["email", "password"])) {
//     res.json({ result: false, error: "Missing or empty fields" });
//     return;
//   }

//   // Check if the user has not already been registered
//   User.findOne({ email: req.body.email }).then((data) => {
//     if (data === null) {
      
//       });

//       newUser.save().then((newDoc) => {
//         res.json({ result: true, token: newDoc.token });
//       });
//     } else {
//       // User already exists in database
//       res.json({ result: false, error: "User already exists" });
//     }
//   });
// });

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
      res.json({ result: true ,data});
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
