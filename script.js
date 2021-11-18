//practice questions for interview prep

//1. Palindrome A palindrome is a word, sentence, or another type of character sequence which reads the same 
//backward as forward. For example, “racecar” and “Anna” are palindromes. “Table” and “John” aren’t palindromes, 
//because they don’t read the same from left to right and from right to left.

//Given a string, print true if the word is a palindrome, and false if the word is not a palindrome.


let inputString = prompt("Enter a string to check if it is a palindrome").toLowerCase();

console.log(inputString);

let stringArray = inputString.split("");

let reversestringArray =[];

console.log(stringArray);

for (i = 0 ; i < stringArray.length; i ++ ) {
    
    reversestringArray[i] = stringArray[stringArray.length - 1 -i];    
}

console.log(reversestringArray);

reverseString = reversestringArray.join("").toLowerCase();

console.log(reverseString);

if (inputString === reverseString) {

    alert("Yes " + inputString + " IS a Palindrome!");
}

else {

    alert("No " + inputString + " IS NOT a Palindrome!" );
}
