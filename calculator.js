//let number1 = 10;
//let number2 = 0;
//let operator1 = '+';
//let operator2 = '-';
//let operator3 = '*';
// let operator4 = '/';
// Implement flowchart "Calculator" here.
function calculate (number1, number2, operator) {
  
    if (number1 == false){
        return 'Invalid input, try again';
    } 
    // Operation (+, -, *, /): ")
    if (operator != "+" && operator != "-" && operator !="/" && operator != "*" ) {
        return 'Invalid input, try again';
    }
    // Second number
    if (number2 == false) {
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

console.log (calculate(10 ,5 , "*"));
// First number
// if (number1 = false){
//     console.log ('Invalid input, try again');
// } 
// // Operation (+, -, *, /): ")
// if (operator1 == false || operator2 == false || operator3 == false || operator4 == false) {
//     console.log ('Invalid input, try again')
// }
// // Second number
// if (number2 = false) {
//     console.log ('Invalid input, try again')
// }
// Possible outcomes:
// - Invalid input, try again
// - Division by zero is not allowed
// - or the result of the operation