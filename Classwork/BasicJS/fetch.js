/*
Fetch---
--Fetch is a JS method used to make http request
--It return Promises

*/

//fetch("url");

fetch("https://jsonplaceholder.typicode.com/users/3").then((Response)=>{
    return Response.json()
}).then((data)=>{
    console.log(data)
}).catch((error)=>{
    console.log(error)
})


//Home Activity--

//1.fetch()
fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(data => {
    console.log("Fetch Example:", data);
})
.catch(error => console.log(error));

//2.Modern way of Asynch await with fetch()
async function getUsers() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users");
        let users = await response.json();
        console.log("Async/Await Example:", users);
    } catch (error) {
        console.log(error);
    }
}

getUsers();

//3.Fetch user displaying names in html List
async function displayUsers() {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let users = await response.json();

    let ul = document.getElementById("userList");

    users.forEach(user => {
        let li = document.createElement("li");
        li.textContent = user.name;
        ul.appendChild(li);
    });
}

displayUsers();

//4.fetch post show first 5 records
async function displayPosts() {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let posts = await response.json();

    let ul = document.getElementById("postList");

    posts.slice(0, 5).forEach(post => {
        let li = document.createElement("li");
        li.textContent = post.title;
        ul.appendChild(li);
    });
}

displayPosts();

//5.Create a fake promise manually-that resolves and reject after 3 seconds
let fakePromise = new Promise(function(resolve, reject) {

    setTimeout(function() {

        let success = true;  // change to false to test reject

        if (success) {
            resolve("Fake Promise Resolved after 3 seconds");
        } else {
            reject("Fake Promise Rejected after 3 seconds");
        }

    }, 3000);

});

fakePromise
.then(result => console.log(result))
.catch(error => console.log(error));



/*
Questions--

What is Promise in JS
What is Promise status
Difference between promise and callback
What is Fetch() in JS
What does fetch() returns?
Why do we use response.json?
Difference between then and catch
Difference between Asynch and await
What is Promise Chain?

*/

