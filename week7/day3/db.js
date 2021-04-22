const Pool = require("pg").Pool

const pool = new Pool({
    user: "postgres",
    password: "Riven@27",
    host: "localhost",
    port: 4321,
    database: "todolist",
});

module.exports = pool;