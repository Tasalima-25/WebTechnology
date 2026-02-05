let myDate= new Date();
console.log(myDate);

console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toString());

console.log(typeof(myDate));

//Timestamp--When we create a poll in application then we use TimeStamp

let myTimeStamp=Date.now();
console.log(myTimeStamp);

console.log(Date.now()); //compare in milliseconds
console.log(Date.now()/1000); //convert in seconds
console.log(Math.floor(Date.now()/1000));

let newDate=new Date();
console.log(newDate);

console.log(newDate.getDay());
console.log(newDate.getUTCDate());
console.log(newDate.getMonth());
console.log(newDate.getUTCDay());
console.log(newDate.getFullYear());

console.log(newDate.toLocaleString('default',{weekday:"long"}));