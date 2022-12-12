const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  code_creche: String,
  nom: String,
  prenom: String,
  chien: String,
  date_de_naissance: String,
  telephone: String,
  email: String,
  password: String,
  rue: String,
  code_postal: String,
  ville: String,
  profession: String,
  nom_contact_urgence: String,
  tel_contact_urgence: String,
});

const User = mongoose.model("users", userSchema);

module.exports = User;
