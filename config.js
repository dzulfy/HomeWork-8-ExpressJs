const {Pool} = require('pg')
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'film',
    port: 5432,
    password: '12345678'
})

module.exports = pool