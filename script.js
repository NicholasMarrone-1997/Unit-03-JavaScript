//Creating Arrays/Password Input/Confirmation Variables
var generateBtn = document.querySelector("#generate");
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialNum = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?", "~"];
var letterLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var letterUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var randPassArray = [];
var randomPasswordString = "";

var generateBtn = document.querySelector("#generate");

//Generating Password Function
function generatePassword() {

    var passwordLength = parseInt(prompt("How many characters would you like your password to have? (8-128)"));

    if ((passwordLength < 8) || (passwordLength > 128)) {
        alert('Password must be at least 8 characters and less than 128 characters');
        return;
    }

    alert('The password will have: ' + passwordLength + ' characters.');

    var confirmSpecialNum = confirm("Press OK button to confirm if you would like to include special characters in your password.");
    alert(confirmSpecialNum);
    var confirmNum = confirm("Press OK button to confirm if you would like to include numbers in your password.");
    alert(confirmNum);
    var confirmLetterUpper = confirm("Press OK button to confirm if you would like to include upper case letters in your password.");
    alert(confirmLetterUpper);
    var confirmLetterLower = confirm("Press OK button to confirm if you would like to include lower case letters in your password.");
    alert(confirmLetterLower);

    if (confirmSpecialNum == true) {
        randPassArray = randPassArray.concat(specialNum);
    }
    if (confirmNum == true) {
        randPassArray = randPassArray.concat(number);
    }
    if (confirmLetterLower == true) {
        randPassArray = randPassArray.concat(letterLower);
    }
    if (confirmLetterUpper == true) {
        randPassArray = randPassArray.concat(letterUpper);
    }
    if (!confirmSpecialNum && !confirmNum && !confirmLetterLower && !confirmLetterUpper) {
        alert('Your password needs to contain something!');
        location.reload();
    }

    for (var i = 0; i < passwordLength; i++) {
        randomPasswordString += randPassArray[Math.floor(Math.random() * randPassArray.length)];
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