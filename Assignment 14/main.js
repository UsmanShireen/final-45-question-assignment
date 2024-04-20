// Question 15
var guestlists = ["Usman Shireen", "Christina", "Abid"];
// Print the name who cant make dinner
var unableAttend = guestlists.splice(2, 1)[0];
console.log("".concat(unableAttend, ", is not invited to dinner."));
//push
guestlists.push("My Leader Imran khan");
//Print a message
guestlists.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are cordially invited."));
});
