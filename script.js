//.. Character arrays for password options

var alphaUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var alphaLowercase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "1234567890";
var specialChar = "!@#$%^&\()*+,-./:;<=>?[\\]_`{|}~";
var alphaLowercase = alphaLowercase.split ("");
var alphaUppercase = alphaUppercase.split ("");
var numbers = numbers.split ("");
var specialChar = specialChar.split ("");

//.. Function to generate password

function passwordGenerate (){
    var charactersAll = [];
    var randomPassword = "";
}

//.. Set length varibles

var totalLength = prompt("How long would you like your password to be?");

if(totalLength <8 || Totlength > 128){
    alert("Your password must be between 8 and 128 characters long!\nPlease try again.");
}

console.log (totalLength);

//.. Confirmation of options for password



//.. Display password