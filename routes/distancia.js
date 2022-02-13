/* 
    ? path en el cual voy a llamar este servicio
    ! path: /api/distancia
*/

const { Router } = require('express');
const { crarDistancia } = require('../controllers/distancia')

const router = Router();

// * configuracion de la primera ruta
router.post('/', crarDistancia);


module.exports = router;