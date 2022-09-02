function getHelloMessage() {
    const name = prompt("What's your name?");
    if (name === "") {
        return "Hello, World!";
    } else {
        return "Hello, " + name + "!";
    }
}


function sayHello() {
   const message = getHelloMessage();
   console.log(message);
}
sayHello();