console.log("anyeonghaseyo");

const http = require("http");
const express = require("express");
const app = express();
const address ="127.0.0.1";
const PORT = 3001;
const {readFile} = require("fs");

app.use(express.json());

// const server = http.createServer((req, res) => {
//     console.log(req.url);

//     if( req.url ==="/hello-something") {
//         res.statusCode = 200;
//         res.end(`${req.url} is where you are at`)
//     } else {
//         res.statusCode = 200;
//         res.setHeader("Content-Type", "text/plain");
//         res.end("hello");
//     }
// })
app.get("/", (req, res) => {
    readFile("./index.html", "utf8", (err, html) => {
        res.send(html)
    })
    // res.end("Hello");
})

app.get("/home", (req, res) => {
    readFile("./homepage.html", "utf8", (err, html) => {
        res.send(html)
    // res.end("Hello another place");
})

app.listen(PORT, () => {
    console.log(`Your server is listening on ${PORT}`);
});

// server.listen(PORT, address, () => {
//     console.log(`server is on ${address}:${PORT}`)
// });