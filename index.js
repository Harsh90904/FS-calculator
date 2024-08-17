const { add, sub, mul, div, mod } = require("./math");

const prompt = require("prompt-sync")();

console.log("Available operations: add, sub, mul, div, mod");

let type = prompt("Enter operation type: ");

let a, b;

switch (type) {
    case 'add':
        a = prompt("Enter number A: ");
        b = prompt("Enter number B: ");
        console.log("Result:", add(a, b));
        break;
    case 'sub':
        a = prompt("Enter number A: ");
        b = prompt("Enter number B: ");
        console.log("Result:", sub(a, b));
        break;
    case 'mul':
        a = prompt("Enter number A: ");
        b = prompt("Enter number B: ");
        console.log("Result:", mul(a, b));
        break;
    case 'div':
        a = prompt("Enter number A: ");
        b = prompt("Enter number B: ");
        console.log("Result:", div(a, b));
        break;
    case 'mod':
        a = prompt("Enter number A: ");
        b = prompt("Enter number B: ");
        console.log("Result:", mod(a, b));
        break;
    default:
        console.log("Invalid operation");
        break;
}
