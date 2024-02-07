//1. nested if loop
console.log("nested if loop");
console.log("");
for (var i = 1; i <= 12; i++) {
    if (i % 2 == 0) {
        console.log(i + " is an even number");
    } else {
        console.log(i + " is an odd number");
    }
}

for (var i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log(i + ` Hooray there's no remainder`);
    }
    else {
        console.log(i + ` You have a remainder`);
    }
}

//2. Nested for loop(Loop count)
//For readability pls practice the use of spaces in your code
console.log("");
console.log("nested for loop");
console.log("");
for (var i = 1; i <= 10; i++) {
    console.log("Class " + i);
    for (var j = 1; j <= 3; j++) {
        console.log(j + " time(s)");
    }
}

//3. for loop in a function
console.log("");
console.log("for loop in a function");
console.log("");
var timesTable = function (number) {
    for (var i = 1; i <= 12; i++) {
        var answer = number * i;
        console.log(`${number} x ${i} = ${answer}`);
    }
}
timesTable(12)

//4. Using a for loop to iterate through an array
console.log("");
console.log("Iterating through");
console.log("");
var belongings = ["Generator", "Fridge", "Chair", "Plates", "Cups", "Torch"];

for (var i = 0, bel = belongings.length; i < bel; i++) {
    console.log("I own a " + belongings[i]);
}


//5. For loop using an array within a function
console.log("");
console.log("for loop using an array within a function");
console.log("");

var belongings = ["Generator", "Fridge", "Chair", "Plates",]

var items = function (materialWealth) {
    for (var i = 0, itemsOwned = belongings.length; i < itemsOwned; i++) {
        console.log("I already said, I own a " + materialWealth[i]);
    }
}
items(belongings);

//6. While loops

console.log("");
console.log("While loops");
console.log("");

var number = 10

while (number > 0) {
    console.log(number);
    number--;
}

while (number >= 0 && number < 100) {
    console.log(number);
    number++;
}

// The Do/While loop
console.log("");
console.log("Do/While loops");
console.log("");



