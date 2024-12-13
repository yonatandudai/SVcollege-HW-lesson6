let displayValue = ''; // Holds the full expression to display
let lastOperation = false; // Tracks if the last action was a calculation

function appendNumber(number) {
    if (lastOperation) {
        // Clear the display if the last action was a calculation
        displayValue = '';
        lastOperation = false;
    }
    displayValue += number; // Append the number to the display value
    updateDisplay();
}

function setOperator(op) {
    if (displayValue === '' || isLastCharOperator()) return; // Prevent operator without a number
    displayValue += op; // Append the operator to the display
    lastOperation = false; // Reset the flag
    updateDisplay();
}

function calculate() {
    if (displayValue === '' || isLastCharOperator()) {
        displayValue = 'Error'; // Handle invalid inputs like "3*"
        updateDisplay();
        return;
    }

    // Variables for calculation
    let total = 0;
    let currentNumber = '';
    let currentOperator = '+';

    // Process each character in the display value
    for (let i = 0; i < displayValue.length; i++) {
        const char = displayValue[i];

        if (isOperator(char)) {
            // Perform the previous operation
            total = performOperation(total, parseFloat(currentNumber), currentOperator);
            currentOperator = char; // Update to the new operator
            currentNumber = ''; // Reset the current number
        } else {
            currentNumber += char; // Build the number
        }
    }

    // Perform the final operation
    total = performOperation(total, parseFloat(currentNumber), currentOperator);

    displayValue = total.toString(); // Update the display with the result
    lastOperation = true; // Set the flag to true after calculation
    updateDisplay();
}

function clearDisplay() {
    displayValue = ''; // Clear the display
    lastOperation = false; // Reset the flag
    updateDisplay();
}

function updateDisplay() {
    const display = document.getElementById('display');
    display.value = displayValue; // Update the input field with the current value
}

// Helper function to check if a character is an operator
function isOperator(char) {
    return char === '+' || char === '-' || char === '*' || char === '/';
}

// Helper function to check if the last character in the display is an operator
function isLastCharOperator() {
    return isOperator(displayValue[displayValue.length - 1]);
}

// Perform the operation based on the operator
function performOperation(total, number, operator) {
    if (operator === '+') return total + number;
    if (operator === '-') return total - number;
    if (operator === '*') return total * number;
    if (operator === '/') return number === 0 ? 'Error' : total / number;
    return total;
}
