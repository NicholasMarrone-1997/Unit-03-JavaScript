//Creating Arrays
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

    //creating passwordLength variable and assigning it to a number by parsing a string
    var passwordLength = parseInt(prompt("How many characters would you like your password to have? (8-128)"));

    //if statement that compares passwordLength to the parameters for the length of the password
    if ((passwordLength < 8) || (passwordLength > 128)) {
        //If password does not meet parameters than alert user that it needs to be within parameters
        alert('Password must be at least 8 characters and less than 128 characters');
        return;
    }

    //Prompt alerting user of the password length
    alert('The password will have: ' + passwordLength + ' characters.');

    //creating variables that will confirm what the user wants to include in their password and outputs wheter its true or false based on their input
    var confirmSpecialNum = confirm("Press OK button to confirm if you would like to include special characters in your password.");
    alert(confirmSpecialNum);
    var confirmNum = confirm("Press OK button to confirm if you would like to include numbers in your password.");
    alert(confirmNum);
    var confirmLetterUpper = confirm("Press OK button to confirm if you would like to include upper case letters in your password.");
    alert(confirmLetterUpper);
    var confirmLetterLower = confirm("Press OK button to confirm if you would like to include lower case letters in your password.");
    alert(confirmLetterLower);

    //if statements that compares users input to true and then adds the array the user wants in their password to a new array
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
    //if statement that happens when user selects cancel for all character selections, then reloads the webpage
    if (!confirmSpecialNum && !confirmNum && !confirmLetterLower && !confirmLetterUpper) {
        alert('Your password needs to contain something!');
        location.reload();
    }

    //for loop that iterates for the length of the users password input and then selects random characters from the concatenated arrays and then passes it into a new output string
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