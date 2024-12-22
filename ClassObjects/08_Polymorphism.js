class Shape {
    calculateArea() {
        throw new Error("Method 'calculateArea()' must be implemented.");
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    calculateArea() {
        return Math.PI * this.radius ** 2;
    }
}

class Rectangle extends Shape {
    constructor(length, width) {
        super();
        this.length = length;
        this.width = width;
    }

    calculateArea() {
        return this.length * this.width;
    }
}

// Usage
const shapes = [new Circle(5), new Rectangle(10, 20)];

shapes.forEach((shape) => {
    console.log(`Area: ${shape.calculateArea()}`);
});
// Outputs:
// Area: 78.53981633974483
// Area: 200
