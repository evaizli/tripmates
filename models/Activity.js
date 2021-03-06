const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ActivitySchema = new Schema({
    activityName: {
       type: String, 
       required: false
    },
    location: {
        type: String,
        required: false
    },
    address: {
        type: String,
        required: false
    },
    mates: {
        type: Array,
        required: false
    },
    tag: {
        type: Array,
        required: false
    },
    image: {
        type: Array,
        required: false
    },
    notes: {
        type: String,
        required: false
    },
    activityDate: {
        type: String,
        required: true,
    },
    startTime: {
        type: String,
        required: true,
    },
    endTime: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    },
    tripId: {
        type: Schema.Types.ObjectId, ref: 'trips',
    }
});

module.exports = ActivitySchema;