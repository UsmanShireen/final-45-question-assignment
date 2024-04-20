// Question 15

let guestlists: string[] = ["Usman Shireen", "Christina", "Abid"];

// Print the name who cant make dinner
let unableAttend: string | undefined = guestlists.splice(2,1)[0];

console.log(`${unableAttend}, is not invited to dinner.`);

//push

guestlists.push("My Leader Imran khan");

 //Print a message

guestlists.forEach(guest => {
    console.log(`Dear ${guest}, you are cordially invited.`);
 });