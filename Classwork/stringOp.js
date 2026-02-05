let str = "WEBTECH HELLO";
console.log(typeof(str));

//string interpolation : used to concatenate two or more strings insted of using + operator.
console.log(`hello my name is ${str}`);

let fname = "Rob";
console.log(`${fname}`);

const gcount = new String("Taslima");
console.log(gcount); //o/p :[String: 'Taslima']
console.log(gcount.length); //o/p : 8

console.log(gcount.toUpperCase());   //o/p : TASLIMA

console.log(gcount.toLowerCase());  //o/p : taslima

console.log(gcount.indexOf('s'));   // o/p : -1

console.log(gcount.charAt(1));     // o/p : h

//Finds the last occurrence of a substring.
console.log(str.lastIndexOf("hello"));   // o/p : -1

//Checks if a string contains a value.
console.log(str.includes("JS"));   // false
console.log(str.includes("hello"));   // false
console.log(str.includes("HELLO"));   // true

//Checks if string starts with given value.
console.log(str.startsWith("WEBTECH"));   // true
console.log(str.startsWith("Script"));   // false

//Checks if string ends with given value.
console.log(str.endsWith("Script"));   // false
console.log(str.endsWith("HELLO"));   // true

//Extracts part of a string.
let str1 = "Programming";
console.log(str1.slice(0, 6));   // Progra

//Similar to slice() (no negative index).
console.log(str1.substring(0, 6));   // Progra

//Replaces first match.
let str2 = "I love JS";
console.log(str2.replace("JS", "JavaScript"));  //o/p : I love JavaScript

//Replaces all matches.
let str3 = "cat cat dog";
console.log(str3.replaceAll("cat", "lion"));  //o/p : lion lion dog

//Splits string into array.
let str4 = "apple,banana,orange";
console.log(str4.split(","));   //o/p : [ 'apple', 'banana', 'orange' ]

//Removes whitespace from both sides.
let str5 = "   Hello   ";
console.log(str5.trim());  //o/p : Hello

//Join two strings.
console.log(str1.concat(" ", str2));  //o/p : Programming I love JS

//Repeats string n times.
console.log(str.repeat(3));   //o/p : WEBTECH HELLOWEBTECH HELLOWEBTECH HELLO

//Searches string and returns index.
let str6 = "Welcome to JS";
console.log(str6.search("JS"));  //o/p : 11
