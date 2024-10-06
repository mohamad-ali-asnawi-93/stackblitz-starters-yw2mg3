// run `node index.js` in the terminal

// don't remove this line if are using prompt
const prompt = require('prompt-sync')();

const age = parseFloat(prompt('What is your age? '))
const newAge = age + 1;
console.log(newAge)