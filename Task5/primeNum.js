
(function () {
    let numbers = [1, 2, 4, 6, 8, 7, 11, 13, 16, 17, 23, 21];
    let isPrime = numbers.filter((num) => {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return num > 1;
    })
    console.log(isPrime);
})()