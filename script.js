//Creating Arrays/Password Input/Confirmation Variables
var generateBtn = document.querySelector("#generate");
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialNum = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?", "~"];
var letterLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var letterUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var randPass = [];
var randomPasswordString = "";

var generateBtn = document.querySelector("#generate");

//Generating Password Function
function generatePassword() {

    var confirmLength = parseInt(prompt("How many characters would you like your password to have? (8-128)"));

    if ((confirmLength < 8) || (confirmLength > 128)) {
        alert('Password must be at least 8 characters and less than 128 characters');
        return;
    }

    alert('The password will have: ' + confirmLength + ' characters.');

    var confirmSpecialNum = confirm("Press OK button to confirm if you would like to include special characters in your password.");
    var confirmNum = confirm("Press OK button to confirm if you would like to include numbers in your password.");
    var confirmLetterUpper = confirm("Press OK button to confirm if you would like to include upper case letters in your password.");
    var confirmLetterLower = confirm("Press OK button to confirm if you would like to include lower case letters in your password.");

    if (confirmSpecialNum == true) {
        randPass = randPass.concat(specialNum);
    } else if (confirmNum == true) {
        randPass = randPass.concat(number);
    } else if (confirmLetterLower == true) {
        randPass = randPass.concat(letterLower);
    }else if (confirmLetterUpper == true) {
        randPass = randPass.concat(letterUpper);
    } else{
        alert('Your password needs to contain something!')
        location.reload();
    }

    for (var i = 0; i < confirmLength; i++) {
        randomPasswordString = randomPasswordString + randPass[Math.floor(Math.random() * randPass.length)];
    }
    return randomPasswordString;
}

//Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword());