const Router = require('express')
const dev = require('./models/dev')
const axios = require('axios')

const routes = Router()

routes.post('/devs', async (request,response) => {
    const { github_username, techs } = request.body
    const githubResponse = await axios.get(`https://api.github.com/users/${github_username}`)
    const {name = login, avatar_url, bio} = githubResponse.data
    const techArray = techs.split(',').map(tech => tech.trim())
    const newDeveloper = await dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: techArray
    })
    return response.json(newDeveloper)
})

routes.get('/allDevs', async (request,response) => {
    const allDevs = await dev.distinct('name')
    return response.json({message:'search developers',dataGet:allDevs})
})

module.exports = routes