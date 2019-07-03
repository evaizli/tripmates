const express = require("express");
const router = express.Router();
const passport = require("passport");
const validateDestinationInput = require("../../validation/destination");
const User = require("../../models/User");
const Destinations = require("../../models/Destination");

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
        const newDestination = trip.destinations[trip.destinations.length - 1];
        user.save()
          .then(() => {
            return res.json(newDestination);
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
            .then(() => {
              return res.json(destination);
            })
            .catch(err => res.status(400).json(err));
        }
      })
      .catch(err => console.log("error in updating destination ", err));
  });
  
router.delete("/:tripId/:destinationId/delete", passport.authenticate("jwt", { session: false }),
  (req, res) => {
    User.findById(req.user.id)
      .then(user => {
        const tripId = req.params.tripId;
        const destinationId = req.params.destinationId; 
        const trip = user.trips.id(tripId);
        trip.destinations.id(destinationId).remove();

        user.save().then(user => {
          res.json({ tripId, destinationId });
        });

      })
      .catch(err => console.log("error in deleting destination ", err));
  });


module.exports = router;