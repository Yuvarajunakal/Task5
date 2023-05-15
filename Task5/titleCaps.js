// Convert all the strings to title caps in a string array (using Arraow Function)

let titleCaps = (array) => {
    let titleCaps = [];
    for (let value of array) {
        titleCaps.push(value.slice(0, 1).toUpperCase() + value.slice(1));
    }
    return titleCaps;
}

let stringArray = ['I', 'will', 'create', 'a', 'new', 'programme'];
console.log(titleCaps(stringArray));

