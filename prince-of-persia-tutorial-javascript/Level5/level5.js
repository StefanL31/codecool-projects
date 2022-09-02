function giveDoor1Answer(firstNumber, secondNumber) {
  /*
  Write the code for the function `giveDoor1Answer` so that
  it answers the secret door's question.
  Be carefull, the secret door always changes the numbers but
  you will be able to access them via the function parameters.

  HINT: Open the browser developer tools to view the question
  */
let newNumber = (firstNumber*firstNumber*firstNumber*firstNumber)/(firstNumber+secondNumber);
newNumber = Math.floor(newNumber);
return newNumber;


  console.log(firstNumber);
  console.log(secondNumber);
}



moveDirection("down");
moveDirection("down");
moveDirection("down");
moveDirection("down");
moveDirection("down");
moveDirection("down");

console.log(giveDoor1Answer());