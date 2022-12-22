var express = require("express");
var router = express.Router();
const db = require("../database/users");

require("../models/connection");
var router = express.Router();
const { checkBody } = require("../modules/checkBody");
const uid2 = require("uid2");
const User = require("../models/users");
const Booking = require("../models/booking");
const Dog = require("../models/dogs");
const bcrypt = require("bcrypt");
const { Router, response } = require("express");

// Création de la DB dans Mongoose
router.post("/add/:token/", (req, res) => {
    //check if user already have a booking for this date
    Booking.findOne({ userToken: req.params.token, date: req.body.date }).then(
      (data) => {
        console.log(data);
        if (data === null) {
          const newBooking = new Booking({
            date: req.body.date,
            heureDeDepose: req.body.heureDeDepose,
            heureDeRecuperation: req.body.heureDeRecuperation,
            commentaire: req.body.commentaire,
            userToken: req.params.token,
            // idDog: req.params.idDog,
          });
  
          newBooking.save().then(() => {
            res.json({ result: true });
          });
        } else {
          res.json({
            result: false,
            message: "Vous avez déjà une réservation pour cette date",
          });
        }
      }
    );
  });
  
  router.put("/dataBooking/:token/:date", (req, res) => {
    Booking.findOneAndUpdate(
      { userToken: req.params.token, date: req.params.date },
      {
        heureDeDepose: req.body.heureDeDepose,
        heureDeRecuperation: req.body.heureDeRecuperation,
        commentaire: req.body.commentaire,
      }
    ).then((data) => {
      res.json({ result: true });
    });
  });
  
  router.get("/booking/info/:token/:date", (req, res) => {
    Booking.findOne({ idToken: req.params.token, date: req.params.date }).then(
      (data) => {
        if (data === null) {
          res.json({
            result: false,
            message: "Vous n'avez pas de réservation pour cette date",
          });
        } else {
          res.json({ result: true, data: data });
        }
      }
    );
  });
  /*
  
  router.post("/add/:idUser/:idDog", (req, res) => {
    //check if user already have a booking for this date
    Booking.findOne({ user: req.params.idUser, date: req.body.date }).then(
      (data) => {
        if (data === null) {
          const newBooking = new Booking({
            date: req.body.date,
            heureDeDepose: req.body.heureDeDepose,
            heureDeRecuperation: req.body.heureDeRecuperation,
            commentaire: req.body.commentaire,
            idUser: req.params.idUser,
            idDog: req.params.idDog,
          });
  
          newBooking.save().then(() => {
            res.json({ result: true });
          });
        } else {
          res.json({
            result: false,
            message: "Vous avez déjà une réservation pour cette date",
          });
        }
      }
    );
  });
  
  */
  
  router.get("/allBookingPerUser/:token", (req, res) => {
    Booking.find({ userToken: req.params.token }).then((data) => {
      if (data) {
        res.json({ data: data });
      }
    });
  });
  
  //route qui permet d'afficher que les dates de réservation
  
  router.get("/findUserTokenByDate/:date", (req, res) => {
    Booking.find({ date: req.params.date }).then((data) => {
      if (data) {
        res.json({
          data,
        });
      }
    });
  });
  
  router.get("/allBookingDuplicate", (req, res) => {
    Booking.find({}).then((data) => {
      if (data) {
        res.json({ data: data });
      } else {
        res.json({ error: "no data" });
      }
    });
  });
  
  //count how many booking for a date
  router.get("/count/:date", (req, res) => {
    Booking.countDocuments({ date: req.params.date }).then((data) => {
      if (data) {
        res.json({ data: data });
      } else {
        res.json({ data: 0 });
      }
    });
  });
  
  // router.get("/allDogPerUser/:idUser", (req, res) => {
  //   Dog.find({ _idUser: req.params.idUser }).then((data) => {
  //     if (data) {
  //       res.json({ data: data });
  //     }
  //   });
  // });
  
  
  
  // router.post("/signin", (req, res) => {
  //   if (!checkBody(req.body, ["email", "password"])) {
  //     res.json({ result: false, error: "Missing or empty fields" });
  //     return;
  //   }
  //   User.findOne({ email: req.body.email }).then((data) => {
  //     if (data && bcrypt.compareSync(req.body.password, data.password)) {
  //       //if (data && req.body.password == data.password) {
  //       res.json({ result: true, data });
  //     } else {
  //       res.json({ result: false, error: "User not found or wrong password" });
  //     }
  //   });
  // });
  // router.post("/signin", (req, res) => {
  //   if (!checkBody(req.body, ["email", "password"])) {
  //     res.json({ result: false, error: "Missing or empty fields" });
  //     return;
  //   }
  //   User.findOne({ email: req.body.email }).then((data) => {
  //     if (data && bcrypt.compareSync(req.body.password, data.password)) {
  //       //if (data && req.body.password == data.password) {
  //       res.json({ result: true ,data});
  //     } else {
  //       res.json({ result: false, error: "User not found or wrong password" });
  //     }
  //   });
  // });
  
  router.get("/booking/:idUser", (req, res) => {
    console.log(req.params.idUser);
    Booking.find({ idUser: req.params.idUser }).then((data) => {
      if (data) {
        res.json({ data: data });
      }
    });
  });
  
  //router supprimer booking par id et date
  router.delete("/delete/:idUser/:date/", (req, res) => {
    Booking.deleteOne({
      user: req.params.idUser,
      date: req.params.date,
      // dog: req.params.idDog,
    }).then((data) => {
      if (data) {
        res.json({ data: data, result: true });
      }
    });
  });
  
  /*router.delete("/delete/:idUser/:date/:idDog", (req, res) => {
    Booking.deleteOne({
      user: req.params.idUser,
      date: req.params.date,
      dog: req.params.idDog,
    }).then((data) => {
      if (data) {
        res.json({ data: data, result: true });
      }
    });
  }); */
  /*router.get("/code_creche/:token", (req, res) => {
    User.findOne({ token: req.params.token }).then((data) => {
      if (data) {
        res.json({ result: true, codeCreche: data.codeCreche });
      } else {
        res.json({ result: false, error: "User not found" });
      }
    });
  });*/
  
  //faire une route qui permet de poster sur la base de donnée le fichier json et modifier les
  
  //faire une route qui permet de récupérer les dates réservées par token
  
  router.get("/allDatePerToken/:token", (req, res) => {
    const dateReservedByUser = []
    Booking.find({
      userToken: req.params.token,
    }).then((data) => { 
      dateReservedByUser.push(data)
      res.json({
        data: data,
      });
  
      console.log(dateReservedByUser)
    });
  });
  
  module.exports = router;
  