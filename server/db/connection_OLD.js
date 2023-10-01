const pgp = require("pg-promise")();

const db = pgp({
  host: "localhost",
  user: "postgres",
  password: "12346",
  database: "Ecommerce",
  allowExitOnIdle: true,
});

db.connect()
  .then((obj) => {
    console.log("Base de Datos Conectada");
    obj.done();
  })
  .catch((error) => {
    console.log(`Conexion con la Base con error: ${error}`);
  });

module.exports = db;
