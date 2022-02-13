readline = require("readline-sync")
let number;
number = readline.question("Enter a number");
let harmonic = 1;
for (let i = 2; i <= number; i++)
{
    harmonic += (harmonic)/ i;
}
console.log(harmonic);


//Power oF Two:

readline = require("readline-sync")
let number;
let power = 1;
 number = readline.question("Enter a Number:")
for(let i =1; i<= number; i++)
{
     power = power*2;
}
console.log(power);


//Prime Number:
readline=require("readline-sync")
let num=readline.question("Enter the number : ")

flag=0
for (let i=2; i <= num/2; i++ ){
  if ( num % i == 0 )
    flag=1 
}
if (flag == 1 )
  console.log(num + " is not Prime")
else
  console.log(num +" is Prime");


  //Prime Numbers Between Range:

  eadline=require("readline-sync")
let low=readline.question("Enter the lower range :")
let up=readline.question( "Enter the upper range :")
let flag=1;
for (let i=low+1; i <= up-1; i++ ){
    let flag=0;
    for ( let j=2; j <= i-1; j++ ){
        if ( i % j == 0 )
        {
            flag=1;
            break;
        }
    }
    if  (flag == 0 )
    console.log( "The  prime  numbers are :" + i);            
}
if(flag == 1)
console.log("No prime numbers in the range");




