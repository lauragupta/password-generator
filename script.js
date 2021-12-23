// Assignment Code
var generateBtn = document.querySelector("#generate");

//create arrays for lowercase letters
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

//create arrays for uppercase letters
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

//create arrays for numbers
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

//create arrays for special characters
var characters = ["!", "#", "$", "%", "&", "*", "+", "-", "/", "?", "@", "^", "_", "~"]


function generatePassword() {

  //prompt to complete password and enter # of characters (limit 8-128)
  var numberCharacters = prompt("The password can be 8-128 characters. How many characters would you like your password to be?", "8-128"); 

  //alert if number is not in range
  if (numberCharacters < 8 || numberCharacters > 128) {
    alert("You must choose a number from 8-128.");
    return;
  }

  //prompt to choose characters... Would you like to include uppercase letters



  // prompt would you like to inlcude lower case letters



  //prompt would you like to include numbers



  //prompt would you like to include special characters


  //alert if no choice was selected and repeat to step choose first character set


  //random math generator


  //loop through selected arrays until # of characters is reached


  // random shuffle of characters? 

  return "I'm working on it. :) ";

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
