/*
--A Promises is an Object that represents 
future result perform Asynchronous programming 
--Simply Promise means a promise that Result gives later
--Real Time Example--Zomato App

Promises has 3 states
--Pending/Waiting
--Resolved/Fulfilled/Suceessed
--Rejected/Failed


*/

let mypromise=new Promise((Resolved,Rejected)=>{
    let success=false;
    if(success)
    {
        Resolved("Data Fetch Suceessfully..!");
    }
    else
    {
        Rejected("Error while Fetching Data");
    }

})

mypromise.then((result)=>{
    console.log(result)

}).catch(()=>{
    console.log("Error!!!"); //Run when Error
})

//Home Activity--Why promises is better than callback

const p1=new Promise((Resolved,Rejected)=>{
    setTimeout(()=>{
        console.log("Asynch Task Completed!");
        Resolved()
    },3000)
})

p1.then(()=>{
    console.log("Promise Consume")
})

//
const p3=new Promise((Resolved,Rejected)=>{
    setTimeout(()=>{
        Resolved(user=({
            userName:"Taslima",
            ID:304
        }))
    },3000)
})

p3.then((user)=>{
    console.log(user)
})


//Home Activity--Create 4 Promises Example

//1.Variable-true then result

let status = true;

let myPromise = new Promise(function(resolve, reject) {

    if (status) {
        resolve("Success: Variable is true");
    } else {
        reject("Error: Variable is false");
    }

});

myPromise
    .then(function(result) {
        console.log(result);
    })
    .catch(function(error) {
        console.log(error);
    });


//2.Asynch using promises-function

function getData() {

    return new Promise(function(resolve, reject) {

        setTimeout(function() {
            resolve("Data received after 2 seconds");
        }, 2000);

    });

}

getData()
    .then(function(result) {
        console.log(result);
    })
    .catch(function(error) {
        console.log(error);
    });


//--3.2 Simple Example

//Example 1
let number = 10;

let checkNumber = new Promise(function(resolve, reject) {

    if (number > 5) {
        resolve("Number is greater than 5");
    } else {
        reject("Number is 5 or less");
    }

});

checkNumber
    .then(function(result) {
        console.log(result);
    })
    .catch(function(error) {
        console.log(error);
    });

//Example 2
let num = 4;

let evenOdd = new Promise(function(resolve, reject) {

    if (num % 2 === 0) {
        resolve("Number is Even");
    } else {
        reject("Number is Odd");
    }

});

evenOdd
    .then(function(result) {
        console.log(result);
    })
    .catch(function(error) {
        console.log(error);
    });





