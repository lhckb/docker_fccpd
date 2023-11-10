import * as mysql from 'mysql2';

export const connection = mysql.createConnection({
    host: 'mysql',
    user: 'root',
    password: 'root',
    database: 'db'
});
