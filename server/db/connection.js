const mongoose = require("mongoose");

const connect = mongoose
  .connect(process.env.CONECTION_URL)
  .then((res) => {
    console.log("Base de Datos Conectada")
  })
  .catch((err) => {
    console.log(`Conexion con la Base con error: ${err}`);
  });

module.exports = connect;