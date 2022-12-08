let car = {
    make: "Honda",
    getBrand() {
        return this.make;
    },
};

console.log(car.getBrand()); // Honda

let brand = car.getBrand; // in this line the getBrand method
// is stored inside brand variable

console.log(brand()); // undefined because this refers now to the window obj

// to fix it we have to bind the getBrand method

brand = car.getBrand.bind(car);
console.log(brand()); // now the code works and we get Honda.
