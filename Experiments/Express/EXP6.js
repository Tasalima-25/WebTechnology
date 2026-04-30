const express = require("express");
const app = express();
const port = 3000;

//app.use(express.json());
//middleware
app.use((req, res, next) => {
    console.log(`Request Method: ${req.method}, URL: ${req.url}`);
    next(); 
});

app.get('/home', (req, res) => {
  res.send('Home Page')
});

app.get('/about', (req, res) => {
  res.send('About Page')
});

app.get('/info', (req, res) => {
  res.send('Information Page')
});

app.get('/contact', (req, res) => {
  res.send('Contact Page')
});

app.listen(port, () => {
  console.log(`Server Starting at http://localhost:${port}`);
})