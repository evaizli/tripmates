const express = require("express");
const app = express();
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const users = require("./routes/api/users");
const tweets = require("./routes/api/tweets");
const User = require("./models/User");
// const bodyParser = require('body-parser');


mongoose
    .connect(db, {userNewUrlParse: true})
    .then(() => console.log("Connected to MongoDB sucessfully"))
    .catch(err => console.log(err));

app.get("/", (req, res) => {
    const user = new User({
        handle: "jim",
        email: "jim@jim.jim",
        password: "password"
    });
    user.save();
    res.send("Hello World!!");
});

app.use("/api/users", users);
app.use("/api/tweets", tweets);


const port = process.env.PORT || 5000;

app.listen(port, ()=> console.log(`Server is running on port ${port}`));

// app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json());

