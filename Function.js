function cToF(celsius) 
{
  var cTemp = celsius;
  var cToFahr = cTemp * 9 / 5 + 32;
  var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
    console.log(message);
}

function fToC(fahrenheit) 
{
  var fTemp = fahrenheit;
  var fToCel = (fTemp - 32) * 5 / 9;
  var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
    console.log(message);
} 
cToF(60);
fToC(45);


//Palidrome:

function oneDigit(num) {
  
    if ((num >= 0) && (num < 10))
        return 1;
    else
        return 0;
}
function isPalUtil
(num , dupNum) {
    if (num == 0) {
        return dupNum;
    } else {
        dupNum = isPalUtil(parseInt(num / 10), dupNum);
    }
    if (num % 10 == dupNum % 10) {
       
        return parseInt(dupNum / 10);
    } else {
        throw e;
    }

}
function isPal(num)
{

    if (num < 0)
        num = (-num);

    var dupNum = (num);

    return isPalUtil(num, dupNum);
}
var n = 121;
try {
    isPal(n);
    console.log("<br>Yes");
} catch (e) {
    console.log("<br>No");
}
n = 156;
try {
    isPal(n);
    console.log("<br>Yes");
} catch (e) {
    console.log("<br>No");
}