// Main body of the app.

// Load the words to pick from
const string1 = ['hairy', 'vile', 'ridiculous'];
const string2 = ['banal', 'treachorous', 'infantile'];
const string3 = ['ape', 'dog', 'buffoon'];

// Choose the words
const choice1 = string1[Math.floor(Math.random() * string1.length)];
const choice2 = string2[Math.floor(Math.random() * string2.length)];
const choice3 = string3[Math.floor(Math.random() * string3.length)];


// Combine choices into output
let output = `Thou ${choice1} and ${choice2} ${choice3}!`;
console.log(output);