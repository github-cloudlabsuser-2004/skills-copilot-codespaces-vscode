// Function to add two numbers
function add(num1, num2) {
    return num1 + num2;
}

// Function to subtract two numbers
function subtract(num1, num2) {
    return num1 - num2;
}

// Function to multiply two numbers
function multiply(num1, num2) {
    return num1 * num2;
}

// Function to divide two numbers
function divide(num1, num2) {
    return num1 / num2;
}

// Ask the user for input values
const num1 = parseFloat(prompt("Enter the first number:"));
const num2 = parseFloat(prompt("Enter the second number:"));

// Perform calculations
const sum = add(num1, num2);
const difference = subtract(num1, num2);
const product = multiply(num1, num2);
const quotient = divide(num1, num2);

// Display the results
console.log(`Sum: ${sum}`);
console.log(`Difference: ${difference}`);
console.log(`Product: ${product}`);
console.log(`Quotient: ${quotient}`);

// Test for the difference function
const differenceTest = () => {
    // Test case 1: Subtracting 5 from 10 should return 5
    const result1 = subtract(10, 5);
    console.log(result1 === 5 ? "Test case 1 passed" : "Test case 1 failed");

    // Test case 2: Subtracting 7 from 3 should return -4
    const result2 = subtract(3, 7);
    console.log(result2 === -4 ? "Test case 2 passed" : "Test case 2 failed");

    // Test case 3: Subtracting 0 from 0 should return 0
    const result3 = subtract(0, 0);
    console.log(result3 === 0 ? "Test case 3 passed" : "Test case 3 failed");
};

// Run the difference test
differenceTest();