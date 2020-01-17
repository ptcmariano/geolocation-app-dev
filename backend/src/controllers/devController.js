const dev = require('../models/dev')
const axios = require('axios')

module.exports = {
    async store(request,response) {
        const { github_username, techs, latitude, longitude } = request.body
        const githubResponse = await axios.get(`https://api.github.com/users/${github_username}`)
        const {name = login, avatar_url, bio} = githubResponse.data
        const techArray = techs.split(',').map(tech => tech.trim())
        const location = {
            type: 'Point',
            coordinates: [longitude, latitude]
        }
        const newDeveloper = await dev.create({
            github_username,
            name,
            avatar_url,
            bio,
            techs: techArray,
            location
        })
        return response.json(newDeveloper)
    },
    async getAll(request,response) {
        const allDevs = await dev.distinct('name')
        return response.json({message:'search developers',dataGet:allDevs})
    }
}