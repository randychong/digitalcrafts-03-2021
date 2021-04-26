const express = require("express");
const app = express();
const port = 3010;
const es6Renderer = require("express-es6-template-engine")

app.engine("html", es6Renderer);
app.set("views", "template")

app.listen(port, () => {
    console.log(`Your server is being hosted on localhost:${port}`)
});