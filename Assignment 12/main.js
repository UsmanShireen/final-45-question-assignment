// Question 13
// Loop
var transportationMode = ["Car", "Motorcycle", "Bicycle", "Bus"];
for (var i = 0; i < transportationMode.length; i++) {
    console.log("I would like to own a ".concat(transportationMode[i]));
}
// Foreach
transportationMode.forEach(function (mode) {
    console.log("I would like to own a ".concat(mode));
});
