/// Destructuring 
// Array and Object Destructuring


// 1. Array Destructuring

const Array = [1, 2, 3, 4, 5];
// Destructured Array
const [January, February, March, April, May] = Array;
console.log(January);

// Object Destructuring

const Ayibam = {
    age: 25,
    gender: "Male",
    occupation: "NYSC",
    salary: 33000,
}
// Destructured Object
const { age, gender, occupation, salary } = Ayibam;
console.log(salary);


//Spread operators
const imoh = [2, 4, 6, 8,]; //ability = {color: "green", opacity: true, tall: false, }];

const newArray = [...imoh];
const oldArray = { ...Ayibam };

console.log(newArray, oldArray);

/**
 * Making Functions from Variables
 */


// making a variable a function
var desmond = function des() { }

// using the arrow function to make a variable a function
const daniel = () => { }

//  NB: The both makes a variable a function and except the first is an ES5 function and the second is an ES6 function


