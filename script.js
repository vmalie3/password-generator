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

    if (in2 && !in3 && !in4 && !in5) {
      var result = ''
      for (var i=0; i < input; i++) {
        result += lowercase[Math.floor(Math.random()*input)];
      }
      return result;
    }  else if (!in2 && in3 && !in4 && !in5) {
      var result2 = ''
      for (i=0; i < input; i++) {
        result2 += numbers[Math.floor(Math.random()*input)];
      }
      return result2;
    } else if (!in2 && !in3 && in4 && !in5) {
      var result3 =''
      for (var i=0; i < input; i++) {
        result3 += special[Math.floor(Math.random()*input)];
      }
      return result3;
    } else if (!in2 && !in3 && !in4 && in5) {
      var result4 =''
      for (var i=0; i < input; i++) {
        result4 += uppercase[Math.floor(Math.random()*input)];
      }
      return result4;
    } else if (in2 && in3 && !in4 && !in5) {
      var result5 = ''
      for (var i=0; i < input; i++) {
        
      }
    }
  

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