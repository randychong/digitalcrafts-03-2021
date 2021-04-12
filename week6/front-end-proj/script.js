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
    const recipe = document.createElement("p");
    const img = document.createElement("img");
    img.src = "https://bit.ly/3wQhljo";
    recipe.innerHTML = json.results[0].title;
    mainContainer.append(img, recipe);
}
getRecipe();