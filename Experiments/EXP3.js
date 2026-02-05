//Activity 1----Write a code for arrow function with 2 examples
//Activity 2----Write a code for Switch case complex
//Activity 3----Write a code for truthy and falsy value with examples
//Activity 4----How to use ternary operator in JS
//Activity 5----Write a code for how to use loops in array--forof loop and forin loop
//Activity 6----How to use map() and filter() function in JS.


const box = document.getElementById("outputBox");


// Activity 1 — Arrow Function
const add = (a, b) => a + b;
const square = num => num * num;

box.innerHTML += "<h3>Activity 1: Arrow Function</h3>";
box.innerHTML +=
"Addition (5+3) = " + add(5,3) + "<br>" +
"Square (4) = " + square(4) + "<br><br>";


// Activity 2 — Switch Case
function calculator(num1, num2, operator) {
    switch (operator) {
        case "+": return num1 + num2;
        case "*": return num1 * num2;
        default: return "Invalid";
    }
}

box.innerHTML += "<h3>Activity 2: Switch Case</h3>";
box.innerHTML +=
"10 + 5 = " + calculator(10,5,"+") + "<br>" +
"10 * 5 = " + calculator(10,5,"*") + "<br><br>";


// Activity 3 — Truthy/Falsy
let value = 0;
let name = "Tasalima";

box.innerHTML += "<h3>Activity 3: Truthy and Falsy</h3>";
box.innerHTML +=
"Value (0) = " + (value ? "Truthy" : "Falsy") + "<br>" +
"Name = " + (name ? "Truthy" : "Falsy") + "<br><br>";


// Activity 4 — Ternary Operator
let age = 18;
let result = age >= 18 ? "You can vote" : "You cannot vote";

box.innerHTML += "<h3>Activity 4: Ternary Operator</h3>";
box.innerHTML +=
result + "<br><br>";


// Activity 5 — Loops
const numbers = [10, 20, 30];
let values = "";
let indexes = "";

for (let val of numbers) {
    values += val + " ";
}

for (let i in numbers) {
    indexes += i + " ";
}

box.innerHTML += "<h3>Activity 5: Loops</h3>";
box.innerHTML +=
"for...of values: " + values + "<br>" +
"for...in indexes: " + indexes + "<br><br>";


// Activity 6 — map & filter
const nums = [1,2,3,4];
const doubled = nums.map(n => n * 2);

const arr = [10,15,20,25];
const even = arr.filter(n => n % 2 === 0);

box.innerHTML += "<h3>Activity 6: map() and filter()</h3>";
box.innerHTML +=
"Doubled: " + doubled + "<br>" +
"Even Numbers: " + even + "<br><br>";





