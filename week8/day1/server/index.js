const express = require("express");
const app = express();
const port = process.env.PORT || 3009; 

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Welcome to Randy's Node Server!")
});

app.listen(port, () => {
    console.log(`Your server is being hosted on localhost:${port}`)
});