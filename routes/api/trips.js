const express = require("express");
const router = express.Router();
const passport = require("passport");
const validateTripInput = require("../../validation/trips");
const Trip = require("../../models/Trip");

router.get("/test", 
    (req, res) => res.json({ msg: "This is the trips route" }));


router.get("/", ( req, res) => {
    Trip
        .find()
        .sort({date: -1})
        .then(trips => res.json(trips))
        .catch(err => res.status(400).json(err));
});

// TBD: consider this code for multiple users (to see mates trips)
// router.get("/user/:user_id", (req, res)=>{
//     Trip
//         .find({author: req.params.user_id})
//         .then(trips => res.json(trips))
//         .catch(err => res.status(400).json(err));
// });


router.get("/:id", (req, res) => {
    Trip
        .findById(req.params.id)
        .then(trip => res.json(trip))
        .catch(err => res.status(400).json(err));
});

router.post("/", 

    passport.authenticate("jwt", {session: false}), 
    debugger
    (req, res) =>{
        const { isValid, errors } = validateTripInput(req.body);

        if (!isValid){
            return res.status(400).json(errors);
        }

        const newTrip = new Trip({
            author: req.user.id,
            tripName: req.body.tripName, 
            tripMates: req.body.tripMates,
            description: req.body.description,
            destinations: req.body.destinations
        });

        newTrip
            .save()
            .then(trip => res.json(trip));
    }

    
);



module.exports = router;
