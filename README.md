# Sesh

https://guarded-harbor-06421.herokuapp.com/

When user login , user will be able to search songs as per Genre and playlist. 

#Steps we followed for our SESH page to work 
1. Logging into spotify account and getting User Id and secret Id. 
var SpotifyWebApi = require('spotify-web-api-node');

var spotifyApi = new SpotifyWebApi({
  clientId: '(getting from spotify account)',
  clientSecret: '(getting from spotify account)',
  redirectUri: 'http://www.example.com/callback'
});

2. Getting access Token - If you've got an access token and want to use it for all calls, simply use the API object's set method. Handling credentials is described in detail in the Authorization section.
spotifyApi.setAccessToken('<your_access_token>');

3. use the methods to request Spotify's Web API , provide a success callback as well as an error callback.

*The functions that fetch data from the API also accept a JSON object with a set of options. For example, limit and offset can be used in functions that returns paginated results, such as search and retrieving an artist's albums.

4. user sign in into SESH page. 
5. getting embedd player in our SESH page 


#dependencies
{
    "bcrypt": "^5.0.1",
    "connect-session-sequelize": "^7.1.3",
    "cors": "^2.8.5",
    "dotenv": "^16.0.0",
    "express": "^4.18.1",
    "express-handlebars": "^6.0.5",
    "express-session": "^1.17.2",
    "mysql2": "^2.3.3",
    "request": "~2.83.0",
    "sequelize": "^6.19.0",
    "spotify-web-api-node": "^5.0.2",
    "querystring": "~0.2.0",
    "cookie-parser": "1.3.2"
  }

#Screenshot of our page 
![Sesh 1](https://user-images.githubusercontent.com/55901542/168380657-1a64c30f-e94d-4da5-acbb-67f5b9a0415d.JPG)

![Sesh 2](https://user-images.githubusercontent.com/55901542/168380662-96265578-b955-4d35-8ba5-6c7bb8162630.JPG)


![sesh 3](https://user-images.githubusercontent.com/55901542/168380669-eb9801aa-75f5-467c-9998-dfd3f1ba9437.JPG)

#Contact Info 
[Phacharapol Phukana](https://github.com/Phacharapol18)

[Tyler Alcover](https://github.com/KIMOISQUIGGLES)

[Khari robertson](https://github.com/krober45)

[Surbhi Arora](https://github.com/Surbhiarora3)
