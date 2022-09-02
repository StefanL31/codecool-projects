const prompt = require("prompt-sync")();

const email = prompt("Your email address: ")

//"hello.world.com" => An email adrdess has to contain a '@' character!
//"he@lloworld.com" => An email address cannot contain more than one '@' characters!
//"@world.com" => The username before the '@' cannot be empty!
//"hello@" => The domain after the '@' character cannot be empty!
//"hello@worldcom" => An email address has to contain atleast one '.' character!
//"hell.o@worldcom" => The domain has to contain atleast one "." character!
//"hello@worldcom." => The top-level domain cannot be empty!
//"hello@worldco.m" => "The top-level domain has to be atleast two characters long!"
//".hello@world.com"=> The username cannot start with a "." character!
//"he.llo@.world.com" => The domain cannot start with a "." character!
//"hell@world.com" => Valid email address :)

const lengthOfEmail = email.length 
const NumberOfAtCharacters = email.split("@").length - 1
const NumberOfDotCharacters = email.split(",").length - 1
const PositionOfAt = email.indexOf("@")
const PositionOfFirstDot = email.indexOf(".")
const positionOfLastDot = email.lastIndexOf(".")
const positionOfDotAfterTheAt = email.indexOf(".", PositionOfAt)

const errorMessageNoAt = "An email address has to contain a '@' character!"
const errorMessageTooManyAt = "An email adress cannot contain more than one '@' character!"
const errorMessageNoUsername = "The username before the '@' cannot be empty!"
const errorMessageNoDomain = "The domain after the '@' character cannot be empty!"
const errorMessageNoDot = "An email address has to contain atleast one '.' character!"
const errorMessageNoDotInDomain = "The domain has to contain atleast one '.' character!"
const errorMessageNoTld = "The top-level domain cannot be empty!"
const errorMessageShortTld = "The top-level domain has to be atleast two characters long!"
const errorMessageInvalidUsername = "The username cannot start with a '.' character!"
const errorMessageInvalidDomain = "The domain cannot start with a '.' character!"
const okMessage = "Valid email address :)"

let x=1;
if(NumberOfAtCharacters<1) {
    console.log(errorMessageNoAt); x = 0
}
if(NumberOfAtCharacters>1) {
    console.log(errorMessageTooManyAt); x = 0
}
if(PositionOfAt>1) {
    console.log(errorMessageNoUsername); x = 0
}
if(PositionOfAt ==lengthOfEmail) {
    console.log(errorMessageNoDomain); x = 0
}
if(numberOfDotCharacters==0){
    console.log(errorMessageNoDot);  x=0;
}
if(positionOfFirstDotAfterTheAt<=positionOfAt){
    console.log(errorMessageNoDotInDomain);  x=0;
}
if(positionOfLastDot==lengthOfEmail-1){
    console.log(errorMessageNoTld);  x=0;
}
if(positionOfFirstDot==0){
    console.log(errorMessageInvalidUsername);  x=0;
}
if(positionOfLastDot>lengthOfEmail-3){
    console.log(errorMessageShortTld);  x=0;
}
if(positionOfFirstDotAfterTheAt==positionOfAt+1){
    console.log(errorMessageNoServerName);  x=0;
}
if(x==1){
    console.log(okMessage);
}
 