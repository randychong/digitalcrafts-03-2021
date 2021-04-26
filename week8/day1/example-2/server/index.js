const express = require("express");
const app = express();
const port = 3010;
const es6Renderer = require("express-es6-template-engine")

const people = [
    {people_id: 1, name: "Jonathan", age: 19, job: "league of legends gamer", listOfKnownAliases: ["Jon", "Jeff"]}
]

app.engine("html", es6Renderer);
app.set("views", "../template")
app.set("view engine", "html")

app.get("/", (req, res) => {
    res.render("people")
});

app.get("/person/:id", (req, res) => {
    const {id} = req.params
    const person = people.find(person => 
        person.id.toString() === id);

    if(person) {

    } else {
        res.status(404).semd(`That user does not exist, there are no users with an id of ${id}.`)
    }
});

app.listen(port, () => {
    console.log(`Your server is being hosted on localhost:${port}`)
});