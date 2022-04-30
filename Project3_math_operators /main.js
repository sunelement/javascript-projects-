// Defines variables used in Increment() and Decrement()
var incrementNum = 0;
var decrementNum = 99;

// Function that calculates the sum of 2 numbers and displays it
function Show_Sum() {
    // Defines variables used by the opperation
    var sumNum1 = 3;
    var sumNum2 = 2;
    var sumFinal = sumNum1 + sumNum2;
    // Sets the elements equal to their variables values
    document.getElementById("sumNum1").innerHTML = sumNum1;
    document.getElementById("sumNum2").innerHTML = sumNum2;
    document.getElementById("sumFinal").innerHTML = sumFinal;
}

// Function that calculates the diffrence of 2 numbers and displays it 
function Show_Diffrence() {
    // Defines variables used by the opperation
    var difNum1 = 9;
    var difNum2 = 5;
    var difFinal = difNum1 - difNum2;
    // Sets the elements equal to their variables values
    document.getElementById("difNum1").innerHTML = difNum1;
    document.getElementById("difNum2").innerHTML = difNum2;
    document.getElementById("difFinal").innerHTML = difFinal;
}

// Function that calculates the product of 2 numbers and displays it
function Show_Multiplication() {
    // Defines variables used by the opperation
    var multNum1 = 7;
    var multNum2 = 2;
    var multFinal = multNum1 * multNum2;
    // Sets the elements equal to their variables values
    document.getElementById("multNum1").innerHTML = multNum1;
    document.getElementById("multNum2").innerHTML = multNum2;
    document.getElementById("multFinal").innerHTML = multFinal;
}

// Function that calculates the quotient of 2 numbers and displays it
function Show_Division() {
    // Defines variables used by the opperation
    var divNum1 = 36;
    var divNum2 = 6;
    var divFinal = divNum1 / divNum2;
    // Sets the elements equal to their variables values
    document.getElementById("divNum1").innerHTML = divNum1;
    document.getElementById("divNum2").innerHTML = divNum2;
    document.getElementById("divFinal").innerHTML = divFinal;
}

// Function that calculates the moduls of 2 numbers and displays it
function Show_Modulus() {
    // Defines variables used by the opperation
    var modNum1 = 15;
    var modNum2 = 4;
    var modFinal = modNum1 % modNum2;
    // Sets the elements equal to their variables values
    document.getElementById("modNum1").innerHTML = modNum1;
    document.getElementById("modNum2").innerHTML = modNum2;
    document.getElementById("modFinal").innerHTML = modFinal;
}

// Function that shows a random number by using Math.Random()
function Show_Random() {
    var randNum = Math.random();
    document.getElementById("randNum").innerHTML = randNum;
}

// Function that calculates multiple opperations in one equation
function Show_MultiOpps() {
    // Defines variables used by the opperation
    var oppNum1 = 5;
    var oppNum2 = 7;
    var oppNum3 = 2;
    var oppNum4 = 6;
    var oppNum5 = 3;
    var oppFinal = (oppNum1 + oppNum2 - oppNum3) * (oppNum4 / oppNum5);
    // Sets the elements equal to their variables values
    document.getElementById("oppNum1").innerHTML = oppNum1;
    document.getElementById("oppNum2").innerHTML = oppNum3;
    document.getElementById("oppNum4").innerHTML = oppNum4;
    document.getElementById("oppNum5").innerHTML = oppNum5;
    document.getElementById("oppFinal").innerHTML = oppFinal;
}

// Increments a number each time the "++" button is pressed
function Increment() {
    incrementNum++;
    document.getElementById("incrementNum").innerHTML = incrementNum;
}

// Decrements a number each time the "--" button is pressed
function Decrement() {
    decrementNum--;
    document.getElementById("decrementNum").innerHTML = decrementNum;
}