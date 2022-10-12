// HackBright Academy Study Material:

// Printing to the 'console':
console.log("Hello World!");

console.log("A", "B", "C");

// Variables: Can change in value
const city = "Dallas";
console.log(city);

let weather = "rainy";
console.log(weather);

weather = "Sunny";
console.log(weather);

// Data Types:
// 'Strings', Numbers, Booleans

// 'if' Statements:
const amyHousePlants = 12;
const ahmadHousePlants = 36;

console.log("Amy:", amyHousePlants, "Ahmad:", ahmadHousePlants);

if (amyHousePlants === ahmadHousePlants) {
    console.log("They Have the Same number of plants!")
} else {
    console.log("They do Not have the same number of plants.")
}

// Part 1 Link: replit.com/@meggie-enx/javascript-fun

// Arrays:
let favoriteColors = ['Blue', 'Yellow', 'Purple'];

console.log(favoriteColors);

// Loops:
// Loop that logs 1-9
for (let i = 1; i < 10; i++) {
    console.log(i)
}

// A loop that logs each element in the favoriteColors
// array
for (let i = 0; i < favoriteColors.length; i++) {
    console.log(favoriteColors[i])
}

// loops & Arrays: Together in Harmony!
topColor = favoriteColors[2];

console.log(topColor); // 'Purple'

for (let i = 0; i < favoriteColors.length; i++) {
    if (i < 1) {
        console.log("First Color: ", favoriteColors[0])
    } else {
        console.log(favoriteColors[i]);
    }
    
}

// 
