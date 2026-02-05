//this keyword is used to inform current object

const addtwonum=function()
{
    let userName="Taslima";
    console.log(userName);
    console.log(this.userName);
}
console.log(addtwonum());

//---
function coffee()
{
    let userName="Shravani";
    console.log(userName);
    console.log(this.userName);
}
console.log(coffee());

//---
const chai = ()=>
{
    let userName="Neha";
    //console.log(userName);
    console.log(this);
}
console.log(chai());

//We use 'this' keyword in regular function.
//We can not use 'this' keyword in arrow function

const addition=(a,b)=>
{
    return c=a+b;
}
console.log(addition(20,40))