const router = (res, req ) => ('express').Router();
const { check } = require('express-validator');

const {
    getUser,
    createUser,
    editUser,
    deleteUser
} = require('../controllers/user.controllers');

const {
    existeNombre,
    existeCorreo,
    existeRol,
    existeUsuarioID
} = require('../helpers/validatorDB.js');

//Para evitar hacer las 3 exportaciones de arriba que vienen de la misma carpeta, se optimiza el codigo para
//realizar una sola exportacion que apunta a un index de forma implicita.

const {
    validacioncp,
    validarToken,
    adminRole,
    tieneRole
} = require('../middlewares');

router.get('/get-user/:id', [
    validarToken,
    tieneRole('admin_role', 'collaboration_role', 'user_role'),
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existeUsuarioID),
    validacioncp
], getUser);

router.post('/create-user', [
    
    validarToken,
    tieneRole('admin_role', 'collaboration_role'),
    check('nombre', 'El nombre de usuario no debe estar vacío').not().isEmpty(),
    check('nombre').custom(existeNombre),
    check('contrasenia', 'El nombre de usuario no debe estar vacío').not().isEmpty(),
    check('contrasenia', 'El nombre de usuario debe tener como minimo 8 caracteres').isLength({ min: 8 }),
    check('correo', 'El correo no es válido').isEmail(),
    check('correo').custom(existeCorreo),
    check('rol').custom(existeRol),
    validacioncp
], createUser);

router.put('/edit-user/:id', [
    validarToken,
    adminRole,
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existeUsuarioID),
    check('nombre', 'El nombre de usuario no debe estar vacío').not().isEmpty(),

    check('contrasenia', 'El nombre de usuario no debe estar vacío').not().isEmpty(),
    check('contrasenia', 'El nombre de usuario debe tener como minimo 8 caracteres').isLength({ min: 8 }),
    check('correo', 'El correo no es válido').isEmail(),
    check('rol').custom(existeRol),
    check('estado', 'El estado no es válido').isBoolean(),
    validacioncp
], editUser);

router.put('/delete-user/:id', [
    validarToken,
    adminRole,
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existeUsuarioID),
    validacioncp
], deleteUser);

module.exports = router;