const Router = require('express')
const dev = require('./models/dev')

const routes = Router()

routes.post('/devs', (request,response) => {
    dev.create({
        name: 'fixed-post',
        github_username: 'fixed-post',
        bio: 'fixed-post',
        avatar_url: 'fixed-post',
        techs: 'fixed-post',
    })
    return response.json({message:'posting to users'})
})

module.exports = routes