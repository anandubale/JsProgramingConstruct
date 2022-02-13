readline = require("readline-sync")

let day = readline.question("Enter the Day : ")

let month = readline.question("Enter the Month : ")

if ( day > 20 && day <= 31 && month == "march"){
    console.log("True");
} else if ( day >= 1 && day <= 30 && month == "april"){
    console.log("True");
} else if ( day >= 1 && day <= 31 && month == "may"){
    console.log("True");
} else if ( day >= 1 && day <= 20 && month == "june"){
    console.log("True");
} else {
    console.log("False");
}


//Flip Coin


var toss = Math.random() * 2;
var floor = Math.floor(toss)
if(floor === 0){
    console.log("Head")
} else if(floor === 1)
{
    console.log("Tails")
}


//Leap Year:

readline = require("readline-sync")
let year = readline.question("Enter the Year To check Leap Year: ")

if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log(year + ' is a leap year');
} else {
        console.log(year + ' is not a leap year');
}


//Minimum Maximum

const lengthOfArray = 5;

var numbers = new Array();
for (let i = 0; i < lengthOfArray; i++){
    let randomNumber = Math.floor(Math.random() * 100) + 1 ;
    numbers[i] = randomNumber;
}
console.log(numbers);

let MINIMUM_NUMBER = numbers[0];
let MAXIMUM_NUMBER = numbers[0];

for (let j = 0; j < lengthOfArray; j++){
    if(MAXIMUM_NUMBER < numbers[j]){
        MAXIMUM_NUMBER = numbers[j];
    }
    
    if(MINIMUM_NUMBER > numbers[j]){
        MINIMUM_NUMBER = numbers[j];
    }        

}
console.log("Maximum Number : " + MAXIMUM_NUMBER);
console.log("Minimum Number : " + MINIMUM_NUMBER);