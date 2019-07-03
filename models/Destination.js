const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DestinationSchema = new Schema({
    location: {
        type: String, 
        required: true
    },
    transportation: {
        type: String,
        required: false
    },
    housing: {
        type: String,
        required: false
    },
    notes: {
        type: String,
        required: false
    },
    startDate: {
        type: String,
        required: true,
    },
    endDate: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    },
    tripId: {
        type: Schema.Types.ObjectId, 
        ref: 'trips'
    }
});

module.exports = DestinationSchema;