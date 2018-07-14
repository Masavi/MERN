const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');

const app = express();

// Usamos body-parser como middleware
app.use(bodyParser.json());

// Constantes de configuración para la base de datos
const db = require('./config/keys.js');

// Conexión a MongoDB
mongoose 
    .connect(db.uri, db.options)
    .then(() => console.log('Conectado a MongoDB '))
    .catch( err => console.log(err));

// Integramos las rutas a nuestra aplicación de express
app.use('/api/items', items);

const PORT = process.env.PORT || 8080;

app.listen( PORT, () => console.log(`Corriendo en el puerto ${PORT}`));