function addTwoNumbers(a, b) {
	//write your code here
    let addTwoNumbers = a + b;
}

function isLeftGreaterThanRight(leftNumber, rightNumber) {
	//write your code here
	let isLeftGreaterThanRight = leftNumber > rightNumber;
}

function sayHello(name) {
	//write your code here
    let sayHello = hello + name; 
}
const {addTwoNumbers, isLeftGreaterThanRight, sayHello} = require('./functions');
const tests = require('./test.lib.js');

tests(
    [

			[addTwoNumbers, [3,4], 7],
			[addTwoNumbers, [4,5], 9],
			[addTwoNumbers, [6,6], 12],

			[isLeftGreaterThanRight, [3,4], true],
			[isLeftGreaterThanRight, [4,3], false],
			[isLeftGreaterThanRight, [5,5], false],

			[sayHello, ["Mihai"], "Hello, Mihai!"],
			[sayHello, ["Razvan"], "Hello, Razvan!"],
			[sayHello, ["Dani"], "Hello, Dani!"]

    ]
);