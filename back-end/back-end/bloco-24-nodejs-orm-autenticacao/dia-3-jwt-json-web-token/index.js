require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const { PORT } = process.env;

const controllers = require('./controllers');

const app = express();

app.post('/login', controllers.login);
app.get('/users/me', middlewares.auth, controllers.me);
app.get(
    '/top-secret',
    /* Middleware que valida o JWT e cria `req.user` */
    middlewares.auth,
    /* Middleware que verifica se a pessoa autenticada é admin */
    middlewares.admin,
    /* Controller do endpoint */
    controllers.topSecret
  );

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});