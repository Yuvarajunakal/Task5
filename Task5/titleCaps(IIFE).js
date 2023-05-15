//  Convert all the strings to title caps in a string array ( using IIFE)
(function () {
    let caps = [];
    let array = ['there', 'is', 'a', 'function', 'called', 'toUpperCase()', 'to', 'caps', 'the', 'string']
    array.forEach((string) => caps.push(string.slice(0, 1).toUpperCase() + string.slice(1)));
    console.log(caps.join(' '));
})()