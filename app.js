const express = require("express");
const app = express();
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const users = require("./routes/api/users");
const trips = require("./routes/api/trips");
const destinations = require("./routes/api/destinations");
const activities = require("./routes/api/activities");
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require("path");



if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

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
app.use("/api/destinations", destinations);
app.use("/api/activities", activities);

const port = process.env.PORT || 5000;
app.listen(port, ()=> console.log(`Server is running on port ${port}`));


