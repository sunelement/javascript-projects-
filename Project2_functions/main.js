// Defines the titleString 
var titleString = "Added";
// Appends to the titleString using "+="
titleString += " (+ 1)";

// Defines the clickCount variable that increases w/ each click
var clickCount = 0;

// Function used to add one to the clickCount when the button is clicked
function Add_One() {
    // Incruments clickCount by 1 by using "+="
    clickCount += 1;
    // Sets the elements innerHTML to be the assigned values 
    document.getElementById("clickCount").innerHTML = clickCount;
    document.getElementById("titleString").innerHTML = titleString;
}