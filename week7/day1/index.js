console.log("anyeonghaseyo");

const http = require("http");
const express = require("express");
const app = express();
const address ="127.0.0.1";
const PORT = 3001;

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

// server.listen(PORT, address, () => {
//     console.log(`server is on ${address}:${PORT}`)
// });