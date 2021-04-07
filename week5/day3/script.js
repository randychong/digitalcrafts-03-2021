$(document).ready(() => {
    console.log("we are in jquery");
});

$();

const divContainer = document.createElement("div")
const $jdivCOntainer = $("<div>");

const $header3 = $("<h3>", {
    text: "Randy is Here",
});

$header3.css("color", "blue");

$jdivCOntainer.append($header3);
console.log($jdivCOntainer);
$(document.body).append($jdivCOntainer);

$.ajax({
    url: "https://pokeapi.co/api/v2/pokemon/lucario",
    header : {
        Accept: "application/json",
    },
}).then(res => {
    console.log(res);
    })
    .catch((valueReturned) => {
        console.error(valueReturned);
    });