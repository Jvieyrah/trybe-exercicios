const express = require('express');
const bodyParser = require('body-parser');
const authMiddleware = require('./auth-middleware');

const app = express();
app.use(bodyParser.json());

//Esta rota não passa pelo middleware de autenticação!
app.get('/open', function (req, res) {
  res.send('open!')
});

app.use(authMiddleware);

const recipes = [
	{ id: 1, name: 'Lasanha', preco: 40.0, tempoDePreparo: 30 },
	{ id: 2, name: 'Macarrão a Bolonhesa', preco: 35.0, tempoDePreparo: 25 },
	{ id: 3, name: 'Macarrão com molho branco', preco: 35.0, tempoDePreparo: 25 },
];

function validateName(req, res, next) {
	const { name } = req.body;
	if (!name || name === '') return res.status(400).json({ message: 'Invalid data!'});

	next();
};

app.get('/recipes', function (req, res) {
	res.status(200).json(recipes);
});

app.get('/recipes/pesquisar', function (req, res) {
	const { name, maxPrice } = req.query;
	const filteredRecipes = recipes.filter((r) => r.name.includes(name) && r.preco < Number(maxPrice));
	res.status(200).json(filteredRecipes);
});

app.get('/recipes/:id', function (req, res) {
	const { id } = req.params;
	const recipe = recipes.find((r) => r.id === Number(id));
	if (!recipe) return res.status(404).json({ message: 'Recipe not found!'});

	res.status(200).json(recipe);
});

app.post('/recipes', validateName, function (req, res) {
	const { id, name, price } = req.body;
    const { username } = req.user;
 recipes.push({ id, name, price, chef: username });
	res.status(201).json({ message: 'Recipe created successfully!'});
});

app.put('/recipes/:id', validateName, function (req, res) {
	const { id } = req.params;
	const { name, price } = req.body;
	const recipeIndex = recipes.findIndex((r) => r.id === Number(id));

	if (recipeIndex === -1) return res.status(500).json({ message: 'Recipe not found!' });

	recipes[recipeIndex] = { ...recipes[recipeIndex], name, price };

	res.status(204).end();
});

app.delete('/recipes/:id', function (req, res) {
	const { id } = req.params;
	const recipeIndex = recipes.findIndex((r) => r.id === Number(id));

	if (recipeIndex === -1) return res.status(500).json({ message: 'Recipe not found!' });

 recipes.splice(recipeIndex, 1);

	res.status(204).end();
});

app.all('*', function (req, res) {
	return res.status(404).json({ message: `Rota '${req.path}' não existe!`});
});

app.listen(3001);