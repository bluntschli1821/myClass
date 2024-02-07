var num = 7;
if (num % 2 == 0){
    console.log ("Even")
}else{
    console.log('Odd')
}
result = (num%2==0) ? "Even" : "Odd";
console.log(result)

const year = 2003;
if((year % 4 == 0 && year % 100 != 0) || year % 400 == 0){
    console.log("Leap year")
}else{
    console.log("Not a leap year")
}