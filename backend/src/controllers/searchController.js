const dev = require('../models/dev')
const parseStringAsArray = require('./helpers/parseStringAsArray')

module.exports = {
    async index(request,response) {
        const { techs, latitude, longitude } = request.query
        const techsArray = parseStringAsArray(techs)
        const devs = await dev.find({
            techs: {
                $in: techsArray
            },
            location: {
                $near: {
                    type: 'Point',
                    coordinates: [longitude, latitude]
                },
                $maxDistance: 20000
            }
        })
        return response.json({ devs })
    }
}