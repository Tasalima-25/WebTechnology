/*
Synchronous--
Execute code line by line
It has sequential behaviour
Each task waits to previous task to finish
JS is single faded and synchronous

Asynchronous in JS--
Non-blocking Programming
Some task take time like API call,reading File,Fetching Data from Database
JS doesn't wait,it moves to next line

--Fetching data from server
--Reading Line
--Set timeout
--API calls


*/

console.log("Start");

function add(a,b)
{
    return a+b;
}
let result=add(10,20);
console.log(result);
console.log("End");

//Asynchronous
console.log("Start");
setTimeout(()=>{
    console.log("Inside Timeout");
},2000);
console.log("End");

/*
setTimeout is Asynchronous it waits 2 seconds meanwhile JS prints End 
after 2 seconds it prints "Inside the Timeout"
*/

/*

Activities---
--Guess the Output game
--Blocking and non-blocking 2 example
--Real time company example
--API fetch activities

*/
