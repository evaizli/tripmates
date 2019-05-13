const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const DestinationSchema = require("./Destination");

const TripSchema = new Schema({
    author: {
        type: Schema.Types.ObjectId,
        ref: "users"
    },

    tripMates: {
        type: Array,
        required: false,
        default: undefined //may need to change to empty array
    },
    tripName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    destinations: [DestinationSchema],
    date: {
        type: Date,
        default: Date.now
    }
});

const Trip = mongoose.model("trips", TripSchema);

module.exports = Trip;