class Product{
    
    #name="keyboard"; 
    
    constructor(n, p){
        this.#name = n; 
        this.price = p;
    }

    tellName(){
        console.log("name:-", this.#name);
    }

    static classMethod(){
        console.log(`I am a class method`);
    }
}

const myProd = new Product("mouse", 100)
myProd.tellName()
// Product.classMethod()