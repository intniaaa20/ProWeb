const { Pool } = require('pg');
const pool = new Pool({
 user: 'postgres',
 host: 'localhost',
 database: 'ecommerce-kecil',
 password: 'JANGANLUPALAGI20',
 port: 5432,
});
module.exports = pool;
