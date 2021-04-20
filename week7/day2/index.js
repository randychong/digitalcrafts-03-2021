const express = require("express");
const app = express();

const port = 3006;

app.use(express.json())

app.post("/", (req, res) => {
    const {logo, name} = req.body
    const message = `Your logo is ${logo} and your name is ${name}`
    res.send(message);
});

app.get("/about", (req, res) => {
    const message = "Welcome to the about page"
    res.send(message);
});

app.get("/team", (req, res) => {
    const message = "Welcome to the team page"
    res.send(message);
});

app.get("/FAQ", (req, res) => {
    const message = "Welcome to the FAQ page"
    res.send(message);
});

app.listen(port, () => {
    console.log(`Your server is being hosted on localhost:${port}`);
});