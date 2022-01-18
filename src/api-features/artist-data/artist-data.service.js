var moment = require('moment');  
const httpHelper = require('../../common/services/httpHelper');

module.exports = {



    
    async getDataByArtistName(artistName) {
        const artistNameFormated = module.exports.formatArtistName(artistName);
        const searchQuery = "term="+artistNameFormated+"&attribute=albumTerm";
        const result = await httpHelper.httpGet("https://itunes.apple.com/search?"+searchQuery);
        console.log("resultAPIITUNES")
        console.log(result.data)
        return result.data.results;
    },


    filterAlbumsData(artistDataArray) {
        /*atr
            artworkUrl100
            collectionPrice
            artistName
            collectionName
            artistId
            collectionId
        */
       let albumsData = [];
       let albumsId = [];
       artistDataArray.forEach(track => {
            if(!albumsId.includes(track.collectionId)) {
                albumsId.push(track.collectionId);
                const albumInfoObject = {
                    collectionName: track.collectionName,
                    artistName: track.artistName,
                    collectionPrice: track.collectionPrice,
                    collectionImage: track.artworkUrl100
                }
                albumsData.push(albumInfoObject);
            }
        });
        return albumsData;
    },

    formatArtistName(artistName) {
        let artistNameFormated = artistName.trim().toLowerCase().replace(" ", "+")
        console.log("artistNameFormated: "+artistNameFormated)
        return artistNameFormated;
    }
}