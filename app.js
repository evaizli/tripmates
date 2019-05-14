const express = require("express");
const app = express();
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const users = require("./routes/api/users");
const trips = require("./routes/api/trips");
const activities = require("./routes/api/activities");
// const destinations = require("./routes/api/destinations");
const bodyParser = require('body-parser');
const passport = require('passport');



mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB sucessfully"))
    .catch(err => console.log(err));

// tell the app to respond to json and other softwares 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(passport.initialize());
require('./config/passport')(passport);

app.use("/api/users", users);
app.use("/api/trips", trips);
app.use("/api/activities", activities);
// app.use("/api/destinations", destinations)

const port = process.env.PORT || 5000;
app.listen(port, ()=> console.log(`Server is running on port ${port}`));



