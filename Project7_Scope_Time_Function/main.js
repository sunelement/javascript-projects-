// Defines a global variable that can be reffrenced anytime 
var GlobalVariable = "Global Variable";

// Function that gets the time of day and returns ether morning, afternoon or evening based of result
function Time_Function() {
    // Gets the current time using the getHours() function
    var Time = new Date().getHours();
    // A local variable, can not be reffrenced outside of function
    var Reply;
    // If statement that checks if its morning time 
    if (Time < 12 == Time > 0) {
        // Console logs the correct hour, instead of a rounded answer
        console.log("The Time variable is: " + Time);
        Reply = "It is morning time!";
    }
    // Else if statement to check if its afterrnoon 
    else if (Time >= 12 == Time < 18) {
        // Console logs the correct hour, instead of a rounded answer 
        console.log("The Time variable is: " + Time);
        Reply = "It is afternoon.";
    }
    // Else statement if it is evening 
    else {
        // Console logs the correct hour, instead of a rounded answer
        console.log("The Time variable is: " + Time);
        Reply = "It is evening time.";
    }
    // Logs the GlobalVariable
    console.log("Logging the " + GlobalVariable);
    // Sets the Time_of_day element to the Reply
    document.getElementById("Time_of_day").innerHTML = Reply;
}