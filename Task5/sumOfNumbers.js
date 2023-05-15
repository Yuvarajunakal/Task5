// Sum of all numbers in an array (using arrow function)

let sumOfNumbers = (array) => {
    let sumOfNumbers = 0;
    for (let value of array) {
        sumOfNumbers += value;
    }
    return sumOfNumbers;
}

let numbers = [2, 12, 54, 22, 33, 3, 5];
console.log(sumOfNumbers(numbers));