const superHeros=[
    "SpiderMan",
    "Batman",
    "Balveer",
    "IronMan",
    "Thor",
    "Captain America"
];

const villains=[
    "Thanos",
    "Loki",
    "Green Goblin",
    "Red skull"
];

superHeros.push(villains);

console.log(superHeros);

console.log(superHeros[3]);
console.log(superHeros[6][2]);

//Array Concat
const arr1=superHeros.concat(villains);
console.log(arr1);

const arr2=[1,2,3,[4,5,6],7,[6,7,[4,5]]];
console.log(arr2);

const arr3=arr2.flat(Infinity); //Flatten all levels no matters how  deep the nesting is
console.log(arr3);
//Flat doesn't change original array it returns new array useful in nested array

const arr4=arr2.flat(1);
console.log(arr4);

//Data Scripting using these methods

console.log(Array.isArray("Taslima")); //Check given value is array or not
//We can use string not an array that is why output is false

console.log(Array.from("Taslima")); //Converts an iteratable object light string,set,map into array

console.log(Array.from({name:"Taslima"}));
console.log(Object.keys({name:"Taslima"}));
console.log(Object.values({name:"Taslima"}));

let score1=100;
let score2=200;
let score3=300;
//Create new array from given value no matters how many 

//Q.Difference between array.of amd array.from
//Array.of--Converts Value
//Array.from--Converts iteratable
console.log(Array.of(score1,score2,score3));
