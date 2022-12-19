const mongoose = require('mongoose');

const bookingSchema = mongoose.Schema({
    date: String,
    heureDeDepose: String,
    heureDeRecuperation: String,
    commentaire : String,
    idUser: { type: mongoose.Schema.Types.ObjectId, ref: 'testusers' },
    // idDog : { type: mongoose.Schema.Types.ObjectId, ref: 'testdogs' },


});


const Booking = mongoose.model("testbookings", bookingSchema);

module.exports = Booking;
//foreing key with poeple
