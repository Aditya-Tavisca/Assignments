// Write a JavaScript program to compute the sum of an array of integers.
// Example : var array = [1, 2, 3, 4, 5, 6]
// Expected Output : 21

function sumOfArrayElements(dataset) {
    return dataset.reduce((total,value) => total+value);
}

// function sum(total, value) {
//     return total + value;
// }

//const sum=(total,value) => {return total+value};
//  console.log(sum(2,3))

function traditionalWay(dataset) {
    let sum = 0
    for (let i of dataset) {
        sum = sum + i;
    }
    return sum;
}

var dataset = [1, 2, 3, 4, 5, 6]
console.log("The Sum of array elelmts is " + sumOfArrayElements(dataset))
console.log("The Sum of array elelmts is " + traditionalWay(dataset))