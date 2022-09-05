// Set the data arrays of all characters used for the password
var Uppers = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var Downers = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var Numeros = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var Specials = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];


  // Function to prompt user for password options
  function getPasswordOptions() {
    // Variable to store length of password from user input
    var length = parseInt(
      prompt('How many characters would you like your password to contain?')
    );
  
    // checks if input is a number
    if (Number.isNaN(length)) {
      alert('Password length must be provided as a number');
      return null;
    }
  
    // Conditional statement to check if password length is at least 8 characters long. Prompts end if this evaluates false
    if (length < 8) {
      alert('Password length must be at least 8 characters');
      return null;
    }
  
    // Conditional statement to check if password length is less than 128 characters long. Prompts end if this evaluates false
    if (length > 128) {
      alert('Password length must less than 129 characters');
      return null;
    }
  
    // Variable to store boolean regarding the inclusion of special characters
    var hasSpecials = confirm(
      'Click OK to confirm including special characters.'
    );
  
    // Variable to store boolean regarding the inclusion of numeric characters
    var hasNumeros = confirm(
      'Click OK to confirm including numeric characters.'
    );
  
    // Variable to store boolean regarding the inclusion of lowercase characters
    var hasDowners = confirm(
      'Click OK to confirm including lowercase characters.'
    );
  
    // Variable to store boolean regarding the inclusion of uppercase characters
    var hasUppers = confirm(
      'Click OK to confirm including uppercase characters.'
    );
  
    // Conditional statement to check if user does not include any types of characters. 
    // Password generator ends if all four variables evaluate to false
    if (
      hasSpecials === false &&
      hasNumeros === false &&
      hasDowners === false &&
      hasUppers === false
    ) {
      alert('Must select at least one character type');
      return null;
    }
  
    // parameters for passwordOptions to consider
    var passwordOptions = {
      length: length,
      hasSpecials: hasSpecials,
      hasNumeros: hasNumeros,
      hasDowners: hasDowners,
      hasUppers: hasUppers
    };
  
    return passwordOptions;
  
  } // getPasswordOptions Function Ends Here.. 


  
  // Function for getting a random element from an array
  function getRandom(arr) { 
    var randIndex = Math.floor(Math.random() * arr.length);
    var randElement = arr[randIndex];
    return randElement;
  }
  
  // Function to generate password with user input
  function generatePassword() {
    var options = getPasswordOptions();
    // Variable to store password as it's being concatenated
    var result = [];
  
    // Array to store types of characters to include in password
    var possibleCharacters = [];
  
    // Array to contain one of each type of chosen character to ensure each will be used
    var guaranteedCharacters = [];
  
    // Check if an options object exists, if not exit the function
    if (!options) return null;
  
    // Conditional statement that adds array of special characters into array of possible characters based on user input
    // Push new random special character to guaranteedCharacters
    if (options.hasSpecials) {
      possibleCharacters = possibleCharacters.concat(Specials);
      guaranteedCharacters.push(getRandom(Specials));
    }
  
    // Conditional statement that adds array of numeric characters into array of possible characters based on user input
    // Push new random special character to guaranteedCharacters
    if (options.hasNumeros) {
      possibleCharacters = possibleCharacters.concat(Numeros);
      guaranteedCharacters.push(getRandom(Numeros));
    }
  
    // Conditional statement that adds array of lowercase characters into array of possible characters based on user input
    // Push new random lower-cased character to guaranteedCharacters
    if (options.hasDowners) {
      possibleCharacters = possibleCharacters.concat(Downers);
      guaranteedCharacters.push(getRandom(Downers));
    }
  
    // Conditional statement that adds array of uppercase characters into array of possible characters based on user input
    // Push new random upper-cased character to guaranteedCharacters
    if (options.hasUppers) {
      possibleCharacters = possibleCharacters.concat(Uppers);
      guaranteedCharacters.push(getRandom(Uppers));
    }
  
    // For loop to iterate over the password length from the options object, selecting random indices from the array of possible characters and concatenating those characters into the result variable
    for (var i = 0; i < options.length; i++) {
      var possibleCharacter = getRandom(possibleCharacters);
  
      result.push(possibleCharacter);
    }
  
    // Mix in at least one of each guaranteed character in the result
    for (var i = 0; i < guaranteedCharacters.length; i++) {
      result[i] = guaranteedCharacters[i];
    }
  
    // Transform the result into a string and pass into writePassword
    return result.join('');
  }
  
  // Get references to the #generate element
  var generateBtn = document.querySelector('#generate');
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');
  
    passwordText.value = password;
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener('click', writePassword);
  