const display = document.getElementById('display'); // by id
// const equalButton = document.querySelector('.equals-btn'); (by class)


function notImplemented() {
    alert("This function is not implemented yet!");
}
function evaluateExpression() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}
function deleteAll() {
    document.getElementById('display').value = '';
}

function deleteLastChar() {
    const currentDisplay = document.getElementById('display').value;
    document.getElementById('display').value = currentDisplay.slice(0, -1);
}

function changeSign() {
    const currentDisplay = document.getElementById('display').value;
    if (currentDisplay.charAt(0) === '-') {
        document.getElementById('display').value = currentDisplay.slice(1);
    } else {
        document.getElementById('display').value = '-' + currentDisplay;
    }
}

function factorial() {
    var value = parseFloat(document.getElementById('display').value);
    display.value += '!';
    if (isNaN(value) || value < 0 || !Number.isInteger(value)) {
      display.value = 'Error';
      return;
    }
    var result = 1;
    for (let i = 2; i <= value; i++) {
        result *= i;
    }
      
    display.value = result;
}

function addToDisplay (){
    let charToSolve;
    let charToDisplay;
    charToSolve = "Math.abs(";
    charToDisplay = 'abs(';
}

function tenToThePower(){
    var value = parseFloat(document.getElementById('display').value);
    if (isNaN(value) || !Number.isInteger(value)) {
      display.value = 'Error';
      return;
    }
    var result = Math.pow(10, value);
    
      
    display.value = result;
}

function absFunc(){
    var value = parseFloat(document.getElementById('display').value);
    if (isNaN(value)) {
      display.value = 'Error';
      return;
    }
    var result = Math.abs(value);
    
      
    display.value = result;
}

