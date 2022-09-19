// Implement flowchart "Calculator" here.
function calculate (number1, number2, operator) {
    //first number
    if (number1 == isNaN){
        return 'Invalid input, try again';
    } 
    // Operation (+, -, *, /): ")
    if (operator != "+" && operator != "-" && operator !="/" && operator != "*" ) {
        return 'Invalid input, try again';
    }
    // Second number
    if (number2 == isNaN) {
        return 'Invalid input, try again';
    }
    
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

console.log (calculate(1 ,10 , "*"));
// First number

// // Operation (+, -, *, /): ")

// // Second number

// Possible outcomes:
// - Invalid input, try again
// - Division by zero is not allowed
// - or the result of the operation