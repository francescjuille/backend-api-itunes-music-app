const artistDataService = require("./artist-data.service");
const Utils = require('../../common/utils')
module.exports = {


     async getAlbumsByArtistName(req, res) {
        console.log("createNewUser call")
        console.log(req.body);
        if(!Utils.handleErrors(req,res))return;
        const artistName = req.body.artistName;
        const resultArtistData = await artistDataService.getDataByArtistName(artistName);
        const resultAlbumsData = artistDataService.filterAlbumsData(resultArtistData);
        if (resultAlbumsData == null){
            return res.status(400).send({"errors":["error, account already created with this email"], "data": null})
        }else{
            return res.status(200).send({"errors":[], "data": {"albums":resultAlbumsData}})
        }
     },

     

}