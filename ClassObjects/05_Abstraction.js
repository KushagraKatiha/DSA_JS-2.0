class CoffeeMachine {
    #waterAmount = 0; // Private field

    constructor(power) {
        this.power = power; // Public attribute
    }

    // Public method
    addWater(amount) {
        if (amount < 0) throw new Error("Amount must be positive!");
        this.#waterAmount += amount;
    }

    // Private method
    #boilWater() {
        console.log("Boiling water...");
    }

    // Public method
    makeCoffee() {
        if (this.#waterAmount === 0) {
            console.log("Add water first!");
        } else {
            this.#boilWater();
            console.log("Making coffee...");
        }
    }
}

// Usage
const myMachine = new CoffeeMachine(2000);
myMachine.addWater(500);
myMachine.makeCoffee(); // Boiling water... Making coffee...
