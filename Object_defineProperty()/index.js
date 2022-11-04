const student = { firstName: "Eftimie" };

let descriptor = Object.getOwnPropertyDescriptor(student, "firstName");

console.log(descriptor);
// expected output:
// {value: 'Eftimie', writable: true, enumerable: true, configurable: true}

// we are now redefining the firstName prop
Object.defineProperty(student, "firstName", {
    value: "Budescu",
    writable:false
});

console.log(Object.getOwnPropertyDescriptor(student,"firstName"));
// expected output
// {value: 'Budescu', writable: false, enumerable: false, configurable: false}

student.firstName = "s"

console.log(student.firstName);  // "Budescu"