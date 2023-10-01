const express = require("express");
const router = express.Router();
const { check, validateResult } = require("express-validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userModel = require("../models/userModel");

router.post("/verificacion_cuenta", 
  async (req, res, next) => {
  const {token} = req.body;

  jwt.verify(token,process.env.jwt_key,async (err,valid_token) => {
    if (err){
      res.json({status: false});
      return;
    }

    const id = valid_token.id;

    const encuentra_cuenta = await userModel.findById(id);

    if (!encuentra_cuenta) {
      res-json({status: false});
      return;
    }

    res.json({status: true,usuario:encuentra_cuenta.usuario,correo: encuentra_cuenta.correo})
    
  })
});
router.post(
  "/sesion",

  [
    check("usuario", "Ingresa usuario").not().isEmpty(),
    check("contrasena", "Ingresa contrasena").not().isEmpty(),
  ],

  async (req, res, next) => {
    const { usuario, contrasena } = req.body;

    const error = validationResult(req);

    if (!error.isEmpty()) {
      res.json({ error: error.array() });
    }
    const encuentra_usuario = await userModel.findOne({ usuario: usuario });

    if (!encuentra_usuario) {
      res.json({ message: "CUENTA INVALIDA", error_type: 1 });
      return;
    }

    await bcrypt.compare(contrasena, encuentra_usuario.contrasena, (err, isValid) => {
      if (isValid) {
        const id = encuentra_usuario._id;
        const token = jwt.sign({ id }, process.env.jwt_key, {
          expiresIn: "7d",
        });

        res
          .cookie("jwt_token", token)
          .status(200)
          .send({ message: "Validado", token, created: true });
      } else {
        res.json({ message: "Cuenta Invalida", create: false });
      }
    });
  }
);

router.post(
  "/registro",
  [
    check("nombre", "Ingresa nombre").not().isEmpty(),
    check("apellidos", "Ingresa apellidos").not().isEmpty(),
    check("usuario", "Ingresa usuario").not().isEmpty(),
    check("correo", "Ingresa correo").not().isEmpty().isEmail(),
    check("contrasena", "Ingresa contrasena")
      .not()
      .isEmpty()
      .isLength({ min: 5 }),
    check("confirmar_contrasena", "Ingresa confirmar_contrasena")
      .not()
      .isEmpty(),
  ],

  async (req, res, next) => {
    const {
      nombre,
      apellidos,
      correo,
      usuario,
      contrasena,
      confirmar_contrasena,
    } = req.body;

    const error = validateResult(req);

    if (!error.isEmpty()) {
      res.json({ error: error.array() });
      return;
    }

    const encuentra_Usuario = await userModel.findOne({ usuario: usuario });
    const encuentra_correo = await userModel.findOne({ correo: correo });

    if (encuentra_Usuario) {
      res.json({ message: "USUARIO YA EXISTE" });
      return;
    }
    if (encuentra_correo) {
      res.json({ message: "CORREO YA EXISTE" });
      return;
    }

    if (contrasena !== confirmar_contrasena) {
      res.json({ message: "CONTRASEÑAS NO CONCUERDAN" });
      return;
    }

    const user = new userModel({
      nombre,
      apellidos,
      correo,
      usuario,
      contrasena,
    });

    const salt = await bcrypt.genSalt(10);

    user.contrasena = await bcrypt.hash(user.contrasena, salt);

    user.save().then((doc) => {
      const id = doc._id;

      const jwt = jwt.sign({ id }, process.env.jwt_key, { expiresIn: "7d" });

      res
      .cookie("jwt_token", token)
      .status(201)
      .send({ id, create: true, token, message: "Registrado" });
    });
  }
);

module.exports = router;
