const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const DestinationSchema = require("./Destination");
const ActivitySchema = require("./Activity");

const TripSchema = new Schema({
    tripMates: [{
        type: Schema.Types.ObjectId, ref: "users",
        required: false,
        default: undefined //may need to change to empty array
    }],
    tripName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    destinations: [DestinationSchema],
    activities: [ActivitySchema],
    date: {
        type: Date,
        default: Date.now 
    }
});

// const Trip = mongoose.model('trips', TripSchema);

module.exports = TripSchema;

