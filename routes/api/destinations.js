const express = require("express");
const router = express.Router();
const passport = require("passport");
const validateDestinationInput = require("../../validation/destination");
const User = require("../../models/User");

router.get("/test", (req, res) => res.json({ msg: "this is the destinations routes" }));

// get all destinations
router.get("/:tripId", passport.authenticate("jwt", { session: false }), 
  (req, res) => {
    User.findById(req.user.id)
      .then(user => {
        const trip = user.trips.id(req.params.tripId);
        const destinations = trip.destinations;

        destinations.sort({date: -1});
        res.send(destinations);
      })
      .catch(err => console.log(err, "error in destinations"));
  });

// post route to destination
router.post("/:tripId/", passport.authenticate("jwt", { session: false }),
  (req, res) => {
    User.findById(req.user.id)
      .then(user => {
        const destination = req.body;
        const trip = user.trips.id(req.params.tripId);

        if (!trip) {
          return res.status(400).json("there is no trip of this name");
        } else {
          const { isValid, errors } = validateDestinationInput(req.body);
          
          if (!isValid) {
            return res.status(400).json(errors);
          }
        }

        trip.destinations.push(destination);
        user.save()
          .then(user => {
            // make sure not to send back the user password
            return res.json(user);
          })
          .catch(err => console.log("error in result from db ", err));
        });
    }
  );
  
  // get single destination for a trip
  router.get(":tripId/:destinationId", passport.authenticate("jwt", { session: false }), 
    (req, res) => {
      User.findById(req.user.id)
        .then(user => {
          const trip = user.trips.id(req.params.tripId);
          const destination = trip.destinations.id(req.params.destinationId);

          if (!destination) {
            return res.status(400).json("there is not a sigle destination");
          } else {
            res.send(destination);
          }
        })
        .catch(err => console.log("error in getting destination ", err));
    });



// post route to update destination
router.post("/:id/edit", passport.authenticate("jwt", {session: false}),
  (req, res) => {
    const { isValid, errors } = validateDestinationInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }
    const newData = req.body;
    // req.newData.location = req.body.destination.location;
    // req.newData.transportation = req.body.destination.transportation;
    // req.newData.housing = req.body.destination.housing;
    // req.newData.notes = req.body.destination.notes;
    // req.newData.startDate = req.body.destination.startDate;
    // req.newData.endDate = req.body.destination.endDate;

    const query = {destination: req.body.destination.id};
    Destination.findOneAndUpdate(query, newData, (err, doc) => {
      if (err) {
        return res.send(500, { error: err });
      }
      return res.send({ msg: "Successful update" });
    });
  }
);

module.exports = router;