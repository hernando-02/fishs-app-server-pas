/* 
    ? path en el cual voy a llamar este servicio
    ! path: /api/creacion
*/

const { Router } = require('express');
const { check } = require('express-validator');

const { crearRegistro } = require('../controllers/crearRegistro');
const { validarCampos } = require('../middlewares/validar-campos');


const router = Router();

// * configuracion de la primera ruta
router.post('/new', [
    check('hora', 'la hora es obligatoria').not().isEmpty(),
    check('cantidadComida', 'la cantidad de comida es obligatoria').not().isEmpty(),
    check('dispenso', 'indique si dispensó o no').not().isEmpty(),

    validarCampos

], crearRegistro);

module.exports = router;