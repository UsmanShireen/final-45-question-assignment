// Question 17
// Print Message
var guestlists = ["Usman Shireen", "Christina", "Abid"];
console.log("Unfortunately! the new dinner table won't arrive so we can invte only 2 guest.");
guestlists.unshift("Shahzaib", "Osama");
// Print message updated list
console.log("Updated list of Guest:", guestlists);
// Remove guest from the list
while (guestlists.length > 2) {
    var removedGuest = guestlists.pop();
    if (removedGuest !== undefined) {
        console.log("Sorry, ".concat(removedGuest, ", we can't invite you."));
    }
}
// Print a message to each of the two people still on your list, letting them Know they're still invited.
guestlists.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you both are still invited for the dinner."));
});
// Remove 2 names from the list
guestlists.splice(0, guestlists.length);
// Print UpdatedEmpty list
console.log("Updated list of guest:", guestlists);
