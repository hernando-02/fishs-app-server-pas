/* 
    ? path en el cual voy a llamar este servicio
    ! path: /api/horarios
*/

const { Router } = require('express');

const { getRegistros } = require('../controllers/obtenerRegistros')

const router = Router();

// * configuracion de la primera ruta
router.get('/', getRegistros);
// router.get('/', getHoraios);


module.exports = router;