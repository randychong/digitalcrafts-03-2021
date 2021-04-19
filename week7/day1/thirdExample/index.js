const express = require("express");
const app = express();
const { readFile } = require("fs")

const port = 3003;

app.get("/", (req, res) => {
    res.send("anyeonghaseyo")
});

app.get("/home", (req, res) => {
    res.send("anyeonghaseyo home");
});

app.post("/messages", (req, res) => {
    const message ="anyeonghaseyo";
    res.send(message);
})

app.get("*", (req, res) => {
    const message ="bad anyeonghaseyo";
    readFile("./index.html", "utf8", (err, html))
    res.send(html);
});

app.listen(port, () => {
    console.log(`Your server is being hosted on localhost:${port}`);
});