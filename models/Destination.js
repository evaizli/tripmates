const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DestinationSchema = new Schema({
   location: {
       type: String, 
       required: true
   },
    startDate: {
        type: Date,
        required: true,
        default: Date.now
    },
    endDate: {
        type: Date,
        required: true,
        default: Date.now
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = DestinationSchema;