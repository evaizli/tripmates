const express = require("express");
const router = express.Router();
const passport = require("passport");
const validateActivityInput = require("../../validation/activity");
const User = require("../../models/User");

router.get("/test",
  (req, res) => res.json({ msg: "This is the activities route" }));

// get all activities
router.get("/:tripId", passport.authenticate("jwt", { session: false }),
  (req, res) => {
    User.findById(req.user.id)
      .then(user => {
        const trip = user.trips.id(req.params.tripId);
        const activities = trip.activities;

        res.send(activities);
      })
      .catch(err => console.log(err, "error in activities"));
  });

// get single activity
router.get("/:tripId/:activityId", passport.authenticate("jwt", { session: false }),
  (req, res) => {
    User.findById(req.user.id)
      .then(user => {
        const trip = user.trips.id(req.params.tripId);
        const activity = trip.activities.id(req.params.activityId);

        if (!activity) {
          return res.status(400).json("there is not a sigle activity");
        } else {
          res.send(activity);
        }
      })
      .catch(err => console.log("error in getting activity ", err));
  });

// post activity
router.post("/:tripId/", passport.authenticate("jwt", { session: false }),
  (req, res) => {
    User.findById(req.user.id)
      .then(user => {
        const activity = req.body;
        const trip = user.trips.id(req.params.tripId);

        if (!trip) {
          return res.status(400).json("there is no trip of this name");
        } else {
          const { isValid, errors } = validateActivityInput(req.body);

          if (!isValid) {
            return res.status(400).json(errors);
          }
        }

        trip.activities.push(activity);
        user.save()
          .then(user => {
            // make sure not to send back the user password
            return res.json(activity);
          })
          .catch(err => console.log("error in posting activity from db ", err));
      });
  });

// patch activities
router.patch("/:tripId/:activityId/update", passport.authenticate("jwt", { session: false }),
  (req, res) => {
    User.findById(req.user.id)
      .then(user => {
        const { isValid, errors } = validateActivityInput(req.body);
        let trip = user.trips.id(req.params.tripId);
        let activity = trip.activities.id(req.params.activityId);
        if (!isValid) {
          return res.status(404).json(errors);
        } else {
          activity.activityName = req.body.activityName;
          activity.activityDate = req.body.activityDate;
          activity.location = req.body.location;
          activity.address = req.body.address;
          activity.mates = req.body.mates;
          activity.tag = req.body.tag;
          activity.image = req.body.image;
          activity.notes = req.body.notes;
          activity.startTime = req.body.startTime;
          activity.endTime = req.body.endTime;
          user.save()
            .then(user => {
              console.log(activity)
              return res.json(activity);
            })
            .catch(err => {
              res.status(400).json(err)
            });
        }
      })
      .catch(err => console.log("error in updating activity ", err));
  });

// delete single activity
router.delete("/:tripId/:activityId", passport.authenticate("jwt", { session: false }),
  (req, res) => {
    User.findById(req.user.id)
      .then(user => {
        const trip = user.trips.id(req.params.tripId);
        trip.activities.id(req.params.activityId).remove();
        user.save().then(user => {
          res.json(user);
        });
      })
      .catch(err => console.log("error in deleting activities ", err));
  });


module.exports = router;

///
// mates: what kind of routes do we need for activities