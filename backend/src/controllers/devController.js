const dev = require('../models/dev')
const axios = require('axios')

module.exports = {
    async store(request,response) {
        const { github_username, techs } = request.body
        const githubResponse = await axios.get(`https://api.github.com/users/${github_username}`)
        const {name = login, avatar_url, bio, locationString = location} = githubResponse.data
        const techArray = techs.split(',').map(tech => tech.trim())
        const {latitude = latt, longitude = longt} = await axios.get(`https://geocode.xyz/${locationString}?json=1`)
        const newDeveloper = await dev.create({
            github_username,
            name,
            avatar_url,
            bio,
            techs: techArray,
            location: {
                type: 'Point',
                coordinates: [longitude, latitude]
            }
        })
        return response.json(newDeveloper)
    },
    async getAll(request,response) {
        const allDevs = await dev.distinct('name')
        return response.json({message:'search developers',dataGet:allDevs})
    }
}