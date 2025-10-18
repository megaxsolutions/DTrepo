

let globalVar="I am global";

const simpleObject={
    name:'James',
    mobile: '0978787878',
    greet(){
        console.log(`Hello my name is: ${this.name}`);
    }
}

function Person(name, age, address) {
    this.name = name;
    this.age = age;
    this.address=address;
    this.greet = function() {
      console.log(`Hi, I’m ${this.name} and I’m ${this.age} years old. from ${address}`);
    };
}

class Person2 {
  constructor(name, age, address) {
    this.name = name;
    this.age = age;
    this.address=address;
  }

  greet() {
    console.log(`Hey! I’m ${this.name}, ${this.age} years old. ${this.address}`);
  }
  multiply(){
      let a=5;
      let b=5;
      console.log('the product is :'+ a*b);  
  }
  addition(){
      let a=5;
      let b=5;
      console.log('the sum is: '+ a+b); 
  }

}

//traditional function

function add(a, b) {
  return a + b;
}

//arrow function
const addArrow = (a, b) => a + b;

// console.log(add(2, 3));       // 5
// console.log(addArrow(2, 3));  // 5

// Lexical `this`
const person = {
  name: "Maria",
  hobbies: ["coding", "reading"],
  showHobbies() {
    this.hobbies.forEach(hobby => {
      console.log(`${this.name} loves ${hobby}`);
    });
  }
};

//person.showHobbies();

// Template Literals
// const product = "Laptop";
// const price = 50000;
// const message=`The ${product} costs ₱${price}.`;
// console.log(message);
