//Object
/*
Important Questions----
There are three types of Object---
1.Literals 2.Constructor 3. Single ton
When you create constructor its create singleton object it means itself object
When we create object literals single ton is not created
Object means Key Value Pair

--
*/

let myobj={

    name: "Taslima",
    age: 21,
    location: "Ichalkaranji",
    email: "tasalimaj2504@gmail.com",
    isLogin: true ,
    lastLoginDay : ["Monday","Tuesday","Wednsday"],
    "fName" : "TGJ",
    mySymbol : "myKey1"

}

//console.log(myobj.email);
//console.log(myobj.fName);
//console.log(myobj);
//console.log(myobj.mySymbol);

//console.log(typeof(myobj.[mySymbol])); 

//symbol Example
/*const mysym=Symbol("JavaScript");
const myobj2={

    [mysym] : "TGJ"
}

console.log(myobj2[mysym]);
console.log(typeof myobj2[mysym]);
console.log(typeof(myobj2.mysym));
*/

myobj.email="aryapatil@gmail.com";
console.log(myobj.email);

//Object.freeze(myobj);

myobj.email="Shravanidake@gmail.com";
console.log(myobj.email);

myobj.greeting=function(){
    console.log("Hello JS user..!");

}
console.log(myobj.greeting());

