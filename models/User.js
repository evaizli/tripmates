const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const TripSchema = require('../models/Trip');


const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    displayName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String, 
        required: true
    },
    trips: [TripSchema],
    date: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model('users', UserSchema);


module.exports = User;