$(document).ready(() => {
    console.log("we are in jquery");
});

$();

const divContainer = document.querySelector("div")
const $jdivCOntainer = $("<div></div>");

const $header3 = $('h3', {
    text: "Randy is Here",
});

$jdivCOntainer.append($header3);
console.log($jdivCOntainer);
$(document.body).append($jdivCOntainer);