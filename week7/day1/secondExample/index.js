const express = require("express");
const app = express();

const port = 3000;
//tell what routes exist so that if you navigate ot them inthe url
// you get back whatever is in res.send
app.get("/",(req,res) => {
    res.send("hello");
});

//tell where your port is and what your app should be listening to
app.listen(port, () => {
    console.log(`server is on ${port}`);
});