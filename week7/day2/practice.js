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

app.get('/friends/:handle', (req, res) => {
    const {handle} = req.params;
    const friend = db.find(f => f.handle === handle);

    if (friend) {
        res.render('friend');
    } else {
        res.status(404)
            .send(`no friend with handle ${handle}`)
    }
});

app.listen(port, () => {
    console.log(`Your server is being hosted on localhost:${port}`);
});