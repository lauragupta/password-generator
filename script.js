// Assignment Code
var generateBtn = document.querySelector("#generate");

//create arrays for lowercase letters
var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//create arrays for uppercase letters
var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

//create arrays for numbers
var numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//create arrays for special characters
var characterArray = ["!", "#", "$", "%", "&", "*", "+", "-", "/", "?", "@", "^", "_", "~"];

//random math generator
function getRandomInt(max) {
  var randomNumber = Math.random();
  var randomMax = randomNumber * max;
  return Math.floor(randomMax);
}

function generatePassword() {

  //confirm to complete password and enter # of characters (limit 8-128)
  var numberCharacters = prompt("The password can be 8-128 characters. How many characters would you like your password to be?"); 

  //chanage string value to integer
  numberCharacters = parseInt(numberCharacters);

  //alert if NAN or number is not in range
  if (isNaN(numberCharacters)  || numberCharacters < 8 || numberCharacters > 128) {
    alert("You must choose a number from 8-128. Please try again.");
    return;
  }

  //confirm to choose characters... Would you like to include uppercase letters
  var useUppercase = confirm("You need to include 1-4 of the 4 character sets. Would you like to include uppercase letters in your password? Cancel=No  OK=Yes");

  // confirm would you like to inlcude lower case letters
  var useLowercase = confirm("You need to include 1-4 of the 4 character sets. Would you like to include lowercase letters in your password? Cancel=No  OK=Yes");

  //confirm would you like to include numbers
  var useNumbers = confirm("You need to include 1-4 of the 4 character sets. Would you like to include numbers in your password? Cancel=No  OK=Yes");

  //confirm would you like to include special characters
  var useSpecialCharacters = confirm("You need to include 1-4 of the 4 character sets. Would you like to include Special Characters in your password? Cancel=No  OK=Yes");

  //alert if no choice was selected and repeat to step choose first character set
  if (!useUppercase && !useLowercase && !useNumbers && !useSpecialCharacters) { 
    alert("You must choose at least 1 character set. Please try again.");
    return;
  }

  //create an array of chosen character sets
  var myCharacters = [];
  
  if (useUppercase) {
    myCharacters.push(uppercaseLetters);
  }
  if (useLowercase) {
    myCharacters.push(lowercaseLetters);
  }
  if (useNumbers) {
    myCharacters.push(numberArray);
  }
  if (useSpecialCharacters) {
    myCharacters.push(characterArray);
  }

  //loop through selected arrays until # of characters is reached
var almostMyPassword = [];
  var currentlyActiveCharacters;
for(var i = 0, characterSetCounter = 0; i < numberCharacters; i++) {
  currentlyActiveCharacters = myCharacters[characterSetCounter];
  var randomInt = getRandomInt(currentlyActiveCharacters.length);
  var chosenChraracter = currentlyActiveCharacters[randomInt];
  almostMyPassword.push(chosenChraracter);
  if(characterSetCounter === myCharacters.length - 1) {
    characterSetCounter = 0;
  } else {
    characterSetCounter++;
  }
}

//change almostMyPassword into a single sring
var myPassword = almostMyPassword.join('');

return myPassword;

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if (password === undefined) {
   return;
  } else {
    passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
