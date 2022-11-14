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

