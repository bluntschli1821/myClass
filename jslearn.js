const fridges = [1, 2, 3, 4, 10]

console.log(fridges)

var airConditioners = [1, "Den", "tiger", "we", 5]

console.log(airConditioners)

arrayResult = airConditioners.concat(fridges);

console.log(arrayResult)

console.log(typeof arrayResult)

console.log(typeof fridges)

airConditioners.unshift("Hare")

console.log(airConditioners)

airConditioners.pop()

console.log(airConditioners)

airConditioners.push('r')

console.log(airConditioners)

// Objects

var Employee1 = {
    firstName: "Mike",
    lastName: "Doe",
    age: 30,
    heightInMeters: 1.7,
    gender: "male",
    isMarried: true,
    hobbies: ["Reading", "Programming", "Running"],
    address: {
        streetName: "First Eve",
        city: "New York",
        state: "Alabama",
        zipCode: "10001"
    }
},

    Employee2 = {
        firstName: "phillip",
        lastName: "Groove",
        age: 56,
    }

console.log(Employee1)
console.log(Employee2)

var c = 12, a = 24;

example = c += a;

console.log(example)

// The conditional Operator(?:)

example1 = (c > a) ? 12 : 24;

console.log(example1)

example2 = (c < a) ? 12 : 24;

console.log(example2)


/// Case Sensitivity of the code written also matters when writing and running codes in your i.d.e 
if (Employee1.age == 31 && Employee2.age == 56) {
    console.log("You both make the mark")
} else if (Employee1.address == "mike" && Employee2.firstName == "Phillip") {
    console.log("You both make the mark")
} else if (Employee1.address.streetName == "first eve" && Employee2.lastName == "groove") {
    console.log("You both make the mark")
} else {
    console.log("Please just give up")
}

// The While Loop

while (a < c) {
    console.log("'c' is greater than 'a'");
    a++;
}


for (i = 0; i <= c; i++) {
    console.log(i)
}

5
// The return statement

function concatenation(given, driven) {
    var neither;

    neither = given + driven;
    return neither;
}

console.log(concatenation)

console.log(typeof concatenation)

try {
    if (c == 36) {
        console.log("the value of C is : " + c)
    } else {
        console.log("Give the correct number for c!")
    }
} catch (e) {
    console.log("Error in the value for 'c' ")
}