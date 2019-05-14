const express = require("express");
const router = express.Router();
const passport = require("passport");
const validateTripInput = require("../../validation/trips");
const User = require("../../models/User");

router.get("/test", (req, res) => res.json({ msg: "This is the trips route" }));

// get all trips for a user
router.get("/", passport.authenticate("jwt", {session: false}), 
    (req, res) => {
        User.findById(req.user.id)
            .then(user => {
                const trips = user.trips;
                res.send(trips);
            })
            .catch(err => res.status(400).json(err));
    });

// post a trip for a user
router.post("/", passport.authenticate("jwt", { session: false }),
    (req, res) => {
        User.findById(req.user.id)
            .then(user => {
                const trip = req.body;
                const { isValid, errors } = validateTripInput(req.body);

                if (!isValid) {
                    return res.status(400).json(errors);
                }

                user.trips.push(trip);
                user
                    .save()
                    .then(user => {
                        return res.json(user);
                    })
                    .catch(err => res.send(err));
            });
    });

// get a single trip from a user (not in use)
router.get("/:tripId", passport.authenticate("jwt", { session: false }),
    (req, res) => {
        User.findById(req.user.id)
            .then(user => {
                const trip = user.trips.id(req.params.tripId);
                res.json(trip);
            })
            .catch(err => res.status(400).json(err));
    });

// edit a single trip
router.patch("/:tripId/update", passport.authenticate("jwt", { session: false }), 
    (req, res) => {
        User.findById(req.user.id)
            .then(user => {
                let trip = user.trips.id(req.params.tripId);
                console.log(trip);
                const { isValid, errors } = validateTripInput(req.body);

                if (!trip) {
                    return res.status(400).json(errors);
                } else {
                    trip.tripName = req.body.tripName;
                    trip.tripMates = req.body.tripMates;
                    trip.description = req.body.description;
            
                    user.save()
                        .then(user => {
                            return res.json(user);
                        })
                        .catch(err => res.status(400).json(err));
                }
                
            });
    });

// delete trip
router.delete("/:tripId", passport.authenticate("jwt", {session: false}),
    (req, res) => {
        User.findById(req.user.id)
            .then(user => {
                console.log(user);
                user.trips.id(req.params.tripId).remove();
                res.json(user);
            })
            .catch(err => res.status(400).json(err));
    });


// TBD: consider this code for multiple users (to see mates trips)
// router.get("/user/:user_id", (req, res)=>{
//     Trip
//         .find({author: req.params.user_id})
//         .then(trips => res.json(trips))
//         .catch(err => res.status(400).json(err));
// });


module.exports = router;
