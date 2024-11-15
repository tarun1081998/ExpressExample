function ValidateRequest(validationFunction){
    return(req, res, next) => {
        const { error } = validationFunction(req.body)
        if(error){
            return res.status(400).json({
                message: "validation failed",
                error: error.details[0].message
            })
        }
        next()
    }
}

module.exports = ValidateRequest;