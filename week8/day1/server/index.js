const express = require("express");
const app = express();

const es6Renderer = require("express-es6-template-engine");
app.engine("html", es6Renderer);
app.set("views", "templates");
app.set("view engine", "html");

const cors = require("cors");
const port = process.env.PORT || 3009;
const pool = require("./db.js");
const pw = require("./datakey");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.render("home");
});

//add an item to shopping list
app.post("/create_shoppinglist", async (req, res) => {
    try {
        const {product_name} = req.body;
        const {quantity} = req.body;
        const {price} = req.body;

        const new_item = await pool.query("INSERT INTO products (product_name, quantity, price) VALUES($1, $2, $3)",
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


//update an item from shopping list
app.put("/update_shoppinglist/:id", async (req, res) => {
    try {
        const {product_id} = req.params;
        const {product_name} = req.body;
        const {quantity} = req.body;
        const {price} = req.body;

        const update_list = await pool.query("UPDATE products SET product_name = $1, quantity = $2, price = $3 WHERE product_id = $4",
        [product_name, quantity, price, product_id]
        );

        res.json("Your shopping list has been updated!");

    } catch(err) {
        console.error(err);
    }
});

//delete item from shopping list
app.delete("/delete_shoppinglist/:id" , async (req, res) => {
    try {
        const {product_id} = req.params;

        const remove_item = await pool.query("DELETE FROM products WHERE product_id = $1",
        [product_id]
        );

        res.json("An item has been removed from your shopping list!");

    } catch(err) {
        console.error(err);
    }
});

app.listen(port, () => {
    console.log(`Your server is being hosted on localhost:${port}`)
});