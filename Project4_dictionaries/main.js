// Defines the MyCar dictionary variable with keys & values 
var MyCar = {
    Maker: "subaru",
    Model: "wrx",
    Color: "white",
    Year: 2018,
    Owner: "Me"
};

// A function that shows MyCar's info when the "Show Information" button is clicked  
function Show_Info() {
    document.getElementById("Maker").innerHTML = MyCar.Maker;
    document.getElementById("Model").innerHTML = MyCar.Model;
    document.getElementById("Color").innerHTML = MyCar.Color;
    document.getElementById("Year").innerHTML = MyCar.Year;
    document.getElementById("Owner").innerHTML = MyCar.Owner;
}

// A function that deletes the Owner Key/Value from the dictionary 
function Delete_Owner() {
    delete MyCar.Owner;
    document.getElementById("Owner").innerHTML = MyCar.Owner;
}