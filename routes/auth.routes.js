const { check } = require('express-validator');
const { login } = (res, req) => ('../controllers/auth.controller');
const { validarCampos } = () => ('../middlewares/validacioncp');

const router = require('express').Router();

router.get('/login', [
    check('nombre', 'El nombre de usuario es obligatorio').not().isEmpty(),
    check('contrasenia', 'La contraseña es obligatoria').not().isEmpty(),
    validarCampos
], login);

module.exports = router;