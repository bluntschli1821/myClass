//Asynchronous Js
console.log("first")
setTimeout(() => {
    console.log("second")
}, 2000);
console.log("third")
console.log("fourth")


//Asynchronous Js/Callback
function greeting(name, callback) {
    console.log(`Hello ${name}`)
    callback()
}

// The Callback function
function callbackFunction() {
    console.log(`I am a callback function`)
}
greeting("Daniel", callbackFunction)


// We will use the age parameter in a callback function and pass it to the callback function, then in a promise function.
age = 13
// The callback function should be called with the following arguments:
function question(name, howOld) {
    console.log(`Hello ${name} are you ${age} years old`);
    howOld();
}
//Calling the howOld() initially  
function howOldFunction() {
    console.log(`Yes madam i am ${age} years old `)
}
question("John", howOldFunction)

// The Promise constructor
function Greeeting(name) {
    return new Promise(
        (resolve, reject) => { console.log(`Hello ${name}`); resolve(); })
}
// function callbackFunction() {
//     console.log(`I am a callback function`)
// }
Greeeting("Daniel").then(() => {
    callbackFunction();
}).catch(error => { console.log('Error ', error); });

// The Promise constructor an alternative way to check it(throwing errors into the constructor)
function aGreeting(name) {
    return new Promise((resolve, reject) => {
        if (name === "error") {
            reject("please provide a name")
        } else {
            console.log(`Hello ${name}`);
            resolve();
        }
    });
}
function aGreetingFunction() {
    console.log(`YOu are welcome`);
}
aGreeting("Daniel").then(() => {
    aGreetingFunction();
}).catch(error => {
    console.log('Error', error);
});

