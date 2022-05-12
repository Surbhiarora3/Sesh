
const SpotifyWebApi = require('spotify-web-api-node');
const express = require("express");
const { PlayList } = require('../models');
const router = express.Router();
const {scopes,spotifyApi} = require('../config/spotify')
var currentToken;
 


router.get('/login', (req, res) => {
  res.redirect(spotifyApi.createAuthorizeURL(scopes));
});

router.get('/callback', (req, res) => {
  const error = req.query.error;
  const code = req.query.code;
  const state = req.query.state;
  if (error) {
    //console.error('Callback Error:', error);
    res.send(`Callback Error: ${error}`);
    return;
  }

  spotifyApi
    .authorizationCodeGrant(code)
    .then(data => {
      const access_token = data.body['access_token'];
      const refresh_token = data.body['refresh_token'];
      const expires_in = data.body['expires_in'];
      currentToken = access_token
      spotifyApi.setAccessToken(access_token);
      spotifyApi.setRefreshToken(refresh_token);

      console.log('access_token:', access_token);
      console.log('refresh_token:', refresh_token);

      console.log(
        `Sucessfully retreived access token. Expires in ${expires_in} s.`
      );
     

      setInterval(async () => {
        const data = await spotifyApi.refreshAccessToken();
        const access_token = data.body['access_token'];

        console.log('The access token has been refreshed!');
        console.log('access_token:', access_token);
        spotifyApi.setAccessToken(access_token);
      },expires_in/2*1000); 
      res.send('Success! You can now close the window.');
    })
    .catch(error => {
      console.error('Error getting Tokens:', error);
      res.send(`Error getting Tokens: ${error}`);
    });
});





(async () => {
  const me = await spotifyApi.getMe();
  console.log(me);
})().catch(e => {
  console.error(e);
});

router.get('/api/playlist',(req,res)=>{
  
    console.log(currentToken)
    spotifyApi.setAccessToken(currentToken);
    spotifyApi.searchTracks('Love')
  .then(function(data) {
    console.log('I got ' + data.body.tracks.total + ' results!');

    // Go through the first page of results
    // var firstPage = data.body.tracks.items;
    res.json(data.body.tracks.href)
    console.log('The tracks in the first page are (popularity in parentheses):');
    // firstPage.forEach(function(track, index) {
    //   console.log(index + ': ' + track.name + ' (' + track.popularity + ')');
    }).catch(err => {
        console.log(err);
        res.status(500).json({ msg: "an error occured", err });
      });
  });
// })


router.post('/api/playlist',(req,res)=>{
  console.log(currentToken)
  spotifyApi.setAccessToken(currentToken);
  spotifyApi.searchTracks('Love')
.then(function(data) {
  console.log('I got ' + data.body.tracks.total + ' results!');

  // Go through the first page of results
  // var firstPage = data.body.tracks.items;
  res.json(data.body.tracks.href)
  console.log('The tracks in the first page are (popularity in parentheses):');
  // firstPage.forEach(function(track, index) {
  //   console.log(index + ': ' + track.name + ' (' + track.popularity + ')');
  PlayList.create({
     title:data.body.tracks.href,
     name:data.body.tracks.href,
     url:data.body.tracks.href,
  })
  .then(newList =>{
    res.json(newList)
  }).catch(err => {
    console.log(err);
    res.status(500).json({ msg: "an error occured", err });
  });
})
})
module.exports = router;




