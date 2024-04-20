// question 11
// Array
// Define an array of names
var names = ["Abid", "Shahwali", "Zohaib", "Zain", "Shahzaib"];
// For
// For each
// For of loop
// Loop
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
//for each
names.forEach(function (name) {
    console.log(name);
});
// For of loop
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var friendNames = names_1[_i];
    console.log(friendNames);
}
