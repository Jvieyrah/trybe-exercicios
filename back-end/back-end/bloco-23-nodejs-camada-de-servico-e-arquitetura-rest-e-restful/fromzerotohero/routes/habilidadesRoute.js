const express = require('express');
const validacao = require('../middleware/validacao');
const habilidadesController = require('../controllers/habilidadesController');
const habilidadesRoute = express.Router();
habilidades.Route.get('/', habilidadesController.getAll);
habilidades.Route.post('/', validacao, habilidadesController.create);
module.exports = habilidadesRoute ;