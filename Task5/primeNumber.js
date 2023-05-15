// Return all the prime numbers in an array

let primeNumber = (numbers) => {
    let primeNumber = [];
    for (let number of numbers) {
        let isPrime = true;
        if (number == 1) {
            isPrime = false;
        }
        for (i = 2; i < number; i++) {
            if ((number % i) == 0) {
                isPrime = false;
                break;
            }
        }
        isPrime ? primeNumber.push(number) : null;
    }
    return primeNumber;
}

let numbers = [1, 5, 7, 2, 9, 11, 16, 17, 21, 42]
console.log(primeNumber(numbers));