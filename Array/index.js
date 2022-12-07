const namesList = ["Ingrid", "Vesna", "Timi", "Romanticu"];
console.log(namesList); // (4) ['Ingrid', 'Vesna', 'Timi', 'Romanticu']

const person = {
    firstName: "Eftimie",
    lastName: "Budescu",
};

// we can push objects to the array
namesList.push(person);
console.log(namesList[4]); // {firstName: 'Eftimie', lastName: 'Budescu'}

// we can push functions to the arra
// or the value returned by a function
const doSomething = () => true;
namesList.push(doSomething);
namesList.push(doSomething());

console.log(namesList); // (7) ['Ingrid', 'Vesna', 'Timi', 'Romanticu', {…}, ƒ, true]

// How to get the length of an array
console.log(namesList.length);

// pop() method
let list = [0, 1, 2, 3];
let lastElement;
lastElement = list.pop();
console.log(lastElement); // 3

list.unshift("newElement");
console.log(list); // ['newElement', 0, 1, 2]
list.shift();
list.push(1, 2, 3);
console.log(list); // [0, 1, 2]
console.log(typeof list); // object

// Array.prototype.splice()

list = [0, 1, 2, 3];
let spliced = list.splice(-3, "2", "1");

console.log(list); // [0, "1", 3]

console.log(spliced); // [1, 2]

list = [0, 1, 2, 3];
spliced = list.splice(-3, "mm", "1");

console.log(list); // [0, "1", 1, 2, 3]

console.log(spliced); // []

// Array.prototype.slice() method

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);

// fruits contains ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
// citrus contains ['Orange','Lemon']

const people = ["Mike", "Andreea", "Andrei", "Timi", "John"];
const peopleSubset = people.slice(1, 2);

console.log(peopleSubset);
// expected output:
// ['Andreea']

// we can push an array to another array

const myArr = [1, 2, 3];

myArr.push([1, 2], 3);

console.log(myArr); // [1, 2, 3, [1, 2], 3]
