const Pool = require("pg").Pool
const pw = require("./datakey")

const pool = new Pool({
    user: "postgres",
    password: `${pw}`,
    host: "localhost",
    port: 4321,
    database: "friendlist",
});

module.exports = pool;