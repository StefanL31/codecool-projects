// Implement flowchart "Prime" here.
let number = 2;
let isPrime = true;
// Give me an integer (greater than 1)
if (number === 1) {
    console.log ("Not an integer!");
} else if (number < 2) {
    console.log ("Too small");
}
if (number > 1) {
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log ("Prime")
    } else {
        console.log ("Not prime")
    }
}
// Possible outcomes:
// - Not an integer
// - Too small
// - Not prime
// - Prime