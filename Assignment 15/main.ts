// Question 16
let guestlists: string[] = ["Usman Shireen", "Christina", "Abid"];

console.log("Great News! we found a bigger table");

// Unshift
guestlists.unshift("Zain Baloch");

// Splice()
guestlists.splice(Math.floor(guestlists.length/2),0, "Zohaib")

// Push()
guestlists.push("Muskan");

console.log(guestlists);

// foreach
guestlists.forEach(guest =>{
    console.log(`Dear ${guest}, you all are cordially invited to dinner.`);
    
});
