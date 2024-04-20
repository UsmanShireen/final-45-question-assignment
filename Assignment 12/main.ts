// Question 13

// Loop
let transportationMode: string[] = ["Car","Motorcycle","Bicycle","Bus"];

for (let i = 0; i < transportationMode.length; i++) {
    console.log(`I would like to own a ${transportationMode[i]}`);
}

// Foreach

transportationMode.forEach(mode => {
    console.log(`I would like to own a ${mode}`)
});