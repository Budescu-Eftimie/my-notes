let car = {
    make: "Honda",
    getBrand() {
        return this.make;
    },
};

console.log(car.getBrand()); // Honda

let brand = car.getBrand; // in this line the getBrand method
                          // is stored inside brand variable 

console.log(brand());    // undefined










