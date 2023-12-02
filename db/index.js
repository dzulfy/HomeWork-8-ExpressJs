const fs = require('fs');
const pool = require('../config');

const seedQuery = fs.readFileSync('./seeding.sql', 'utf-8');

pool.query(seedQuery, (err, res) => {
    if(err) throw err;

    console.log('seeding success')
    pool.end()
})