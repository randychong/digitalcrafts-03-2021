const express = require("express");
const app = express();
const { readFile } = require("fs")

const port = 3003;

app.use=(express.json())

app.get("/", (req, res) => {
    readFile("./index.html", "utf8", (err, html) => {
    res.send(html);
    });
});

app.get("/home", (req, res) => {
    readFile("./homepage.html", "utf8", (err, html) => {
    res.send(html);
    });
});

app.get("/main", (req, res) => {
    readFile("./main.html", "utf8", (err, html) => {
    res.send(html);
    });
})

app.post("/messages", (req, res) => {
    const {logo, logoname} = req.body

    const message = `Your logo is ${logo} and it is called ${logoname}`;
    res.send(message);
});

app.get("*", (req, res) => {
    readFile("./bad.html", "utf8", (err, html) => {
    res.send(html);
    });
});

app.listen(port, () => {
    console.log(`Your server is being hosted on localhost:${port}`);
});