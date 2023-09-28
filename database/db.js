const sql = require('mssql');
const { dbName, dbConfig } = require('./config.json');

module.exports = db = { sql, initialize};

function initialize() {
    const dialect = 'mssql';
    const host = dbConfig.server;
    const port = dbConfig.options.port;
    const databaseName = dbName;
    const encript = dbConfig.options.encript;
    const { userName, password } = dbConfig.authentication.options;
    const connStr = `Server=${host},${port};Database=${databaseName};User Id=${userName};password=${password};Encrypt=${encript} `;

    sql.connect(connStr)
        .then(conn => global.conn = conn)
        .catch(err => console.log(err)); 

}