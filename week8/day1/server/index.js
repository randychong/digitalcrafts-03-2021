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
        const {product_name} = req.body;
        const {quantity} = req.body;
        const {price} = req.body;

        const newItem = await pool.query("INSERT INTO products (product_name, quantity, price) VALUES($1, $2, $3)",
        [product_name, quantity, price]
        );

        res.json("You've added a new item to your shopping list!");

    } catch(err) {
        console.error(err);
    }
});

//view shopping list
app.get("/view_shoppinglist", async (req, res) => {
    try {
        const view_list = await pool.query("SELECT * from products ORDER BY product_id");
        res.json(view_list.rows);

    } catch(err) {
        console.error(err);
    }
});

app.listen(port, () => {
    console.log(`Your server is being hosted on localhost:${port}`)
});