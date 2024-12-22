class Product {
    // Below are the data members
    name;
    description;
    price;
    rating;

    constructor(n, d, p, r){
        console.log(this);
        
        this.name = n;
        this.description = d;
        this.price = p;
        this.rating = r;

        // return 10;  // If you return non-object value it will be ignored
        // return {a: 5, b: 8} // If you return an another object then this object will get returned only
    }
    
    // Below are the member functions
    buy(){
    }

    display(){
        console.log("This from display: ", this);
        
    }
}

const iphone = new Product("iphone", "brand new iPhone", 10000, 4)
console.log(iphone);

iphone.display()



// write a show class
// class Show{
//     price;
//     time;
//     venue;

//     book(){
//     }

//     cancel(){
//     }
// }


function Student(name, course, rollNo){
    this.name = name;
    this.course = course;
    this.rollNo = rollNo;

    this.display = function(){
        console.log(`My properties are ${this.name}, ${this.course}, ${this.rollNo}`);
    }
}

const std1 = new Student("Kaku", "B.Tech", 10)
std1.display()






