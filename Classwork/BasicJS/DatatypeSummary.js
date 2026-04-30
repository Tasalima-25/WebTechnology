//Symbol : 
const anotherid = Symbol("123");
console.log(typeof(anotherid));

// === is used to check datatype as well as equal to simultaneously
const id = 123;
console.log(id === anotherid);

// Js is the dynamic 

// array : 
const arr = ["shravani", "arya", "neha", "trupti"] ;
console.log(arr[0]);
const arr1 = [1,2,3,4,5,6,7,8,9];
for (i=0; i<1; i++)
{
console.log(arr1);
}

//object : it is a instance of class
const obj = {
    fname : "Taslima",
    age : 21 
} ;
console.log(obj);

// funtion : it is a block of code used to execute a specific task.
/*
definition : means writing the function and assigning it to a variable.
             must be defined before use.
*/
//add(2, 3);   // Error: Cannot access 'add' before initialization
const addition = function(a, b) {
  return a + b;
};

//declaration : simply write a function with actual logic in scope.
function function_name(){
    console.log("taslima");
};

function add(a, b){   
  return a + b;
};

// to store  function in a variable 
const variable_name = function function_name(){
    console.log("taslima");
};

//Array function :
const name = () => console.log("Taslima");
const adds = (a, b) => a + b;   // Arrow Function Definition

//Memory---Stack,Heap
/*Stack-- 
Used for primitive datatype like string,number,boolean.
It means copy of Value is given.
When we assign one variabe to another a copy is made so changing one doesn't affect the other.
*/

let myYoutubeName="TGJ";
let newYoutubeName=myYoutubeName;
console.log(myYoutubeName);
console.log(newYoutubeName);

newYoutubeName="JS";
console.log(newYoutubeName);

/*
Heap--
Used for non-primitive Datatypes like object,array,function.
References/address is given
When we assign one object to another variable reference is copied.
If we change one both variable see the changes.
*/
let user1={
  fName:"Taslima",
  age:21,
  Id:304
}

let user2=user1;
console.log(user1);
user2.Id=311;

console.log(user1.Id);
console.log(user2.Id);
