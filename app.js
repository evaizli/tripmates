const express = require("express");
const app = express();
const mongoose = require('mongoose');
const users = require("./routes/api/users");
const bodyParse = require('body-parse');

app.get("/", (req, res) => {
    res.send("Hello World!!");
    });
app.use("/api/users", users);

const db = require('./config/keys').mongoURI;

mongoose
    .connect(db, {userNewUrlParse: true})
    .then(() => console.log("Connected to MongoDB sucessfully"))
    .catch(err => console.log(err));

const port = process.env.PORT || 5000;

app.listen(port, ()=> console.log(`Server is running on port ${port}`));

app.use(bodyParse.urlencoded({extended: false}));
app.use(bodyParse.jon());

