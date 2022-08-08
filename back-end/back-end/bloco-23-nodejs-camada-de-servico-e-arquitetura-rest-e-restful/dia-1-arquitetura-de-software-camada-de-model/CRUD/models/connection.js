const mysql = require('mysql2/promise');

const connection = mysql.createPool({
	host: 'localhost',
	user: 'root',
	password: 'Mercuri0!',
	database: 'users_crud'});

    module.exports = connection;