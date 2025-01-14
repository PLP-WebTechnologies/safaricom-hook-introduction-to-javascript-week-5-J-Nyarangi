// Part 1: Variables and Data Types
let name = "Joyllette Nyarangi";
let age = 25;
let isStudent = true;
let hobbies = ["Reading", "Coding", "Hiking"];
let userDetails = { name: "Joyllette Nyarangi", age: 25, isStudent: true };

console.log(`Name: ${name} (Type: ${typeof name})`);
console.log(`Age: ${age} (Type: ${typeof age})`);
console.log(`Is student: ${isStudent} (Type: ${typeof isStudent})`);
console.log(`Hobbies: ${hobbies} (Type: ${typeof hobbies})`);
console.log(`User Details: ${JSON.stringify(userDetails)} (Type: ${typeof userDetails})`);

// Part 1: Calculator Function
function calculator() {
    const num1 = parseFloat(prompt("Enter the first number:"));
    const num2 = parseFloat(prompt("Enter the second number:"));
    const operation = prompt("Choose an operation (+, -, *, /):");

    if (isNaN(num1) || isNaN(num2)) {
        alert("Invalid input. Please enter valid numbers.");
        return;
    }

    let result;
    switch (operation) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num2 !== 0 ? num1 / num2 : "Division by zero error";
            break;
        default:
            alert("Invalid operation.");
            return;
    }
    alert(`Result: ${result}`);
}
calculator();

// Part 1: Greeting Function
function greetUser(name) {
    return `Hello, ${name}! Welcome to JavaScript learning.`;
}
document.getElementById("dynamic-content").textContent = greetUser("Anthony Mwangi");

// Part 2: If Statements
const userAge = parseInt(prompt("Enter your age:"));
const votingMessage = userAge >= 18
    ? "You are eligible to vote!"
    : "You are not eligible to vote yet.";
document.getElementById("voting-message").textContent = votingMessage;

// Part 2: Loops
const numberList = document.getElementById("number-list");
for (let i = 1; i <= 10; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = i;
    numberList.appendChild(listItem);
}

// Part 3: DOM Manipulation
// Change <h1> text
document.querySelector("h1").textContent = "JavaScript in Action!";

// Adding new paragraph to the dynamic-content <div>
const newParagraph = document.createElement("p");
newParagraph.textContent = "This content was added dynamically using JavaScript.";
document.getElementById("dynamic-content").appendChild(newParagraph);
