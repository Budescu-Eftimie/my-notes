// A simple object
const car = {
    wheels: 4,
    color: "red",
    drive: () => {
        // This is a method
        console.log("Wroom, Wroom");
    },
};
// Objects store the collection of properties.
// Each property has a key and a value.
/* Key is of type string while the value can be of any type,
   can be functions and then we call them methods. */
car.drive(); // calling the car's drive method

// Get keys of object

let keys = Object.keys(car);
console.log(keys); // ["wheels", "color", "drive"]

// Get the values of object

let values = Object.values(car);
console.log(values); // [4,"color", f]

// Get entries of object =>
// [key, value] pair of the Object

let entries = Object.entries(car);
console.log(entries); // [["wheels": 4],["color": "red"],["drive":f]]

// Creating empty objects
const student = new Object();
const teacher = {};

// Add properties to an object

student.age = 21;
student["learns fast"] = false;
console.log(student); // {"age": 21, "learns fast": false}

// Accessing object properties with dot or square bracket notation

console.log(student.age); // dot notation
console.log(student["learns fast"]); /* square braket notation is useful
                                        for multi-word properties */

// Using bracket notation to access a property via its key

const cars = {
    ferrari: "california",
    porsche: "911",
    bugatti: "veiron",
};

let model = "ferrari";

console.log(cars[model]); /* no strings are around key as it is 
                           a variable name and not a string */

// Objects in javascript are copied by reference
const secondCar = cars;
console.log(secondCar.bugatti); // "veiron"
secondCar.ford = "focus";
console.log(cars); /* {ferrari: 'california', porsche: '911',  
                      bugatti: 'veiron', ford: 'focus'} */

console.log(secondCar == cars); // true
console.log(secondCar === cars); // true

const emptyObj1 = {};
const emptyObj2 = {};
emptyObj1 == emptyObj2; // false
emptyObj1 === emptyObj2; // false

// Shallow copying objects

const person = {
    age: 27,
    gender: "female",
};

const secondPerson = Object.assign({}, person);

console.log(secondPerson); // {age: 27, gender: 'female'}
secondPerson.gender = "male";

console.log(secondPerson); // {age: 27, gender: 'male'}
console.log(person); /* {age: 27, gender: 'female'}
                              original obj is intact   */
console.log(secondPerson == person); // false

let obj = {
    a: 1,
    b: { c: 2 },
};

let newObj = Object.assign({}, obj);
console.log(newObj); // { a: 1, b: { c: 2} }

obj.a = 10;
console.log(obj); // { a: 10, b: { c: 2} }
console.log(newObj); // { a: 1, b: { c: 2} }

newObj.b.c = 30;
console.log(obj); // { a: 10, b: { c: 30} }
console.log(newObj); // { a: 20, b: { c: 30} }

