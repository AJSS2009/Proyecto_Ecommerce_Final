const express = require("express");
const router = express.Router();
const { check, validateResult } = require("express-validator");

router.post("/verificacion_cuenta", (req, res, next) => {});
router.post("/sesion", (req, res, next) => {});
router.post(
  "/registro",
  [
    check("nombre", "Ingresa nombre").not().isEmpty(),
    check("apellidos", "Ingresa apellidos").not().isEmpty(),
    check("usuario", "Ingresa usuario").not().isEmpty(),
    check("correo", "Ingresa correo").not().isEmpty().isEmail(),
    check("contrasena", "Ingresa contrasena").not().isEmpty().isLength({ min: 5 }),
    check("confirmar_contrasena", "Ingresa confirmar_contrasena").not().isEmpty(),
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
    res.json({ message: "registrado" });
  }
);

module.exports = router;
