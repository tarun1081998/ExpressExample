require('dotenv').config()

function validateApiKey(req, res, next){
    const apiKey = req.headers['x-api-key']
    if(apiKey!=='Abracadabra'){
        return res.status(403).json({message: "Unauthorized access"})
    }
    next()
}

module.exports = validateApiKey