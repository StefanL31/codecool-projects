function isNumber(str) {
    if (type in str != "string") {
        return false;
    } else {
        return true;
    }
    
}

function convertNumber(str){  
    console.log(str);
}

function isValidOperator(operator) {
    if (operator != "+" && operator != "-" && operator !="/" && operator != "*" ) {
        return 'Invalid input, try again';
}
}

function askForANumber(forceValidInput) {
    while (true) {
        if (!isNumber(inputNumber)) {
            console.log('This does not look like a number.');
            if (!forceValidInput) {
                return NaN;
            }
        } else {
            return inputNumber;
        }
    }
}


function askForAnOperator(forceValidInput) {
    while (true) {
        if (!isNumber(inputNumber)) {
            console.log('This does not  look like a valid number.');
            if (!forceValidInput) {
                return NaN;
            }
        } else {
            return inputNumber;
        }
    }
}


function calc(operator, a, b) {
    switch (operator) {
        case '+':
            return number1 + number2;
        case '-':
            return number1 - number2;
        case '*':
            return number1 * number2;
        case '/':
            if (number2 == 0){
                return ('Division by 0 is now allowed');
            }
            return number1 / number2;
        
    }
}

function simpleCalculator() {
    while (true) {
        const number1 = askForANumber(false);
        if (isNaN(a)) {
            break;
        }
        const operation = askForAnOperator(true);
        const number2 = askForANumber(true);
        const result = calculate(operation, number1, number2);
        if (result) {
            console.log(`The result is ${calculate(operation, number1, number2)}`);
        }
    }
}


simpleCalculator();