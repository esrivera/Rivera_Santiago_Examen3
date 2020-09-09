const mysql = require('mysql');
const connection = mysql.createConnection({
    hots: 'localhost',
    user: 'root',
    password: '',
    database: 'consulta'
});
connection.connect(error => {
    if (error) {
        throw error;
    }
    console.log('Conexion Exitosa');
    return;
});
module.exports = connection;