function checkCharacterType(char){
    var charCode = char.charCodeAt(0);
    if (charCode >=48 && charCode <= 57) {
        document.write(charCode + "is a number.");
    }else if (charCode >=65 && charCode <= 90){
        document.write(char +"is an uppercase letter.");
    } else if(charCode >= 97 && charCode <= 122){
        document.write(char + "is a lowercase letter.");
    } else{
        document.write(char + "is a number or letter.");
    }
}

var inputchar = prompt("Enter a character:");
checkCharacterType(inputchar);

function compareIntegers(a, b) {
    if(a > b) {
         return a + "is larger.";
    } else if(b > a) {
        return b + "is a larger.";
    } else {
        return "both integers are equal."; 
    }
}

var num1 = parseInt(prompt("Enter the frist integer:"));
var num2 = parseInt(prompt("Enter the second integer:"));
var comparisonResult = compareIntegers(num1, num2);
console.log(comparisonResult);

function checkNumberSign(num) {
    if (num > 0) {
        return "positive";
    } else if (num < 0) {
        return "Negative";
    } else {
        return "zero";
    }
}

var userInput = parseFloat(prompt("Enter a number:"));
var signResult = checkNumberSign(userInput);
console.log("The number is: " + signResult);

function isVowel(char) {
    var lowercasechar = char.tolowerCase();
    return lowercasechar === 'a'|| lowercasechar === 'e' ||lowercasechar === 'i' || lowercasechar === 'o' || lowercasechar === 'u';
} 
var inputChar = prompt("Enter a character:");
var isVowelResult = isVowel(inputChar);

if(isVowelResult) {
    console.log(inputChar + "is a vowel.");
} else {
    console.log(inputChar + "is not vowel.");
}

// a.store corrcect password in a JS variable.
var userPassword = "mySecretPassword";

// b. Ask user to enter his /her password.
var userPassword = prompt("Enter the Password:");

// c. validate the Passwords
if (userPassword ==="") {
    console.log("please enter your password:");
} else if (userPassword === correctPassword) {
    console.log("correct! the password you enterd matches the original password.");
} else {
    console.log("Incorrect password.");
} 

var greeting = prompt("Enter the hour");
var hour = 13;

if (hour < 18) {
    greeting = "Good day";
}else {
    greeting = "Good evening";
}

var userInput = parseInt(prompt("Enter the time in 24-hour clock format( e.g., 1900):"));

if (userInput >= oooo && userInput < 1200) {
    console.log("Good morning!");
} else if (userInput >= 1200 && userInput < 1700){
    console.log("Good afternoon!");
} else if (userInput >= 1700 && userInput < 2100) {
    console.log("Good evening!");
} else if (userInput >= 2100 && userInput <= 2359) {
    console.log("Good night!");
} else {
    console.log("Invalid input.Please enter a valid time in 24 hour format.");
}























