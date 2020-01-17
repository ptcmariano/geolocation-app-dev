const Router = require('express')
const dev = require('./models/dev')
const axios = require('axios')

const routes = Router()

routes.post('/devs', async (request,response) => {
    const { github_username } = request.body
    const dataGithub = await axios.get(`https://api.github.com/users/${github_username}`)
        .catch(err => {
            console.log('error',err)
            return response.json({
                message:'error to save developer',
                dataSaved:github_username,
                error: err
            })
        })
    const newDeveloper = {
        name: dataGithub.data.name,
        github_username: dataGithub.data.login,
        bio: dataGithub.data.bio,
        avatar_url: dataGithub.data.avatar_url,
        techs: dataGithub.data.public_repos,
    }
    dev.create(newDeveloper)
    return response.json({message:'created developer',dataSaved:newDeveloper})
})

routes.get('/allDevs', async (request,response) => {
    const allDevs = await dev.distinct('name')
    return response.json({message:'search developers',dataGet:allDevs})
})

module.exports = routes