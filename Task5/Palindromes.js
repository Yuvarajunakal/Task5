// Return all the palindromes in an array. (using arrow function)

let palindromes = (string) => {
    string = string.trim().split(' ');
    let palindromes = [];
    for (let value of string) {
        if (value == value.split('').reverse().join('')) {
            palindromes.push(value);
        }
    }
    return (palindromes.length == 0) ? 'There is no palindromes.' : palindromes
}
let text = 'There is nothing to show in the end.';
console.log(palindromes(text));