var express = require('express');
var router = express.Router();
var artistDataController = require('./artist-data.controller')
const mw = require('../../middleware')
const artistDataValidator = require("./artist-data.validators");
const { body } = require('express-validator')


router.post('/get-albums-by-artist-name', artistDataValidator.validate_artist_name(), artistDataController.getAlbumsByArtistName);

module.exports = router;
