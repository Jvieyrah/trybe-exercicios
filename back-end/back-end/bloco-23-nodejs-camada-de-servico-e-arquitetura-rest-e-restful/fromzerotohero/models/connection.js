const msql = require('mysql2/promise');

const connection =mysql.createpool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'senha',
    database: 'processes',
})

module.exports = connection;