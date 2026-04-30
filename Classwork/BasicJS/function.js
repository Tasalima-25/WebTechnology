//Function is block of code that we can reuse and call when we want.

function addTwoNum(num1,num2)
{
    let result=num1+num2;
    return result;
    console.log("Hello"); //After return statement values doesn't print
}

console.log(addTwoNum(10,20));

//----
function userLogin(username)
{
    if(username === undefined)
    {
        console.log("Please Enter Username");
    }
    return `Username: ${username}`;
    
}

//console.log(userLogin("Hello"));
console.log(userLogin());

//----
function calculate(...num1)  // rest/spread operator--all value print together in array form
{
    return num1;
}

console.log(calculate(200,300,400));

//----
const user1={
    name:"Taslima",
    age:21
}

function handleobject(obj)
{
    console.log(`Username is : ${obj.name}`);
    console.log(`Age is : ${obj.age}`);
    ;
}
console.log(handleobject(user1));

//---
const arr1 = [10, 20, 30, 40];

function handleArray(obj1) {
    console.log(`Array Elements: ${obj1}`);
    return obj1[1];
}

console.log(handleArray(arr1));