const express = require('express');
const bodyParser = require('body-parser');
const simpsonsUtils = require('./fs-utils');

const app = express();

app.use(bodyParser.json());

// /* Crie suas rotas aqui */
// // implementando rota GET /ping
// app.get('/ping', (_req, res) => res.json({ message: 'pong' }));

// // implementando rota POST /hello
// app.post('/hello', (req, res) => {
//     const { name } = req.body;
//     return res.status(200).json({ message: `Hello, ${name}!` });
//   });


// // implementando rota POST /greetings
// app.post('/greetings', (req, res) => {
//     const { name, age } = req.body;
  
//     if (Number(age) <= 17) {
//       // não esqueça de adicionar o return para impedir de que seu código continue.
//       return res.status(401).json({ message: 'Unauthorized' });
//     }
  
//     return res.status(200).json({ message: `Hello, ${name}!` });
//   });

// // implementando rota PUT /users/:name/:age
// app.put('/users/:name/:age', (req, res) => {
//     const { name, age } = req.params;
  
//     return res.status(200)
//       .json({ message: `Seu nome é ${name} e você tem ${age} anos de idade` });
//   });


app.get('/simpsons', async (req, res) => {
    try {
      const simpsons = await simpsonsUtils.getSimpsons();
  
      return res.status(200).json(simpsons);
    } catch (error) {
      return res.status(500).end();
    }
  });


app.get('/simpsons/:id', async (req, res) => {
    try {
      const simpsons = await simpsonsUtils.getSimpsons();
  
      const simpson = simpsons.find(({ id }) => id === req.params.id);
  
      if (!simpson) {
        // não esqueça de adicionar o return para impedir de que seu código continue.
        return res.status(404).json({ message: 'simpson not found' });
      }
  
      return res.status(202).json(simpson);
    } catch (error) {
      return res.status(500).end();
    }
  });
  
  /* ... */

app.post('/simpsons', async (req, res) => {
    try {
      const { id, name } = req.body;
  
      const simpsons = await simpsonsUtils.getSimpsons();
  
      if (simpsons.some((character) => character.id === id)) {
        // não esqueça de adicionar o return para impedir de que seu código continue.
        return res.status(409).json({ message: 'id already exists' });
      }
  
      simpsons.push({ id, name });
  
      await simpsonsUtils.setSimpsons(simpsons);
  
      return res.status(204).end();
    } catch (error) {
      return res.status(500).end();
    }
  });
  
  /* ... */

  app.listen(3000, () => console.log('ouvindo na porta 3000!'));
  