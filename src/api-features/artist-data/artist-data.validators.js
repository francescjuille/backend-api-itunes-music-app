const { body } = require('express-validator')

module.exports = {

    validate_artist_name() {
        return [
            body('artistName', 'artistName is invalid').exists().notEmpty().escape(),
        ]
    },

}