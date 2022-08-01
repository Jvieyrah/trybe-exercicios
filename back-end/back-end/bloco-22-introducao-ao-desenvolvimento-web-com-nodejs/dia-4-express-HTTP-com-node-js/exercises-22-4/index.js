const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

/* Crie suas rotas aqui */
// implementando rota GET /ping
app.get('/ping', (_req, res) => res.json({ message: 'pong' }));

// implementando rota POST /hello
app.post('/hello', (req, res) => {
    const { name } = req.body;
    return res.status(200).json({ message: `Hello, ${name}!` });
  });


// implementando rota POST /greetings
app.post('/greetings', (req, res) => {
    const { name, age } = req.body;
  
    if (Number(age) <= 17) {
      // não esqueça de adicionar o return para impedir de que seu código continue.
      return res.status(401).json({ message: 'Unauthorized' });
    }
  
    return res.status(200).json({ message: `Hello, ${name}!` });
  });

app.listen(3000, () => console.log('ouvindo na porta 3000!'));