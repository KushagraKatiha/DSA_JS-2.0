// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
// }

// class Dog extends Animal {
//     constructor(name, breed) {
//         super(name); // Calls the constructor of Animal
//         this.breed = breed;
//     }

//     getDetails() {
//         return `${this.name} is a ${this.breed}`;
//     }
// }

// const myDog = new Dog("Buddy", "Golden Retriever");
// console.log(myDog.getDetails()); // Outputs: Buddy is a Golden Retriever


// _________________________________________________________________________ //

// class Animal {
//     speak() {
//         return "Animal makes a noise.";
//     }
// }

// class Dog extends Animal {
//     speak() {
//         return `${super.speak()} Dog barks.`;
//     }
// }

// const myDog = new Dog();
// console.log(myDog.speak()); 
// // Outputs:
// Animal makes a noise. Dog barks.


// ------------------------------------------------------------------------- //

class Animal {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
}

class Dog extends Animal {
    getParentName() {
        return `Parent name: ${super.getName()}`; // Accessing parent method
    }
}

const myDog = new Dog("Buddy");
console.log(myDog.getParentName()); // Outputs: Parent name: Buddy

