const { Router } = require("express");
const { validarJWT } = require("../middlewares/validar-jwt");
const {
  getEventos,
  crearEventos,
  actualizarEvento,
  eliminarEvento,
} = require("../controllers/events");
const router = Router();
const { check } = require("express-validator");
const { validarCampos } = require("../middlewares/validations");
const { isDate } = require("../helpers/isDate");

router.use(validarJWT);

router.get("/", getEventos);
router.post(
  "/",
  [
    check("title", "El titulo es obligatorio").not().isEmpty(),
    check("start", "Fecha de inicio es obligatoria").custom(isDate),
    check("end", "Fecha de finalizacion es obligatoria").custom(isDate),
    validarCampos,
  ],
  crearEventos
);
router.put("/:id",[
  check("title", "El titulo es obligatorio").not().isEmpty(),
  check("start", "Fecha de inicio es obligatoria").custom(isDate),
  check("end", "Fecha de finalizacion es obligatoria").custom(isDate),
  validarCampos,
], actualizarEvento);
router.delete("/:id", eliminarEvento);

module.exports = router;
