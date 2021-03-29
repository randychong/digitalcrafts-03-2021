// let height = "6ft"
// let weight = "140lbs"
// let JoesDimension = `Joes height is ${height} and he weighs ${weight}`
// console.log(JoesDimension)

// //tells you what type of value the variable is: string, number, boolean etc.
// console.log(typeof JoesDimension)

//for in is for objects
let singlePizza = {
    firstPizza: {
        crust: "cheese-filled",
        toppings: ["cheese", "pepperoni", "sausage", "pineapple", "seaweed", "cream cheese"],
        size: "large",
        sauce: ["mango habanero"]
    },
}

for(const pizza in singlePizza){
    console.log(singlePizza[pizza]);
}
//for of is for arrays