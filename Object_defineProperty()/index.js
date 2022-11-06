//"use strict";
const student = { firstName: "Eftimie", age: 32 };

let descriptor = Object.getOwnPropertyDescriptor(student, "firstName");

console.log(descriptor);
// expected output:
// {value: 'Eftimie', writable: true, enumerable: true, configurable: true}

// we are now redefining the firstName prop
Object.defineProperty(student, "firstName", {
  value: "Budescu",
  writable: false,
});

console.log(Object.getOwnPropertyDescriptor(student, "firstName"));
// expected output
// {value: 'Budescu', writable: false, enumerable: false, configurable: false}

student.firstName = "s";

console.log(student.firstName); // "Budescu"

// Deleting an object property

console.log(student);
// expected output {firstName: 'Budescu', age: 32}

delete student["age"]; // or student.age

console.log(student); // student.age is gone

// Preventing extension of object properties

const car = {
  model: "fiat",
  color: "blue",
  ["max-speed"]: "180 km/h",
};

console.log(car); // {model: 'fiat', color: 'blue', max-speed: '180 km/h'}
Object.preventExtensions(car); /* this method block's us from adding new
                                  properties to the object. */

car.brakes = null;
delete car["max-speed"]  // stil able to delete properties
car.color = "black"      // and modify properties

console.log(car);


