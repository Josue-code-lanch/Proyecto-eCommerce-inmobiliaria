const express = require('express');
const app = express();

// Configuration initialization
require('./config');

// Variables
const PORT = Number(process.env.PORT) || 3000;

// Middlewares

// Routes
const APIRoute = express.Router();

APIRoute.use('/', require('./routes/app.route'));

app.use('/api/v1', APIRoute);

// Server initialization
app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
