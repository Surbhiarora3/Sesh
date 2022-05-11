const SpotifyWebApi = require('spotify-web-api-node');

const scopes = [
    'ugc-image-upload',
    'user-read-playback-state',
    'user-modify-playback-state',
    'user-read-currently-playing',
    'streaming',
    'app-remote-control',
    'user-read-email',
    'user-read-private',
    'playlist-read-collaborative',
    'playlist-modify-public',
    'playlist-read-private',
    'playlist-modify-private',
    'user-library-modify',
    'user-library-read',
    'user-top-read',
    'user-read-playback-position',
    'user-read-recently-played',
    'user-follow-read',
    'user-follow-modify'
  ];
  
  const spotifyApi = new SpotifyWebApi({
    redirectUri: 'http://localhost:3001/callback',
    clientId:'1782ebc441e74783b327c6dfdc0b4e2b',
    clientSecret:'e5698a7873894f45b40333a2e3f6a8fc'
  });

  module.exports={spotifyApi,scopes}
  