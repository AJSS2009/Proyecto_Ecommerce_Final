const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const userRoute = require("./router/userRouter");


dotenv.config({ path: "./config.env" });
const connect = require("./db/connection");

const app = express();
app.use(bodyParser.json());
app.use(cookieParser());

app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

app.post("/api/usuario", userRoute);


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
