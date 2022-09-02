function getHelloMessage(name) {
    if (name === "") {
        name = "World";
    }
    return `Hello, ${name}!`;
}

function capitalize(text) {
    return text.toUpperCase();
}

function getUserName() {
    const enteredName = prompt("What's your name?");
    return capitalize(enteredName);
}

function sayHello() {
    const userName = getUserName();
    const message = getHelloMessage(userName);
    console.log(message);
}

sayHello();