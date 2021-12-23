// Assignment Code
var generateBtn = document.querySelector("#generate");

//create arrays for each character set 

function generatePassword() {

  //prompt to complete password and enter # of characters (limit 8-128)


  //alert if number is not in range


  //prompt to choose characters... Would you like to include uppercase letters



  // prompt would you like to inlcude lower case letters



  //prompt would you like to include numbers



  //prompt would you like to include special characters


  //alert if no choice was selected and repeat to step choose first character set


  //random math generator


  //loop through selected arrays until # of characters is reached


  // random shuffle of characters? 

  return "Blu3";

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
