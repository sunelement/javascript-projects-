// Defines a string that will be written at the top of the page using document.write()
var WriteString = "This string was written with document.write().";
document.write(WriteString);

// Function that gets the type of operand written on the top of the screen by using "typeof"
function Type_Of() {
    document.getElementById("TypeOf").innerHTML = (typeof WriteString);
}

// Function that attempts to combine a string, "Five", with a number, 3
function Combine() {
    document.getElementById("Combine").innerHTML = "Five" + 3;
}

// Function that compares the string "5" and the number 5 with a double equal sign, ==
function Double_Equals() {
    document.getElementById("DoubleEquals").innerHTML = ("5" == 5);
}

// Function that compares the string "5" and the number 5 with a triple equal sign, ===
function Triple_Equals() {
    document.getElementById("TripleEquals").innerHTML = ("5" === 5);
}

// Fuction that compares two number values to see if the left one is greater than the right one
function Greater() {
    document.getElementById("Greater").innerHTML = (7 > 1);
}

// Fuction that compares two number values to see if the left one is less than the right one
function Less() {
    document.getElementById("Less").innerHTML = (6 < 4);
}

// Function used to check if both statements on ether side of "&&" are true, only returns true if both are true
function And() {
    document.getElementById("And").innerHTML = (7 > 1) && (6 < 4);
}

// Function used to check if ether statements on ether side of "||" are true, returns true if ether are true
function Or() {
    document.getElementById("Or").innerHTML = (7 > 1) || (6 < 4);
}

// Function used to symbolize the switch from truth to falsity and vice versa, it checks the opposite condition
function Not() {
    document.getElementById("Not").innerHTML = !true;
}