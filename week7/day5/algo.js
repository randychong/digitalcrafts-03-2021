const array1 = [33, 4, 88, 1, 25];
console.log(array1.map((i) => i + 5).filter((i) => i % 2).length);

const substring = (str1, str2) => {
    const newStr1 = str1.replace(/\s/g, "").repeat(2);
    const newStr2 = str2.replace(/\s/g, "")
    let result = newStr1.includes(newStr2)
	return result
};
console.log(substring("concept", "cep")); // true
console.log(substring("aaabbbaabbab", "aaba")); // false
console.log(substring("the brown cow jumped over the moon", "moonthe brown cow")); // true
console.log(substring("baananana", "nab")); // true
console.log(substring("this wont work", "r u shore")); // false

const findX = (equation) => {
    const split = equation.split(" ");
    const cache = {
        num1: split[0],
        num2: split[2],
        operator: split[1],
        answer: split[4]
    };
    const operatorObject = {
        "*": "/",
        "/": "*",
        "-": "+",
        "+": "-"
    };

    let answer;
    let intendedAnswer;

    if (cache.answer.includes("x")) {
        answer = cache.answer;
        intendedAnswer = eval(split.slice(0, 3).join(" "));
    } else if (cache.num1.includes("x")) {
        answer = cache.num1;
        intendedAnswer = eval(
            `${cache.answer} ${operatorObject[cache.operator]} ${cache.num2}`
            );
    } else if (cache.num2.includes("x")) {
        answer = cache.num2;
        intendedAnswer = eval(
            `${cache.answer} ${operatorObject[cache.operator]} ${cache.num1}`
            );
    }

    const xIndex = answer.toString().indexOf("x");

    return intendedAnswer.toString().charAt(xIndex);
};
// Part 1
console.log(findX("10 * x = 20")); // returns 2
console.log(findX("2 + 4 = x")); // returns 6
console.log(findX("x4 - 11 = 33")); // returns 4
// Part 2
console.log(findX("1x0 * 2 = 200")); // returns 0
console.log(findX("80 / 2 = x0")); // returns 4
console.log(findX("111 + 11x = 222")); // returns 1