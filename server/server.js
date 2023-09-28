const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const connect = require("./db/connection");
dotenv.config({ path: "./config.env" });
const app = express();
app.use(bodyParser.json());
app.use(cookieParser());

app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

const port = process.env.PORT || 8080;

connect
  .then((res) => {
    app.listen(port, () => {
      console.log(`Servidor Ejecutandose en el Puerto: ${port}`);
    });
  })
  .catch((err) => {
    console.log(`Error en la BBDD: ${err}`);
  });
