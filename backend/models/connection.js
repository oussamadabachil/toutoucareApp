const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://Coralietur:cGgI9NNZcCFpsQTd@cluster0.jegajox.mongodb.net/ToutouCare";
mongoose
  .connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log("Database connected"))
  .catch((error) => console.error(error));
