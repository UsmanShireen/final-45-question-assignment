// Question 16
var guestlists = ["Usman Shireen", "Christina", "Abid"];
console.log("Great News! we found a bigger table");
// Unshift
guestlists.unshift("Zain Baloch");
// Splice()
guestlists.splice(Math.floor(guestlists.length / 2), 0, "Zohaib");
// Push()
guestlists.push("Muskan");
console.log(guestlists);
// foreach
guestlists.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you all are cordially invited to dinner."));
});
