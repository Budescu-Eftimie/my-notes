// Primitives are passed to functions by value.
const myVal = 1;

function incrementVal(someVal) {
    return someVal + 1;
}

console.log(`someVal is: ${incrementVal(myVal)}\nmyVal is: ${myVal}`);
// expected output:
// someVal is: 2
// myVal is: 1

// Objects are passed by referrence.
let myCar = {
    make: "bmw",
    color: "red",
};
console.log(myCar); // {make: "bmw", color: "red"}

function changeColor(car) {
    car.color = "blue";
}
changeColor(myCar);
console.log(myCar); // {make: "bmw", color: "blue"}
