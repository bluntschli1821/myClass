//1. nested if loop
console.log("")
console.log("nested if loop");
console.log("Even And Odd Numbered Loop");
console.log("");
for (var i = 1; i <= 5; i++) {
    if (i % 2 == 0) {
        console.log(i + " even number");
    } else {
        console.log(i + " odd number");
    }
}

console.log("")
console.log("nested if loop");
console.log("Remainders using an if else loop in a for loop");
console.log("")
for (var i = 1; i <= 5; i++) { // The iteration i<=5 can be any number
    var rem = i % 2;
    if (i % 2 == 0) {
        console.log(i + ` even, remaining ${rem}`);
    }
    else {
        console.log(i + ` odd, remaining ${rem}`);
    }
}

//2. Nested for loop(Loop count)
//For readability pls practice the use of spaces in your code
console.log("");
console.log("nested for loop");
console.log("Class Count with a for loop nested in another for loop ");
for (var i = 1; i <= 3; i++) {
    console.log("Class " + i);
    for (var j = 1; j <= 3; j++) {
        console.log(j + " time(s)");
    }
}

//3. for loop in a function
console.log("");
console.log(" `For` loop in a function");
console.log("");
console.log("Simple Multiplication Table");
console.log("");
var timesTable = function (number) {
    for (var i = 1; i <= 6; i++) {
        var answer = number * i;
        console.log(`${number} x ${i} = ${answer}`);
    }
}
timesTable(1)

console.log("");
console.log("Simple Subtraction Table");
console.log("");
var timesTable = function (number) {
    for (var i = 1; i <= 6; i++) {
        var answer = number - i;
        console.log(`${number} - ${i} = ${answer}`);
    }
}
timesTable(1)

console.log("");
console.log("Simple Addition Table");
console.log("");
var timesTable = function (number) {
    for (var i = 1; i <= 6; i++) {
        var answer = number + i;
        console.log(`${number} + ${i} = ${answer}`);
    }
}
timesTable(1)

console.log("");
console.log("Simple Division Table");
console.log("");
var timesTable = function (number) {
    for (var i = 1; i <= 6; i++) {
        var answer = number / i;
        console.log(`${number} / ${i} = ${answer}`);
    }
}
timesTable(1)

//4. Using a for loop to iterate through an array
console.log("");
console.log("Iterating through");
console.log("A normal iteration through an array of strings (objects)");
console.log("");
var belongings = ["Generator", "Fridge", "Chair", "Plates", "Cups", "Torch"];

for (var i = 0, bel = belongings.length; i < bel; i++) {
    console.log("I own a " + belongings[i]);
}


//5. For loop using an array within a function

console.log("");
console.log("for loop using an array within a function");
console.log("A callback function where the callback is the array of belongings objects");
console.log("");
var belonging = belongings

var items = (materialWealth) => {
    for (var i = 0, itemsOwned = belonging.length; i < itemsOwned; i++) {
        console.log("I already said, I own a " + materialWealth[i]);
    }
    //  in this case, we made the callback "items(belonging) which was 
    // equated to the arrat belongings the value for materialWealth"
}
items(belonging);

//6. While loops

console.log("");
console.log("Decrement While loop");
console.log("");

var number = 5

while (number > 0) {
    console.log(number);
    number--;
}

console.log("");
console.log("Increment While loop");
console.log("");

while (number >= 0 && number < 6) {
    console.log(number);
    number++;
}

// The Do/While loop
console.log("");
console.log("Do/While loops");
console.log("this runs every time the loop is called so long as the while loop condition is true");


var i = m = 2;

do {
    console.log(i);
    i++;
} while (i <= 10);

// 12/05/2024
//Try

k = Math.PI

if (i == m) {
    if (m == k) {
        console.log(`${i} is equal to ${k}`);
    }
} else {
    console.log(`${i} is not equal to ${k}`);
}

// The switch statement

console.log("");
console.log("switch statement");
console.log("");

var day = "Tuesday";

// Array methods

console.log("");
console.log("Array methods");
console.log("");
console.log("1. The array.sort method");
console.log("");

console.log("Sorting numbers using the array.sort method");

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numbers.sort((a, b) => (a - b));

console.log(numbers)

console.log("");
console.log("2. The array.filter method");
console.log("");

console.log("Filtering even/odd numbers using the array.filter method");

console.log("Even Numbers");
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers)

console.log("Odd Numbers");
const oddNumbers = numbers.filter(num => num % 2 !== 0);
console.log(oddNumbers)


console.log("");
console.log("1. Filtering strings that contain a specific word using the array.filter method");
console.log("");

const words = ["Hello", "Hello World", "Hello Samantha", "Well thank you", "Hello to you too", "Thanks",]

const filteredWords = words.filter(words => words.includes("Hello"));
console.log("Filtered words: " + filteredWords);

console.log("");
console.log("2. Filtering objects that contain a specific property/value using the array.filter method");
console.log("");

const people = [
    { name: "John", age: 16 },
    { name: "Emmanuel", age: 45 },
    { name: "Jessica", age: 20 },
]

const adults = people.filter(person => person.age >= 18);
console.log(adults);

console.log("");
console.log("2. The array.map method");
console.log("");

console.log("1. Doubling numbers using the map function");

const doubledNumbers = numbers.map(number => number * 2);
console.log(doubledNumbers);

console.log("");
console.log("Combining the above functions together with the exception of the sort function");
console.log("");



processUsers = (users) => {
    const filteredUsers = users.filter(user => user.age >= 18);
    const transformedUsers = filteredUsers.map(user => {
        if (user.role === "admin") {
            return { ...user, accessLevel: "Fully authenticated" }
        } else {
            return { ...user, accessLevel: "Limited authentication" }
        }
    })
    return transformedUsers
}

const users = [
    { id: 1, name: "Emma", age: 20, role: "admin" },
    { id: 2, name: "Janet", age: 13, role: "user" },
    { id: 3, name: "Dominic", age: 2, role: "user" },
    { id: 4, name: "Elsa", age: 5, role: "user" },
    { id: 5, name: "James", age: 10, role: "admin" },
    { id: 6, name: "Jammie", age: 50, role: "admin" },
    { id: 7, name: "Ephraim", age: 9, role: "user" },
    { id: 8, name: "Earnest", age: 25, role: "admin" },
    { id: 9, name: "Geoffery", age: 30, role: "admin" },
];

const processedUsers = processUsers(users);
console.log(processedUsers);

console.log("");
console.log("Filtering products using price and location only...");
console.log("");

const productsData = [
    { name: "product 1", image: '', price: 20, location: "Nigeria", description: "Holiday Home", category: "Luxury" },
    { name: "product 2", image: '', price: 2, location: "Angola", description: "MoonWay House", category: "House" },
    { name: "product 3", image: '', price: 24, location: "Siberia", description: "2 Bodroom Flat", category: "GetAway" },
    { name: "product 4", image: '', price: 29, location: "Mozambique", description: "Duplex ", category: "Luxury" },
    { name: "product 5", image: '', price: 40, location: "New York", description: "Bungalow", category: "House" },
    { name: "product 6", image: '', price: 50, location: "Tanzania", description: "Block of Flats", category: "GetAway" },
]

// Case 1.

const firstFilter = productsData.filter(product => {
    return (
        product.price === 20 || product.location === 'Tanzania' && product.description.includes('H')
    )
});

console.log(firstFilter);

console.log("");
console.log("Filtering products using category only...");
console.log("");

// Case 2.

const secondFilter = productsData.filter(product => product.category === "GetAway")

console.log(secondFilter);

console.log("");
console.log("Filtering products using price, location and category");
console.log("");

// Case 3.

const thirdFilter = productsData.filter(product => product.price === 20 || 2 || product.category === "GetAway" || product.location === "New York")

console.log(thirdFilter);