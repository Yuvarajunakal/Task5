
let oddNumbers = (array) => {
    let oddNumbers = [];
    for (let value of array) {
        ((value%2)!=1?null:oddNumbers.push(value))
    }
    return oddNumbers;
}

