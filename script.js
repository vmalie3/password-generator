// Assignment Code
var generateBtn = document.querySelector("#generate");

// Instructor Provided Template: Anthony Cooper
function generatePassword() {
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "0123456789";
  var special = "#$%&()*+,-./:;<=>?";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  // First prompt to choose length
  var input = parseInt(prompt("Choose a length between 8 and 128"));  
  
  // the rest of th prompts inside an if statement requiring length between 8 and 128
  if (input >= 8 && input <= 128) {
    var in2 = confirm("Do you want your password to contain lowercase letters?");
    var in3 = confirm("Do you want your password to contain numbers?");
    var in4 = confirm("Do you want your password to contain special characters?");
    var in5 = confirm("Do you want your password to contain uppercase letters?");

    //if statement alerting user that they must choose 1+ characters
    if (!in2 && !in3 && !in4 && !in5) {
      alert("Must contain at least one type of character");
    }
    
    //variable allowing changes based off responses
    var allowedChar = '';
    
    //if statements altering the above variable based off of confirm responses
    if (in2) {
      allowedChar += lowercase;
    }
    if (in3) {
      allowedChar += numbers;
    }
    if (in4) {
      allowedChar += special;
    }
    if(in5) {
      allowedChar += uppercase;
    }

    //for loop and variable allowing the password to be randomly generated
    var result = ''
    for (var i=0; i < input; i++) {
      result += allowedChar[Math.floor(Math.random()*input)];
    }
    return result;
    //response if an incorrect length was entered
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