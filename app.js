const express = require("express");
const app = express();
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const users = require("./routes/api/users");
const tweets = require("./routes/api/tweets");
const User = require("./models/User");
const bodyParser = require('body-parser');
const passport = require('passport');


mongoose
    .connect(db, {userNewUrlParse: true})
    .then(() => console.log("Connected to MongoDB sucessfully"))
    .catch(err => console.log(err));

// tell the app to respond to json and other softwares 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("Hello World!!");

});

app.use(passport.initialize());
require('./config/passport')(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/users", users);
app.use("/api/tweets", tweets);


const port = process.env.PORT || 5000;
app.listen(port, ()=> console.log(`Server is running on port ${port}`));



