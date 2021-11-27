const express = require("express");

//Express server
const app = express();

//expose the server in port 3000
app.listen(3000, function () {
    console.log("listening on 3000");
});

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get("/delete", (req, res) => {
    res.send("Delete User");
});

app.get("/update", (req, res) => {
    res.send("Update User");
});

app.get("/insert", (req, res) => {
    res.send("Insert User");
});
