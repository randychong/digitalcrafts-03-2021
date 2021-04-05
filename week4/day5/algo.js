const strArray = str.split("");
let newArray = [];

for (let i = str.length; i >= 0; i--) {
    newArray.push(strArray[i])
}

const result = newArray.join("")
return newArray;