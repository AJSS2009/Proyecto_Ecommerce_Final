const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userScema = new Schema({
  nombre: { type: String },
  apelldos: { type: String },
  usuario: { type: String },
  correo: { type: String },
  contrasena: { type: String },
});

const userCollection = mongoose.model("user", userScema);

module.exports = userCollection;
