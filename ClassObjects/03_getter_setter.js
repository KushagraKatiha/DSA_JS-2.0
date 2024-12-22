class Product{
    #name;

    // getName(){
    //     console.log(this.#name);
    // }

    // setName(n){
    //     this.#name = n
    // }

    get name(){
        console.log(this.#name);
    }

    set name(n){
        this.#name = n
    }
}

const prod1 = new Product()
prod1.name = "Rahul";
prod1.name;

