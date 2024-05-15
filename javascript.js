// LOOPS
// WHILE LOOPS
// while("expression"){
// statements to be executed if expression is true
//}

var countingNumbers = 0

//while(countingNumbers < 10){
//    console.log("Counting Number:" + countingNumbers);
//    countingNumbers++;
//}

//DO WHILE LOOP
// do{
//     console.log("Counting Number:" + countingNumbers);
//     countingNumbers++;
// }while(countingNumbers < 6)

//FOR LOOP
// for ("initialization"; "test condition"; "increment"){
//     statement to be executed if expression is true
// }

// for (gold = 0; gold <= 5; gold++){
//     console.log("Gold coins: "+ gold);
// }

const number = 8;
for (i=1; i<=6; i++){
    let resultAnswer = number * i;
    console.log(`${number} x ${i} = ${resultAnswer}`)
}
// JAVASCRIPT FUNCTION

function myFunction ( ){
    //statements
}

function myFirstFunction (){
    console.log("I am an amazing javascript developer")
}
myFirstFunction()
function mySecondFunction (name){
    console.log(name + " is very beautiful")
}
mySecondFunction("Winnie");

function street (sex, complexion){
    let output;
    output = `Adaobi is ${sex} and is ${complexion}`;
    console.log(output)
    return output;
}
street("female","fair")

function area(length,breadth){
    const area = length * breadth;
    console.log(`${area} cm`)
}
area(10,5)

function celsiusConverter(c){
    var F = (9/5 * c)+32;
    console.log(`${c} degree celsius is equal to ${F} fahrenheit`)
}
celsiusConverter(20)