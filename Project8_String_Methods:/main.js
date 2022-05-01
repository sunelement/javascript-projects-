// Function that concats two strings using concat() function
function Concat_Clicked() {
    var String1 = "Concat these";
    var String2 = "strings together.";
    var Result = String1.concat(" ", String2);
    document.getElementById("ConcatResult").innerHTML = Result;
}

// Function that slices out items from an array using slice()
function Slice_Clicked() {
    var Groceries = ["bread", "cheese", "meat", "ice cream"];
    var Result = Groceries.slice(0, 3);
    document.getElementById("SliceResult").innerHTML = Result;
}

// Function that converts number value to a string value using toString()
function ToString_Clicked() {
    var NumberValue = 45;
    var Result = NumberValue.toString();
    document.getElementById("ToString_Result").innerHTML = Result;
}

// Function that gets a more precise version of a number using toPrecision()
function Precise_Clicked() {
    var LongNumber = 7864.2038479;
    var Result = LongNumber.toPrecision(6);
    document.getElementById("PreciseResult").innerHTML = Result;
}