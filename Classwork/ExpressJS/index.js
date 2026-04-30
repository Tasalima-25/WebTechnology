/*
const express = require('express')
const app = express()
const port = 3000
"".env"


app.get('/', (req, res) => {

    const time=Date();
    res.json({
    
        time1:time

    })

  res.send('Introducing Express..!!')

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})*/

/*
Activity---
Take 2 Routes and put in on Server

*/

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  const date = new Date()           // get current date & time
  res.send('Hello<br>Current Date & Time: ' + date)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})