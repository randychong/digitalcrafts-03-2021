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
    try {
        const viewFriends = await pool.query("SELECT * from friends ORDER BY friend_id");
        res.json(viewFriends.rows);
    } catch(err) {
        console.error(err);
    };
});

//view friend by id
app.get("/view_friends/:id", async (req, res) => {
    try {
        const{id} = req.params;

        const viewFriendByID = await pool.query("SELECT * from friends WHERE friend_id = ($1)", [id]);
        res.json(viewFriendByID);
    } catch(err) {
        console.error(err);
    };
});

//update friend
app.put("/update_friends/:id", async (req, res) => {
    try {
        const{id} = req.params;
        const {name} = req.body;

        const updateFriendByID = await pool.query("UPDATE friends SET name = $1 WHERE friend_id = $2",
        [name, id]
        );
        res.json("Your friendslist was successfully updated!");
    } catch(err) {
        console.error(err);
    };
});

app.listen(port, () => {
    console.log(`Your server is being hosted on localhost:${port}`)
});