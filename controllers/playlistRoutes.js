const express = require("express");
const router = express.Router();
const {User,PlayList} = require("../models");
const SpotifyWebApi = require('spotify-web-api-node');

const spotifyApi = new SpotifyWebApi();
spotifyApi.setAccessToken('BQBz8vSyPTPJBcyAV65W_VCfuW688LUq-vwaS3MSaku1fmV_iJJV6EH9CzhWPUK3aIS8-rKNPSWI8C5t8wRZs_UKiucx5B-OYoJ2G_bgdwzUC9PUI1Ee1A4N8fgwXAQLr7aaVNq9_ZL-_x5VSiffSd7I02Xbncv82u35mBTE9xp-NkFBgqRWp1KD4ctzQjj0RlxUaHoU2mpP0tB3_0yn_H70Ms1dNLUyXEvH27pcg2WnVrLpY_xIlj3Jq43xnVEirKWf5s1UpbIyRnkp4W-UvoXSxp3d7dbj7QK6M8diJOGI-WhPosPh');

(async () => {
  const me = await spotifyApi.getMe();
  console.log(me);
})().catch(e => {
  console.error(e);
});

router.get('/',(req,res)=>{
  //PlayList.findAll(
    spotifyApi.searchPlaylists('workout')
    .then(function(data) {
      res.json(data.body)
      console.log('Found playlists are', data.body);
    }, function(err) {
      console.log('Something went wrong!', err);
    })
  
    //)
      .catch(err => {
        console.log(err);
        res.status(500).json({ msg: "an error occured", err });
      });
  });

   
module.exports = router;