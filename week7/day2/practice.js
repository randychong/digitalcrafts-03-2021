const express = require("express");
const app = require();

const port = 3007;

const es6Renderer = require('express-es6-template-engine');
app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(port, () => {
    console.log(`Your server is being hosted on localhost:${port}`);
});