function addNumbers() {
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);
    const result = number1 + number2;
    displayResult(result);
}

function subtractNumbers() {
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);
    const result = number1 - number2;
    displayResult(result);
}

function multiplyNumbers() {
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);
    const result = number1 * number2;
    displayResult(result);
}

function divideNumbers() {
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);
    if (number2 !== 0) {
        const result = number1 / number2;
        displayResult(result);
    } else {
        displayResult('Error: Division by zero');
    }
}

function displayResult(result) {
    document.getElementById('calculation-result').textContent = result;
}

document.getElementById('add').addEventListener('click', addNumbers);
document.getElementById('subtract').addEventListener('click', subtractNumbers);
document.getElementById('multiply').addEventListener('click', multiplyNumbers);
document.getElementById('divide').addEventListener('click', divideNumbers);
