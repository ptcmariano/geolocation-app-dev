
const mongoose = require('mongoose')

const devSchema = new mongoose.Schema({
    name: String,
    github_username: String,
    bio: String,
    avatar_url: String,
    techs: [String],
    // latitude: 
    // longitude: 
})

module.exports = mongoose.model('dev', devSchema)