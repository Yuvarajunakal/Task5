// Sum of all numbers in an array(in IIFE)

(() => {
    let numbers = [1, 5, 66, 3, 5, 7, 9, 24, 65, 72];
    console.log(numbers.reduce((a, b) => a + b));
})()