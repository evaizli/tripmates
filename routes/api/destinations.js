const express = require("express");
const router = express.Router();
const passport = require("passport");
const validateDestinationInput = require("../../validation/destination");
const User = require("../../models/User");

//test
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

// get single destination for a trip
router.get("/:tripId/:destinationId", passport.authenticate("jwt", { session: false }),
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

// post destination
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
          .catch(err => console.log("error in posting destination from db ", err));
        });
    });
  
// update single destination
router.patch("/:tripId/:destinationId/update", passport.authenticate("jwt", { session: false }),
  (req, res) => {
    User.findById(req.user.id)
      .then(user => {
        const { isValid, errors } = validateDestinationInput(req.body);
        let trip = user.trips.id(req.params.tripId);
        let destination = trip.destinations.id(req.params.destinationId);

        if (!isValid) {
          return res.status(400).json(errors);
        } else {
          destination.location = req.body.location;
          destination.transportation = req.body.transportation;
          destination.housing = req.body.housing;
          destination.notes = req.body.notes;
          destination.startDate = req.body.startDate;
          destination.endDate = req.body.endDate;

          user.save()
            .then(user => {
              return res.json(user);
            })
            .catch(err => res.status(400).json(err));
        }
        res.json(user);
      })
      .catch(err => console.log("error in deleting destination ", err));
  });

// delete single destination 
router.delete("/:tripId/:destinationId", passport.authenticate("jwt", { session: false }),
  (req, res) => {
    User.findById(req.user.id)
      .then(user => {
        const trip = user.trips.id(req.params.tripId);
        trip.destinations.id(req.params.destinationId).remove();
        user.save()
          .then(user => {
            res.json(user);
          });
      })
      .catch(err => console.log("error in deleting destination ", err));
  });


module.exports = router;