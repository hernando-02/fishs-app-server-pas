/* 
    ? path en el cual voy a llamar este servicio
    ! path: /api/creacion
*/

const { Router} = require('express');
const { check } = require('express-validator');

const { crearHorario } = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validar-campos');


const router = Router();

// * configuracion de la primera ruta
router.post('/new',[
    check('hora','la hora es obligatoria').not().isEmpty(),
    check('cantidadComida','la cantidad de comida es obligatoria').not().isEmpty(),

    validarCampos

], crearHorario);


module.exports = router;