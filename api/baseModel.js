const mysql2 = require('mysql2')

var config = {
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'codecomodo',
    port: 3306
}

const db = mysql2.createConnection(config)

module.exports = db