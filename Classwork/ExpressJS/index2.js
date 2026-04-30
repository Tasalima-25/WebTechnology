//Handling Request and Response
//Express app handles http req and res
//Request-- A req object contain info about client request
//Ex-URL,headers,queryParameters,requestBody


const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  console.log(req.query.name);

});

/*
Detail Study of query parameters with 2-3 real life examples..
Company level example

*/