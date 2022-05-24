// Assignment Code
var generateBtn = document.querySelector("#generate");

// Instructor Provided Template: Anthony Cooper
function generatePassword() {
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "0123456789";
  var special = "#$%&()*+,-./:;<=>?";
  var uppercase = lowercase.toUpperCase();

  var input = parseInt(prompt("Choose a length between 8 and 128"));  

  if (input >= 8 && input <= 128) {
    var in2 = confirm("Do you want your password to contain lowercase letters?");
    var in3 = confirm("Do you want your password to contain numbers?");
    var in4 = confirm("Do you want your password to contain special characters?");
    var in5 = confirm("Do you want your password to contain uppercase letters?");
    console.log(in2);
    console.log(in3);
    console.log(in4);
    console.log(in5);

    if (!in2 && !in3 && !in4 && !in5) {
      alert("Must contain at least one type of character");
    }
    var allowedChar = '';

    if (in2 && !in3 && !in4 && !in5) {
      allowedChar += lowercase;
    } else if (!in2 && in3 && !in4 && !in5) {
      allowedChar += numbers;
    } else if (!in2 && !in3 && in4 && !in5) {
      allowedChar += special;
    } else if (!in2 && !in3 && !in4 && in5) {
      allowedChar += uppercase;
    } else if (in2 && in3 && !in4 && !in5) {
      allowedChar += lowercase + numbers;
    } else if (in2 && !in3 && in4 && !in5) {
      allowedChar += lowercase + special;
    } else if (in2 && !in3 && !in4 && in5) {
      allowedChar += lowercase + uppercase;
    } else if (!in2 && in3 && in4 && !in5) {
      allowedChar += numbers + special;
    } else if (!in2 && in3 && !in4 && in5) {
      allowedChar += numbers + uppercase;
    } else if (!in2 && !in3 && in4 && in5) {
      allowedChar += special + uppercase;
    } else if (in2 && in3 && in4 && !in5) {
      allowedChar += lowercase + numbers + special;
    }else if (in2 && in3 && !in4 && in5) {
      allowedChar += lowercase + numbers + uppercase;
    }else if (!in2 && in3 && in4 && in5) {
      allowedChar += numbers + special + uppercase;
    } else if (in2 && in3 && in4 && in5) {
      allowedChar += lowercase + numbers + special + uppercase;
    }

    for (var i=0; i < input; i++) {
      var result = ''
      result += allowedChar[Math.floor(Math.random()*input)];
    }
    return result;
  
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