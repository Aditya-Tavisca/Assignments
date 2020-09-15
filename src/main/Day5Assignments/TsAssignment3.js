"use strict";
// Write a JavaScript function that checks whether a passed string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
exports.__esModule = true;
exports.Pallindrome = void 0;
var Pallindrome = /** @class */ (function () {
    function Pallindrome() {
    }
    Pallindrome.prototype.checkPalindromeUsingInbuiltFunction = function (inputString) {
        inputString = inputString.split(' ').join('');
        if (inputString.match(inputString.split('').reverse().join('')))
            return true;
        else
            return false;
    };
    Pallindrome.prototype.checkPalindromeWithLogic = function (inputString) {
        inputString = inputString.split(' ').join('');
        for (var startingIndex = 0, endingIndex = inputString.length - 1; startingIndex < parseInt((inputString.length / 2).toString()); startingIndex++, endingIndex--) {
            if (inputString.charAt(startingIndex) != inputString.charAt(endingIndex)) {
                return false;
            }
        }
        return true;
    };
    return Pallindrome;
}());
exports.Pallindrome = Pallindrome;
var palindrome = new Pallindrome();
// var inputString:string="nurses run"
// if(palindrome.checkPalindromeUsingInbuiltFunction(inputString))
//   console.log(`${inputString} This is palindrome`)
// else
// console.log(`${inputString} This is not palindrome`) 
