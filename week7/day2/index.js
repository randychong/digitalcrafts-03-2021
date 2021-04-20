const express = require("express");
const app = express();

const port = 3006;

app.listen(port, () => {
    console.log(`Your server is being hosted on localhost:${port}`);
});