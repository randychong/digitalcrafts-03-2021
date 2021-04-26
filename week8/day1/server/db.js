const Pool = require("pg").Pool;
const pw = require("./datakey");

const pool = new Pool({
    user: "postgres",
    password: `passwordgoesinhere`,
    host: "localhost",
    port: 5432,
    database: "databasename",
    });

module.exports = pool;