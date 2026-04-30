
const express = require('express')
const app = express()
const port = 3000

/*
function CheckRoute(req,res,next){
    console.log(req.url);
    next();
    app.use(CheckRoute)
}

app.get('/', (req, res) => {
  res.send('Home Page');
});

app.get('/about', (req, res) => {
  res.send('About Page');
});


app.post('/login', (req, res) => {
  res.send('Login Successful');
});
*/

app.use((req,res,next)=>{
    console.log("Data Recieved",new Date());
    next();

});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



/*
Activity--

1.Why we use middleware
2.What is types of Middleware
3.what is benefits of Middleware
4.How middleware is used in company level

1️⃣ Why we use Middleware

👉 Middleware is used to check or process request before it reaches server

📌 Simple:

It works like a middle helper
Example: checking login, validating data
2️⃣ Types of Middleware

👉 Main types:

Application Middleware → works on whole app
Router Middleware → works on specific route
Built-in Middleware → already given (like JSON)
Third-party Middleware → installed (like cors)
Error Middleware → handles errors
3️⃣ Benefits of Middleware

👉 Easy points:

✔ Improves security
✔ Makes code clean & reusable
✔ Helps in validation
✔ Used for logging & debugging
4️⃣ Middleware in Company Level

Companies use middleware for:

Login checking (authentication)
Logging user activity
Error handling
Security (API protection)
Super Short (for viva)

Middleware is a function used between request and response to check or process data.



*/


