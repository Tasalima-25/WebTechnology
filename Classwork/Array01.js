//Array
let myarr=[0,1,2,3,4,5];
console.log(`MyArray ${myarr}`);

console.log(typeof(myarr));

const arr=new Array(0,1,3);
console.log(arr[1]);

//Array Methods
arr.push(7);  //Add element in array
console.log(arr);

arr.pop(7);
console.log(arr);

arr.unshift(9);   //shift all elements and add element at first position
console.log(arr);

arr.shift(9);
console.log(arr);  //Remove value from first

console.log(arr.includes(8,6));   //Check values are present in array or not

console.log(arr.indexOf(3));   //Return index of number

//Activity----- Split and Slice use


