/*
readline = require("readline-sync")
let digit = readline.question("Enter Digit between  1 to 10  ")

switch(digit) {
    case  "1" :
        console.log("ONE")
        break
    case "2" :
        console.log("TWO")
        break
    case "3" : 
        console.log("THREE")
        break
    case "4": 
        console.log("FOUR")
        break
    case "5": 
        console.log("FIVE")
        break
    case "6": 
        console.log("SIX")
        break
    case "7": 
        console.log("SEVEN")
        break
    case "8": 
        console.log("EIGHT")
        break
    case "9": 
        console.log("NINE")
        break
    case "10": 
        console.log("TEN")
        break
     default : 
        console.log("Invalid Input")    
}



//Reading Number Case:

readline = require("readline-sync")
let digit = readline.question("Enter Number  1,10,100,1000.....  ")

switch(digit) {
    case  "1" :
        console.log("ONE")
        break
    case "10" :
        console.log("TEN")
        break
    case "100" : 
        console.log("HUNDRED")
        break
    case  "1000" : 
        console.log("THOUSAND")
        break
    case  "10000" : 
        console.log("TEN THOUSAND")
        break
    case  "100000" : 
        console.log("ONE LAKH")
        break
    case  "1000000": 
        console.log("TEN LAKH")
        break    
     default : 
        console.log("Invalid Input")    
}

//Unit Conversion:

readline = require("readline-sync")
console.log("Press 1 : Feet to Inch")
console.log("Press 2 : Feet to Meter")
console.log("Press 3 : Inch to Feet")
console.log("Press 4 : Meter to Feet")
console.log("------------------------")
let userChoice = readline.question("Enter Your Choice :: ")

switch(userChoice){
    case "1":
        let feet = readline.question("Enter Feet :: ")
        let inches=12
		let	totalInches = feet * inches
		console.log("Feet to Inches : "+ feet +" = " + totalInches)
        break
    case "2" :
        let feet1 = readline.question("Enter Feet :: ")
        let meter = 0.3048
		let	totalMeter = feet1 * meter
		console.log("Feet to Meter : "+ feet1 +" = " + totalMeter)
        break
    case "3":
        let inches1 = readline.question("Enter Inches :: ")        
		let	totalFeet = inches1/12
		console.log("Inches to Feet : "+ inches1 +" = " + totalFeet)
        break
    case "4":
        let meter1 = readline.question("Enter Meter :: ")
        let feet2 = 3.28084
		let totalFeet1 = feet2 * meter1
		console.log("Feet to Meter : "+ meter1 +" = " + totalFeet1)
        break
    default:
        console.log("Invalid Input!!")
        break
}

*/
//Week Days:


readline = require("readline-sync")
let digit = readline.question("Enter Digit between  1 to 7  ")

switch(digit) {
    case  "1" :
        console.log("MONDAY")
        break
    case "2" :
        console.log("TUESDAY")
        break
    case "3" : 
        console.log("WEDNESDAY")
        break
    case "4": 
        console.log("THURSDAY")
        break
    case "5": 
        console.log("FRIDAY")
        break
    case "6": 
        console.log("SATURDAY")
        break
    case "7": 
        console.log("SUNDAY")
        break    
     default : 
        console.log("Invalid Input")    
}

