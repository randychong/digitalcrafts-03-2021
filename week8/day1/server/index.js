const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3009;
const pool = require("./db.js");
const pw = require("./datakey");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Welcome to Randy's Node Server!")
});

//add to shopping list
app.post("/shoppinglist", async (req, res) => {
    try {
        const {productName} = req.body;
        const {quantity} = req.body;
        const {price} = req.body;

        const newItem = await pool.query("INSERT INTO products (productName, quantity, price) VALUES($1, $2, $3)",
        [productName, quantity, price]
        );

        res.json("You've added a new item to your shopping list!")

    } catch(err) {
        console.error(err);
    }
});

app.listen(port, () => {
    console.log(`Your server is being hosted on localhost:${port}`)
});