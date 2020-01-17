const moongoose = require('mongoose')

const pointSchema = new moongoose.Schema({
    type: {
        type: String,
        enum: ['Point'],
        required: true
    },
    coordinates: {
        type: [Number]
    }
})

module.exports = pointSchema