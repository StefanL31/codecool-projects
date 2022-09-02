var newString1 = "Client";
console.log(newString1);

var newString2 = "";
function reverseString(str) {
    for (var i = str.length - 1; i >= 0; i--) {
        newString2 += str [i];
    }
    return newString2;
}
reverseString("Client");

let element1 = document.getElementById("a")
element1.innerText = newString1
let element2 = document.getElementById("b")
element2.innerText = newString2
let element3 = document.getElementById("c")
element3.innerText = newString1.length
let element4 = document.getElementById("d")
element4.innerText = newString1.length*3
let element5 = document.getElementById("e")
element5.innerText = newString1.length/5

console.log(element1, element2, element3, element4, element5);
console.log(newString2);
console.log(newString1.length);
console.log(newString1.length*3);
console.log(newString1.length/5);

