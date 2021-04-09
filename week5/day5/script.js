const isAnagram = (string1, string2) => {
    let var1 = string1.split("").sort().join("");
    let var2 = string2.split("").sort().join("");
    var1 = var1.replace(/\s+/g, '')
    var2 = var2.replace(/\s+/g, '')
    if (var1 == var2) {
        return true
    }
    if (var1 !== var2) {
        return false
    }
}

// Pure letter strings
console.log(isAnagram("hello", "olleh")); // true
console.log(isAnagram("listen", "lidfje")); // false
console.log(isAnagram("listen", "silent")); // true
// // String phrases with spaces (Needs to ignore spaces)
console.log(isAnagram("dormitory", "dirty room")); // true
// // String phrases with punctuation (Needs to ignore punctuation).
// console.log(isAnagram("convers a t i o n", "voices!RANT!ON  !")); // true
// console.log(isAnagram("dkj fsdjfh", "this doesn't work"); // false

const findDuplicates = (numArray) => {
    let arr1 = numArray.sort();
    console.log(arr1);
	return
}
console.log(findDuplicates([1, 2, 3, 4, 5, 1])) // returns 2. '1' occurs twice
// console.log(findDuplicates([1, 2, 2, 2, 2, 3, 2, 3, 2])) // returns 6
// console.log(findDuplicates([12, 12, 1, 2, 12, 22, 11])) // returns 3