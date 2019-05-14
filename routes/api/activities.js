const express = require("express");
const router = express.Router();
const Activity = require("../../models/Activity");
const passport = require("passport");
const validateActivityInput = require("../../validation/activity");
const Trip = require("../../models/Trip");

router.get("/test",
  (req, res) => res.json({ msg: "This is the activities route" }));


router.get("/", (req, res) => {
  Activity
    .find()
    .sort({ date: -1 })
    .then(activities => res.json(activities))
    .catch(err => res.status(400).json(err));
});

router.get("/:id", (req, res) => {
  Activity.findById(req.params.id)
    .then(activity => res.json(activity))
    .catch(err => res.status(400).json(err));
});


router.post( "/",

  passport.authenticate("jwt", { session: false }),

  (req, res) => {
    const { isValid, errors } = validateActivityInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newActivity = new Activity({
      tripId: req.trip.id,
      name: req.body.name,
      location: req.body.location,
      address: req.body.address,
      mates: req.body.mates,
      tag: req.body.tag,
      image: req.body.image,
      notes: req.body.notes,
      startTime: req.body.startTime,
      endTime: req.body.endTime,
    });


    Trip.activities.push(newActivity)
        .save()
        .then(activity => res.json(activity))
        .catch (err => res.status(400).json(err));
  }
);



module.exports = router;

///
// NOTES: what kind of routes do we need for activities