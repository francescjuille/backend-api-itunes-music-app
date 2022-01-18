const { body } = require('express-validator')

module.exports = {

    validate_artist_name() {
        return [
            body('artistName', 'password is invalid').exists().notEmpty().escape(),
        ]
    },

}