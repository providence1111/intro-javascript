// Declare variables of different data types
let myString = "Hello, World!";
let myNumber = 42;
let myBoolean = true;

// Define functions to perform simple operations
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function divide(a, b) {
    if (b === 0) {
        console.log("Error: Division by zero");
        return "Error: Division by zero";
    }
    return a / b;
}

function multiply(a, b) {
    return a * b;
}

// DOM manipulation functions
function performAddition() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let result = add(num1, num2);
    document.getElementById('result').textContent = `Result: ${result}`;
}

function performSubtraction() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let result = subtract(num1, num2);
    document.getElementById('result').textContent = `Result: ${result}`;
}

function performDivision() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let result = divide(num1, num2);
    document.getElementById('result').textContent = `Result: ${result}`;
}

function performMultiplication() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let result = multiply(num1, num2);
    document.getElementById('result').textContent = `Result: ${result}`;
}

// Example usage of the functions
console.log("Addition:", add(10, 5));         // Output: Addition: 15
console.log("Subtraction:", subtract(10, 5)); // Output: Subtraction: 5
console.log("Division:", divide(10, 5));      // Output: Division: 2
console.log("Multiplication:", multiply(10, 5)); // Output: Multiplication: 50

// Print variable values
console.log("String:", myString); // Output: String: Hello, World!
console.log("Number:", myNumber); // Output: Number: 42
console.log("Boolean:", myBoolean); // Output: Boolean: true

// Chart.js integration
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Addition', 'Subtraction', 'Division', 'Multiplication'],
        datasets: [{
            label: 'Example Operations',
            data: [add(10, 5), subtract(10, 5), divide(10, 5), multiply(10, 5)],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});