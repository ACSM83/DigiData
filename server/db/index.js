import mysql from 'mysql';

const pool = mysql.createPool({
    connectionLimit : 10,
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'projeto_atlas'
});

export default pool;