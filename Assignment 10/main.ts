// question 11
// Array
// Define an array of names

let names: string[] = ["Abid","Shahwali","Zohaib","Zain","Shahzaib"]

// For
// For each
// For of loop

// Loop
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);   
}

//for each
names.forEach(name => {
    console.log(name);
});

// For of loop
for (let friendNames of names) {
    console.log(friendNames);
}