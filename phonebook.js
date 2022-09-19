// Do not modify this list before starting the script
let phoneList = ["98-777-653", "98-742-644", "34-855-326", "34-25-629", "34-489-115", "72-999-563", "9-321-459",
              "72-654-121", "72-4-694", "72-255-313", "98-111-323", "98-433-14", "34-577-342", "98-323-000",
              "98-202-666", "34-5435-454", "34-515-633"]
let valid = "";
let invalid= "";
for (let i = 0; phoneList.length > i; i++){
if (phoneList.length[i] == 10) {
    valid +=phoneList[i];
    valid += ", ";
} else {
    invalid +=phoneList[i];
    invalid += ", ";
}
}
valid = valid.slice (0, -2);
invalid = invalid.slice (0, -2);
// "These are the valid phone numbers in your phonebook:"
console.log("These are the valid phone numbers in your phonebook:" +Array(valid));
// "and these are the wrong ones:"
console.log("and these are the wrong ones:" +Array(invalid));
valid=valid.slice(", ");
let code = "";
let numbers = "";
for (let i= 0; i < valid.length; i++){
        code += valid[i].slice(0,2);
        code += ", ";
        number += valid[i].slice(2);
        number += ", ";
    }
code=code.slice (0, -2);
numbers=numbers.slice (0, -2);
// "The area codes:"
code=code.split(", ")
console.log("The area codes:" +Array(code));
// "and the numbers without the area codes:"
console.log("and the numbers without the area codes:"+Array(numbers));
let unique=[];
for (let i = 0; i<code.length; i++){
    if (!unique.includes(code[i])) {
        unique.push(code[i]);
    }
}
// "The unique area codes:"
console.log("The unique area codes: " +unique);
let count = [];
for (i = 0; unique.length > i; i++) {
    let x = 0;
    for (let c = 0; c<code.length; c++){
        if (unique[i]===code[c]) {
            x++;
        }
    }
    count.push(x);
}

// "You have X numbers from area 98, Y numbers from area 34, and Z numbers from area 72."
for (let i = 0; i<unique.length; i++){
    console.log ("You have" +count[i]+ "numbers from area " +unique[i]+ ".");

}