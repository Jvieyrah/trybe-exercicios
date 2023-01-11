const express = require('express');
const app = express();
const routes = require('./routes');
app.use(express.json());
app.use('/empresa', routes.empresaRoute);
app.use('/habilidades', routes.habilidadesRoute);

app.use((er, req, res, next) => {
    res.status(500).json({ message: 'Erro interno do servidor' });
    } );

app.listen(3001, () => console.log('on 3001'));