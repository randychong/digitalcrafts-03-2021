// Create a JS function to transform the object values to an array
const obj = {
    person: {
        name: 'Tyler',
        age: 28,
        height: '180cm'
    },
    hobbies: {
        sport: 'Football',
        game: 'Overwatch'
    }
}

const array = []
const person = [
    [obj.person.name],
    [obj.person.age],
    [obj.person.height]
]
const hobbies = [
    [obj.hobbies.sport],
    [obj.hobbies.game]
]
array.push(person, hobbies)
console.log(array)

// function objectToArray(object){
//     let array = []
//     for(let key in object){
//         array.push(object[key])
//     }
//     return array
// }
// console.log(objectToArray(obj))

// const num = 5
// for (let i = 0; i < num; i++){
//     num + 1
//     console.log(num + 1)
// }

const factorial = (num) => {
    let total = 1;
    let newTotal;
    for (let i = 1; i < num; i++) {
        newTotal = i * total;
        total += newTotal;
    }
    return total;
}

console.log(factorial(5))

function factorialize(num) {
    if (num < 0){
        return -1
    } else if (num === 0){
        return 1
    } else {
        return (num * factorialize(num - 1))
    }
}

function factorialize(num) {
    let result = num
    if (num === 0 || num === 1) {
        return 1
    }
    while (num > 1) {
        num--
        result *= num
    }
    return result
}
//callback function is like eventlistener or settimeout, basically a function passed to another function