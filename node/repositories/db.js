const mysql = require('mysql2/promise');
const config = {
    host: 'mysqldb',
    port:  3306,
    user: 'root',
    password: 'root',
    database: 'proxydb'
};

async function connect(){
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;
    const connection = await mysql.createConnection(config);
    global.connection = connection;
    return connection;
}

async function insertPeople(person){
    const conn = await connect();
    const sql = 'INSERT INTO people(name) VALUES (?);';
    const values = [person.name];
    return await conn.query(sql, values);
}

async function selectPeople(){
    const conn = await  connect();
    const [rows] = await conn.query('SELECT * FROM people;');
    return rows;
}

async function deletePeople(){
    const conn = await connect();
    const sql = 'DELETE FROM people;';    
    return await conn.query(sql);
}

module.exports = {selectPeople,insertPeople, deletePeople}