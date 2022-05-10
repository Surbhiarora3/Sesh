const express = require("express");
const router = express.Router();
const {User,PlayList} = require("../models");
const SpotifyWebApi = require('spotify-web-api-node');

const spotifyApi = new SpotifyWebApi();
spotifyApi.setAccessToken(process.env.SPOTIFY_ACCESS_TOKEN);

(async () => {
  const me = await spotifyApi.getMe();
  console.log(me);
})().catch(e => {
  console.error(e);
});

// router.get('/playlist',(req,res)=>{
//     PlayList.findAll({
//        })
//         .then(dbPlayLists => {
//           res.json(dbPlayLists);
//         })
//         .catch(err => {
//           console.log(err);
//           res.status(500).json({ msg: "an error occured", err });
//         });
//     });
module.exports = router;