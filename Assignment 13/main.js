// Question 14
//Define array of guest
var guestlist = ["Usman Shireen", "Kamran Khan", "Maheen Sheikh"];
var invitation = guestlist.map(function (guest) { return "Dear ".concat(guest, ", you are cordially invited to dinner."); });
// Invite each guest for dinner
invitation.forEach(function (invitations) {
    console.log(invitations);
});
