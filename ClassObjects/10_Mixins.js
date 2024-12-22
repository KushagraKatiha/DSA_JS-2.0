const CanRun = (Base) =>
    class extends Base {
        run() {
            console.log("I can run!");
        }
    };

const CanJump = (Base) =>
    class extends Base {
        jump() {
            console.log("I can jump!");
        }
    };

class Animal {
    eat() {
        console.log("I can eat!");
    }
}

// Create a composite class
class Dog extends CanJump(CanRun(Animal)) {}

const dog = new Dog();
dog.eat();  // Outputs: I can eat!
dog.run();  // Outputs: I can run!
dog.jump(); // Outputs: I can jump!
