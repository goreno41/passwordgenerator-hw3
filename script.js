//.. Character arrays for password options

var alphaUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var alphaLowercase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "1234567890";
var specialChar = "!@#$%^&\()*+,-./:;<=>?[\\]_`{|}~";
var alphaLowercaseArray = alphaLowercase.split ("");
var alphaUppercaseArray = alphaUppercase.split ("");
var numbersArray = numbers.split ("");
var specialCharArray = specialChar.split ("");

//.. Function to generate password

function passwordGenerate (){
    var charactersAll = [];
    var randomPassword = "";

//.. Set length varibles

    var totalLength = prompt("How long would you like your password to be?");

    if(totalLength <8 || totalLength > 128){
    alert("Your password must be between 8 and 128 characters long!\nPlease try again.");
    }

    else{

    if(confirm("Press OK to include lowercase letters in your password")){
        Array.prototype.push.apply(charactersAll, alphaLowercaseArray);
    }

    if(confirm("Press OK to include uppercase letters in your password")){
        Array.prototype.push.apply(charactersAll, alphaUppercaseArray);
    }

    if(confirm("Press OK to include numbers in your password")){
        Array.prototype.push.apply(charactersAll, numbersArray);
    }

    if(confirm("Press OK to include special characters in your password")){
        Array.prototype.push.apply(charactersAll, specialCharArray);
    }

    if(charactersAll.length===0){
        alert("You must confirm at least type of character for your password");
    }

    else{
        for(var i=0; i<totalLength; i++){
            var random = Math.floor(Math.random()*charactersAll.length);
            randomPassword += charactersAll[random];
        }
    }
    }

    document.getElementById("password").innerHTML = randomPassword;
}



//.. Display password
