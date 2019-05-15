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
    startTime: {
        type: Date,
        required: true,
        default: Date.now
    },
    endTime: {
        type: Date,
        required: true,
        default: Date.now
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = ActivitySchema;