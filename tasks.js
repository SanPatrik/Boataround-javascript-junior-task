'use strict'

//Task 1: String Capitalization
function capitalizeWords(inputString) {
    return inputString.replace(/\b\w/g, (match) => match.toUpperCase());
}

var inputStr = "hello world weee we";
var result = capitalizeWords(inputStr);
console.log(result); // Output: "Hello World Weee We"


//Task 2: Palindrome Check
function isPalindrome(inputString) {
    const reversedString = inputString.split("").reverse().join("");
    return inputString === reversedString;
}

inputStr = "carrac";
result = isPalindrome(inputStr);
console.log(result); // Output: true


//Task 3: Array Filtering
function filterEvenNumbers(inputArray) {
    return inputArray.filter((num) => num % 2 === 0);
}

const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
result = filterEvenNumbers(inputArray);
console.log(result); // Output: [2, 4, 6, 8]



//Task 4: Date Format Validation
function validateDateFormat(inputDate) {
    const regex = /^(19|20)\d\d-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;
    return regex.test(inputDate);
}

const inputDate1 = "2023-07-31";
const inputDate2 = "2023-07-1";
const inputDate3 = "2023-02-21";
const inputDate4 = "2223-07-31";

console.log(validateDateFormat(inputDate1)); // Output: true
console.log(validateDateFormat(inputDate2)); // Output: false
console.log(validateDateFormat(inputDate3)); // Output: true
console.log(validateDateFormat(inputDate4)); // Output: false


//Task 5: Credit Card Masking
function maskCreditCard(inputCreditCard) {
    const regex = /\d(?=\d{0,3}(-))/g;

    return inputCreditCard.replace(regex, "#");
}

const inputCreditCard = "1234-5678-9876-5432";
result = maskCreditCard(inputCreditCard);
console.log(result); // Output: "####-####-####-5432"
