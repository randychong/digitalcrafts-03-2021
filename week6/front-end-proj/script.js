const recipeContainer = document.querySelector(".recipe-container")
const searchButton = document.querySelector(".search-button")

const getRecipe = async () => {
    const search = document.querySelector(".search-input").value
    let data = await fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?query=${search}`, {
        "headers": {
            "x-rapidapi-key": "0eb660dc97msh0b6247972cec6a3p1c8277jsn29d8b3adfdd2",
            "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
        }
    })
    let json = await data.json();
    console.log(json);
    counter = 0;
    for (result of json.results) {
        const img = document.createElement("img");
        img.src = `https://spoonacular.com/recipeImages/${json.results[`${counter}`].id}-480x360.jpg`;

        const url = document.createElement("a");
        url.innerHTML = json.results[`${counter}`].title;
        url.href = json.results[`${counter}`].sourceUrl;

        const recipeCard = document.createElement("div");
        recipeCard.className = "recipe-card"
        
        recipeCard.append(img, url)
        recipeContainer.append(recipeCard);
        counter += 1;
    }
}

searchButton.addEventListener("click", ()=> getRecipe());