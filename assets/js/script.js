

// -----------------------  Now you can see how something complex is spatially in 4 separate sections to think clearer -------

var Uppers = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var Downers = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var Numeros = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var Specials = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];


  function getPasswordOptions() {//--------------------  Much More Visually Intuitive  -----------------------------------
    var length = parseInt(prompt('How many characters would you like your password to contain?'));
      if (Number.isNaN(length)) {
        alert('Password length must be provided as a number');
        return null;
      }
      if (length < 8) {
        alert('Password length must be at least 8 characters');
        return null;
      }
      if (length > 128) {
        alert('Password length must less than 129 characters');
        return null;
      }
      // has X 4
      var hasSpecials = confirm('Click OK to confirm including special characters.');
      var hasNumeros = confirm('Click OK to confirm including numeric characters.' );
      var hasDowners = confirm('Click OK to confirm including lowercase characters.');
      var hasUppers = confirm('Click OK to confirm including uppercase characters.');

    if (hasSpecials === false && hasNumeros === false && hasDowners === false && hasUppers === false) {
      alert('Must select at least one character type');
      return null;   //--------cancel nation
    }
    //--------------------   some hash action..   ----------------------------
    var passwordOptions = {
      length: length,
      hasSpecials: hasSpecials,
      hasNumeros: hasNumeros,
      hasDowners: hasDowners,
      hasUppers: hasUppers
    };
    return passwordOptions;
  } 
 //-------------------------------------------------------   getPasswordOptions   Cuts off here  -------------------------------------                            
  
 //---------------------------------  Array of Randos.. -----------------------
  function getRandom(arr) { 
    var randIndex = Math.floor(Math.random() * arr.length); 
    var randElement = arr[randIndex];
    return randElement;
  }
  
  function generatePassword() {//-------------------------  generatePassword  ------------------------------------------------------------
    var options = getPasswordOptions();
    var result = [];
    var maybeChrs = [];
    var mustChars = [];

    if (!options) return null;  // if not in the options.. 
  
    //--------------------------   Neat little trick i did  ------------------- --------------------------------------------
    var hasArr = [options.hasSpecials,options.hasNumeros,options.hasDowners,options.hasUppers];
    var randArr = [Specials,Numeros,Downers,Uppers];
    for(i = 0; i< randArr.length; i++){
      if (hasArr[i]){
        maybeChrs = maybeChrs.concat(randArr[i]);
        mustChars.push(getRandom(randArr[i]));
      }
    }
    //-------------------------------------------------------------------------- --------------------------------------------


    for (var i = 0; i < options.length; i++) {
      var possibleCharacter = getRandom(maybeChrs);
  
      result.push(possibleCharacter);
    }
  
    for (var i = 0; i < mustChars.length; i++) {
      result[i] = mustChars[i];
    }

    return result.join('');
  }//-------------------------------------------------------  generatePassword  ------------------------------------------------------------

var generateBtn = document.querySelector('#generate');
  
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}  

generateBtn.addEventListener('click', writePassword);
  