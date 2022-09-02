var newString1 = "Server";
console.log(newString1);
var newString2 = "";
function reverseString(str) {
    for (var i = str.length - 1; i >= 0; i--) {
        newString2 += str[i];
    }
    return newString2;
};
reverseString("Server");

console.log (newString2);
console.log (newString1.length);
console.log (newString1.length*3);
console.log (newString1.length/5);