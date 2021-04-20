const express = require("express");
const app = express();
const { readFile } = require("fs");

const port = 3004;

app.get("/", (req, res) => {
    readFile("./index.html", "utf8", (err, html) => {
        res.send(html);
    });
});
