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


// HackerRank Testing for Preficient*
// Print the numbers 1-15 on each line
// (excluding 5, 10, 12)
for (let i = 1; i <= 15; i++) {
    if(i === 5 || i === 10 || i === 12) {
        console.log()
    } else {
        console.log(i)
    }
}

// Print out the weather report from the array on each
// line.
const weatherReport = ["rainy", "muggy", "foggy", "foggy", "rainy", "sunny", "rainy", "rainy" ];
const zipcodes = [94112, 94110, 94122, 94109, 94116, 94118, 94117, 94121];

for (let i = 0; i < weatherReport.length; i++) {
    console.log(weatherReport[i]);
}

for (let i = 0; i < weatherReport.length; i++) {
    console.log(zipcodes[i], weatherReport[i])
}


// If the weather is 'rainy', print 'bring an umbrella'
for (let i = 0; i < weatherReport.length; i++) {
    if (weatherReport[i] === "rainy") {
        console.log(zipcodes[i], weatherReport[i]);
        console.log("bring an umbrella");
    } else {
     console.log(zipcodes[i], weatherReport[i]);   
    }    
}

//
const recyclingTruckLoad = ["food waste", "glass", "paper", "paper", "bubble wrap", "aluminum", "food waste", "food waste", "ceramic"]

for (let i = 0; i < recyclingTruckLoad.length; i++) {
    if(recyclingTruckLoad[i] === "food waste" || recyclingTruckLoad[i] === "bubble wrap" || recyclingTruckLoad[i] === "ceramic") {
        console.log("FAILURE", i);
    } else {
        console.log("SUCCESS", recyclingTruckLoad[i]);
    }
}