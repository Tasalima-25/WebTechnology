
/*
Node.js --->
To run JS code in server

Express --->
-WebFramework for node.js
-Handles routes,http request and middleware

npm---tool for install packages/libraries for node.js

--Every node project have package.json to manage dependencies

Steps to create Express

1.Initialize node project--
npm init -y
-y for creating node package

Q.Difference between .json and lock.json

2.Create file index.js--
npm install express
node modules

*/

const express=require('express')
const app=express()
const port=3000;

app.get('/',(req,res)=>{
    const date=new Date()
    res.send('Hello Express<br> Current Date and Time: '+ date)

})

app.listen(port, ()=>{
    console.log(`Example app listening on http://localhost:${port}`)
})