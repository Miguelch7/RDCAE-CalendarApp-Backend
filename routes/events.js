const { Router } = require('express');
const { check } = require('express-validator');
const { validarJWT } = require('../middlewares/validar-jwt');
const { validarCampos } = require('../middlewares/validar-campos');
const { obtenerEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events');
const { isDate } = require('../helpers/isDate');

const router = Router();

// Validar JWT en todas las peticiones 
router.use( validarJWT );

// Obtener eventos
router.get('/', obtenerEventos);

// Crear evento
router.post('/', 
    [
        check( 'title', 'El titulo es obligatorio' ).not().isEmpty(),
        check( 'start', 'Fecha de inicio es obligatorio' ).custom( isDate ),
        check( 'end', 'Fecha de finalizacion es obligatorio' ).custom( isDate ),
        validarCampos
    ],
    crearEvento
);

// Actualizar evento
router.put('/:id', actualizarEvento);

// Eliminar evento
router.delete('/:id', eliminarEvento);

module.exports = router;
