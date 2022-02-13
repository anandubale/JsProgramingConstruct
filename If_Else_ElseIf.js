//Arithmatic Operation:

let a = 25;
let b = 56;
let c = 95;

let operation1 = a + b * c;
let operation2 = a % b + c;
let operation3 = a + b / c;
let operation4 = a * b + c;

let MAXIMUM_NUMBER = operation1;
let MINIMUM_NUMBER = operation1;
//MAXIMUM_NUMBER
if(MAXIMUM_NUMBER < operation2){
    MAXIMUM_NUMBER = operation2;
} 
if(MAXIMUM_NUMBER < operation3){
    MAXIMUM_NUMBER = operation3;
} 
if(MAXIMUM_NUMBER < operation4){
    MAXIMUM_NUMBER = operation4;
}
//MINIMUM NUmBER
if(MINIMUM_NUMBER > operation2){
    MINIMUM_NUMBER = operation2;
} 
if(MINIMUM_NUMBER > operation3){
    MINIMUM_NUMBER = operation3;
} 
if(MINIMUM_NUMBER > operation4){
    MINIMUM_NUMBER = operation4;
}
console.log(operation1);
console.log(operation2);
console.log(operation3);
console.log(operation4);
console.log("-------------")
console.log("Maximum Number : "+MAXIMUM_NUMBER);
console.log("Minimum Number : "+MINIMUM_NUMBER);


//Read Number :


readline = require("readline-sync")
let digit = readline.question("Enter Number :: 1,10,100... :: ")

if(digit == 1){
    console.log("ONE")
} else if(digit == 10){
    console.log("TEN")
} else if(digit == 100){
    console.log("HUNDRED")
} else if(digit == 1000){
    console.log("THOUSAND")
} else if(digit == 10000){
    console.log("TEN THOUSAAND")
} else if(digit == 100000){
    console.log("ONE LAKH")
} else if(digit == 1000000){
    console.log("TEN LAKH")
} else {
    console.log("Invalid Input")
}


//Comparison input


readline = require("readline-sync")
let digit = readline.question("Enter Digit between : 1 to 10 : ")

if(digit == 1){
    console.log("ONE")
} else if(digit == 2){
    console.log("TWO")
} else if(digit == 3){
    console.log("THREE")
} else if(digit == 4){
    console.log("FOUR")
} else if(digit == 5){
    console.log("FIVE")
} else if(digit == 6){
    console.log("SIX")
} else if(digit == 7){
    console.log("SEVEN")
} else if(digit == 8){
    console.log("EIGHT")
} else if(digit == 9){
    console.log("NINE")
} else if(digit == 10){
    console.log("TEN")
} else {
    console.log("Invalid Input")
}


//Week Day on input
readline = require("readline-sync")
let digit = readline.question("Enter Digit between  1 to 7  ")

if(digit == 1){
    console.log("MONDAY")
} else if(digit == 2){
    console.log("TUESDAY")
} else if(digit == 3){
    console.log("WEDNESDAY")
} else if(digit == 4){
    console.log("THURSDAY")
} else if(digit == 5){
    console.log("FRIDAY")
} else if(digit == 6){
    console.log("SATURDAY")
} else if(digit == 7){
    console.log("SUNDAY")
} else {
    console.log("Invalid Input")
}