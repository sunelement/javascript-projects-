// Defines NumArray and StringArray to be used by the functions below 
var NumArray = [7, 3, 2, 5, 1, -6, 49, 3];
var StringArray = ["This", "array", "is", "made", "of", "strings."];

// Function that utilizes a while loop to print the values of NumArray 
function While_Loop() {
    // Defines string value that will be displayed
    var WhileLoopDisplay = "[ ";
    let WhileIndex = 0;
    // While loop that loops through NumArray and adds all values except the last

    while (WhileIndex < NumArray.length - 1) {
        WhileLoopDisplay += NumArray[WhileIndex] + ", ";
        WhileIndex++;
    }
    // Adds the last value and closes the array in the string value and prints it
    WhileLoopDisplay += NumArray[WhileIndex] + " ]";
    document.getElementById("WhileLoopDisplay").innerHTML = WhileLoopDisplay;
}

// Function that utilizes a for loop to print the values of StringArray
function For_Loop() {
    // Defines string value that will be displayed 
    var ForLoopDisplay = "[ ";
    // For loop that loops through StringArray and adds all values except the last 
    for (let ForIndex = 0; ForIndex < StringArray.length; ForIndex++) {
        ForLoopDisplay = ForLoopDisplay.concat(" ", StringArray[ForIndex]);
    }
    // Closes the array in the string value and prints it
    ForLoopDisplay = ForLoopDisplay.concat(" ", "]");
    document.getElementById("ForLoopDisplay").innerHTML = ForLoopDisplay;
}