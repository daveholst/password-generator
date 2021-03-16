// Assignment Code
var generateBtn = document.querySelector("#generate");

//Password class constructor -- not sure about the initialization of this.password?
class Password{
  constructor(length, useLower, useUpper, useNumbers, useSpecials){
    this.passwordLength = length;
    this.useLower = useLower ? useLower : true;
    this.useUpper = useUpper ? useUpper: true;
    this.useNumbers = useNumbers ? useNumbers: true;
    this.useSpecials = useSpecials ? useSpecials: true;
    this.lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    this.upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.numberChars = '0123456789';
    this.specialChars = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
    this.password = this.generate();
  }
  generate() {
    // generate charset off object properties
    let charSet = '';
    let generatedPassword = '';
    charSet += this.useLower ? this.lowerCaseChars : '';
    charSet += this.useUpper ? this.lowerCaseChars : '';
    charSet += this.useNumbers ? this.numberChars : '';
    charSet += this.useSpecials ? this.specialChars : '';
    // generate password with charset & legth
    for (let i = 0; i < this.passwordLength; i++) {
      generatedPassword += charSet.charAt(Math.floor(Math.random() * charSet.length))
    }
    // assign password and return
    this.password = generatedPassword;
    return this.password;
  }
}
// Write password to the #password input
function writePassword() {
  let PassCriteria = { raw: {}, validated: {} };
  let raw = PassCriteria.raw;
  let validated = PassCriteria.validated;
  // Collect password length.
  raw.passLength = parseInt(prompt('How long would you like password to be? (8 - 128)', 10));
  if (raw.passLength < 8 || raw.passLength > 128) {
    alert('Length must be between 8 - 128. ');
    writePassword();
  }
  validated.passLength = raw.passLength;
  //Collect case information
  raw.useCase = prompt('Did you want to use lowercase, uppercase or both?. You muse choose at least one option!', 'both');
  validated.useLower = raw.useCase.match(/(lower)/gi) ? true : false;
  validated.useUpper = raw.useCase.match(/(upper)/gi) ? true : false;
  if (raw.useCase.match(/(both)/gi)) {
    validated.useLower = true;
    validated.useUpper = true;
  }
  if (!validated.useLower && !validated.useUpper) {
    alert('You have to choose at least one option!!!');
    writePassword();
  }
  //Collect number & Special information





  raw.useNumSpecial = prompt('Do you want to use numbers, symbols or both', 'both');

  console.log(PassCriteria);

  let useLower;
  let useUpper;
  let useNumbers;
  let useSpecials;


}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

