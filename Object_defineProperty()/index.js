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
delete car["max-speed"]; // stil able to delete properties
car.color = "black"; // and modify properties

console.log(car);

// Object.defineProperty to define an accessor property getter

const newObj = { data: false };

/* The getData prop returns whatever 
   value is stored in newObj.data */
Object.defineProperty(newObj, "getData", {
    get() {
        return this.data;
    },
});

console.log(newObj.getData); // false

// Object.seal()

const newObj2 = {
    data: 55,
    get info() {
        return this.data;
    },
};
Object.seal(newObj2); /* now we can't add new properties and 
                         configurable flag of existing properties are set to false */

newObj2.newProp = 10;

console.log(newObj2); // {data: 55} without newProp
console.log(newObj2.info);

// Setter example

const teacher = { name: "John", lastName: "Smith" };

Object.defineProperty(teacher, "setName", {
    set(value) {
        this.name = value;
    },
});

teacher.setName = "Mike";

console.log(teacher); // {name: 'Mike', lastName: 'Smith'}

const person = {
    firstName: "Eftimie",
    lastName: "Budescu",

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(value) {
        const parts = value.split(" ");
        this.firstName = parts[0];
        this.lastName = parts[1];
    },
};

console.log(person); // {firstName: 'Eftimie', lastName: 'Budescu'}
console.log(person.fullName); // Eftimie Budescu
person.fullName = "Andreea Stancu";
console.log(person); // {firstName: 'Andreea', lastName: 'Stancu'}
console.log(person.fullName); // Andreea Stancu
person.firstName = "luiza";
console.log(person.firstName);

const obj1 = {
    firstName: "Eftimie2",
    lastName: "Budescu2",
};

Object.defineProperty(obj1, "fullName", {
    get() {return `${this.firstName} ${this.lastName}`},
    set(value) {
        const parts = value.split(" ");
        this.firstName = parts[0];
        this.lastName = parts[1];
    },
})

obj1.fullName = "anita maria2"
console.log(obj1);