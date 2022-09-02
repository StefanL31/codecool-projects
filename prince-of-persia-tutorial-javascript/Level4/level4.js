/*
  Move the prince through the maze to find the princess.
  You can move the prince by calling the already created function
  `moveDirection` and passing the STRING as PARAMETER
  `left`
  `right`
  `up`
  `down`.
  Extra challenge: change the value of the variable `direction`
  to be either `down` or `right` using an `if` statement based on
  the value of the variable `turn`

  HINT: Open the browser developer tools to see what is happening in
  each turn.
*/

let i=0;
while (i<12) { 
  if ( i%2 == 0 ) {
  moveDirection('down');
} else {
   (moveDirection('right'));
}
i++;
}

