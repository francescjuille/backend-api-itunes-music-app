var express = require('express');
var router = express.Router();
var artistDataController = require('./artist-data.controller')
const mw = require('../../middleware')
const artistDataValidator = require("./artist-data.validators");
const { body } = require('express-validator')


//console.log(LoginValidator.validate_login)
router.post('/get-albums-by-artist-name', artistDataValidator.validate_artist_name(), artistDataController.getAlbumsByArtistName);
//router.post('/get-album-by-song', artistDataController.createNewUser);

module.exports = router;
