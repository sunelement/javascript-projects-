// Adds a contactinated colored snetence when the user clicks the button
function Add_Color_Function() {
    // Creates 2 string varibales to be concatenated together to make a full sentence
    var firstHalfOfSentence = 'You can concatenate two strings together';
    var lastHalfOfSentence = 'by using the "concate()" method.';
    // Concats the 2 parts of a sentence into one string
    var sentenceConcated = firstHalfOfSentence.concat(' ', lastHalfOfSentence);
    // Defines the sentences font color
    var coloredSentence = sentenceConcated.fontcolor("green");
    // Sets the "Sentence" element to the green font color
    document.getElementById("Sentence").innerHTML = coloredSentence;
}

// Defines an alert box that apears with the passed text when the webpage is loaded
alert('This alert box was created by using the JavaScript method called "alert()".');
// Defines the text that will be added to the webpage as a string variable
var webPageText = 'This text added to the document by using the JavaScript method called "document.write()".';
// Writes the string value of webPageText to the webpage using document.write()
document.write(webPageText);
// Defines the variables that will be added together and displayed on the MathExpression element
var firstNumber = 6;
var secondNumber = 3;
// Calculates the sum of the 2 numbers being added
var sum = firstNumber + secondNumber;
// Writes the math expression to the screen
document.write(firstNumber + " + " + secondNumber + " = " + sum);