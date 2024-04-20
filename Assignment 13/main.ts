// Question 14

//Define array of guest
let guestlist: string[] = ["Usman Shireen","Kamran Khan","Maheen Sheikh"];
let invitation: string[] = guestlist.map(guest => `Dear ${guest}, you are cordially invited to dinner.`)

// Invite each guest for dinner

invitation.forEach(invitations => {
    console.log(invitations)
})


