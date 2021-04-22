const express = require("express");
const app = express();
const cors = require ("cors");
const port = process.env.PORT || 3008;
const pool = require("./db.js");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("This is Randy's friendlist :)")
});

app.listen(port, () => {
    console.log(`Your server is being hosted on localhost:${port}`)
});