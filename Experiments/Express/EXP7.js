const express = require("express");
const app = express();
const port = 3000;

const users = [
    { id: 111, name: "Srushti", age: 20 },
    { id: 222, name: "Taslima", age: 22 },
    { id: 333, name: "Riya", age: 19 },
    { id: 444, name: "Dhanashri", age: 22 },
    { id: 555, name: "Sakshi", age: 22 },
    { id: 666, name: "Sonali", age: 22 },
    { id: 777, name: "Shivani", age: 22 },
];

app.get('/user', (req, res) => {
  res.send(users)
});

app.get("/user/:id", (req, res) => {
    const userId = parseInt(req.params.id);

    const user = users.find(u => u.id === userId);

    if (user) {
        res.send(user);
    } else {
        res.status(404).send("User not found");
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

