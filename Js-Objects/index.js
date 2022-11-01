// A simple object
const car = {
    wheels: 4,
    color: "red",
    drive: () => {   // This is a method
        console.log("Wroom, Wroom");
    },
};
// Objects store the collection of properties.
// Each property has a key and a value.
/* Key is of type string while the value can be of any type,
   can be functions and then we call them methods. */
car.drive();  // calling the car's drive method

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
student['learns fast'] = false;
console.log(student); // {"age": 21, "learns fast": false}

// Accessing object properties with dot or square bracket notation

console.log(student.age); // dot notation
console.log(student['learns fast']); /* square braket notation is useful
                                        for multi-word properties */