const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { dbConnection } = require('./db/config');

// Crear app express
const app = express();

// Base de datos
dbConnection()

// CORS
app.use( cors() );

// Directorio público
app.use( express.static( 'public' ) );

// Lectura y parseo del body
app.use( express.json() );

// Rutas
app.use('/api/auth', require('./routes/auth'));
// TODO: CRUD: Eventos

// Escuchar peticiones
app.listen( process.env.PORT, () => {
    console.log( `Servidor corriendo en puerto ${ process.env.PORT }` );
});