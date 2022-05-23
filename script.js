// Assignment Code
var generateBtn = document.querySelector("#generate");

// Instructor Provided Template: Anthony Cooper
function generatePassword() {
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "0123456789";
  var special = "#$%&()*+,-./:;<=>?";
  var uppercase = lowercase.toUpperCase();

  var input = parseInt(prompt("Choose a length between 8 and 128"));
  var in2 = prompt("Do you want your password to contain lowercase letters? (yes or no)");
  var lowercaseChoice = in2.toLowerCase()[0];
  var in3 = prompt("Do you want your password to contain numbers? (yes or no)");
  var numbersChoice = in3.toLowerCase()[0];
  var in4 = prompt("Do you want your password to contain special characters? (yes or no)")
  var specialChoice = in4.toLowerCase()[0];
  var in5 = prompt("Do you want your password to contain uppercase letters? (yes or no)") 
  var uppercaseChoice = in5.toLowerCase()[0];

  if (input >= 8 && input <= 128) {
  } else {
    alert("Do Better");
  }
  return "";  

  
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);