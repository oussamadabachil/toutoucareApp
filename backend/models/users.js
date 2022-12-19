const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  nom: String,
  prenom: String,
  date_de_naissance: String,
  telephone: String,
  email: String,
  password: String,
  codeCreche: String,
  rue: String,
  code_postal: String,
  ville: String,
  profession: String,
  nom_contact_urgence: String,
  tel_contact_urgence: String,
  chien: { type: mongoose.Schema.Types.ObjectId, ref: 'testdogs' },
  booking: { type: mongoose.Schema.Types.ObjectId, ref: 'testbookings' },
  token: String,
});



const User = mongoose.model("testusers", userSchema);


module.exports = User;