// Primitives are passed to functions by value.
let myVal = 1;

function incrementVal(someVal) {
    return someVal + 1;
}

console.log(`someVal is: ${incrementVal(myVal)}\nmyVal is: ${myVal}`);
// expected output:
// someVal is: 2
// myVal is: 1