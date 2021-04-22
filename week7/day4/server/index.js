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

//add a friend
app.post("/friends", async (req, res) => {
    try {
        const {name} = req.body

        const newFriend = await pool.query("INSERT INTO friends (name) VALUES($1)", [name]);
        
        res.json(newFriend);
    } catch (err) {
        console.log(err.message);
    }
});

//view friends
app.get("/view_friends", async (req, res) => {

});

app.listen(port, () => {
    console.log(`Your server is being hosted on localhost:${port}`)
});