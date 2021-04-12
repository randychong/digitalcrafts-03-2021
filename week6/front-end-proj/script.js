const mainContainer = document.querySelector(".main-container")

const getRecipe = async () => {
    let data = await fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?query=burger", {
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
        img.src = `https://spoonacular.com/recipeImages/${json.results[`${counter}`].id}-556x370.jpg`;
        const recipe = document.createElement("p");
        recipe.innerHTML = json.results[`${counter}`].title;
        mainContainer.append(img, recipe);
        counter += 1;
    }
}
getRecipe();