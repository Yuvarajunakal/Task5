//  Return median of two sorted arrays of the same size.

(function () {
    let numbers = [1, 2, 4, 5, 7, 12, 35, 12, 31];
    length = Math.ceil((numbers.length-1) / 2);
    ((length % 2) == 0) ? console.log(numbers[length]) : console.log(`${(numbers[length]+numbers[length -1 ])/2}`);
})()