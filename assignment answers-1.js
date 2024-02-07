// QUESTION ONE
var num = 7;
answer = num %= 2;

// answer = num = num%2;

if (answer == 0){
  console.log("Even");
}else{
  console.log("Odd")
}

//QUESTION TWO
var age = 21;
if (age >= 18){
    console.log("Eligible to vote")
}else{
    console.log("Not eligible to vote")
}

//QUESTION THREE
const ab = 21
const db = 12
if (ab > db){
  console.log(ab)
}else{
  console.log(db)
}

//QUESTION FOUR
var year = 2004;
answer = year %= 4;
if (answer == 0){
  console.log("Leap year")
}else{
  console.log("Not a Leap year")
}

//QUESTION FIVE
var angle1 = 85
var angle2 = 90
var angle3 = 95
if ((angle1<90)&&(angle2<90)&&(angle3<90)){
  console.log("acute triangle");
}else if ((angle1 == 90)||(angle2==90)||(angle3==90)){
  console.log("right triangle ");
}else{
  console.log("obtuse angle")
}

//QUESTION SIX
var digit = 0
if (digit > 0){
  console.log("Positive");
}else if (digit < 0){
  console.log("Negative");
}else if (digit == 0){
  console.log("Zero");
}

//QUESTION SEVEN
var score = 60;
const completedAssignment = true;
if ((score >= 60) && completedAssignment){
  console.log("Pass");
}else{
  console.log("Fail");
}

//QUESTION EIGHT
var integer = 1
if ((integer >= 50)&&(integer <= 100)){
  console.log("Within Range");
}else{
  console.log("Out of range")
}

//QUESTION NINE
var age =17;
const isStudent = true;
if ((age >= 18)&&(age <=25)|| isStudent){
    console.log("Eligible for Discount")
}else{
    console.log("Not Eligible for Discount")
}
