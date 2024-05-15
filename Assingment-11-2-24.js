//First Assignment 
const calculateTotal = (prices) => {
    var total = prices.reduce((account, price) => account + price, 0);
    if (total > 100) {
        return total *= 0.9; //+ "a ten percent discount was added to you";
    } else {
        return total;
    }
}
var prices = [20, 30, 40, 50, 60,]
var TotalAmount = calculateTotal(prices);
console.log("Total amount:", TotalAmount);


//Second Assignment
const people = [{ name: "davidson", age: 25 },
{ name: "emmanuel", age: 18 },
{ name: "jonah", age: 40 },
{ name: "joan", age: 6 }]

const filterAdults = (people) => {
    for (person in people) {
        if (people.age >= 18) {
            console.log(` ${people.name} is an adult `);
        } else { console.log(` ${person.name} is not an adult`) }
    }
    // return people.filter(person => person.age >= 18);
}
//const Adults = filterAdults(people);
console.log(filterAdults(people));

//Third Assignment

const capitalizeNames = (names) => {
    return names.map(name => name.charAt(0).toUpperCase() + name.slice(1));
}
const names = ["davidson", "emmanuel", "jonah", "joan"];
console.log(names);
names.sort();
console.log(names);
const capitalizedNames = capitalizeNames(names);
// names.sort(capitalizedNames);
console.log(capitalizedNames);


//Fourth Assignment

const findLongestWord = (sentence) => {
    const words = sentence.split(' ');
    let longestWord = "";
    words.forEach(word => {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    })
    return longestWord;
}
const sentence = "I was mesmerized by his compassionate behaviour toward the other of his team mates";
const longestWord = findLongestWord(sentence);
console.log(longestWord);

// Fifth Assignment
const calculateBMI = (weight, height) => {
    return weight / (height * height);
}

const weight = 70; // in kilograms
const height = 1.75; // in meters
const BMI = calculateBMI(weight, height);
console.log("B.M.I is :", BMI);