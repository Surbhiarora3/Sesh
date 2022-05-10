const express = require("express");
const exphbs = require("express-handlebars");
const allRoutes = require("./controllers");
const session = require("express-session");
const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
// var SpotifyWebApi = require('spotify-web-api-node');


const app = express();
const PORT = process.env.PORT || 3001;
// Requiring our models for syncing
const { User, PlayList } = require("./models");
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const sess = {
  secret: process.env.SESSION_SECRET,
  cookie: {
    maxAge: 3 * 60 * 60 * 1000
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};
// var spotifyApi = new SpotifyWebApi({
//     clientId:process.env.CLIENT_ID,
//     clientSecret:process.env.CLIENT_SECRET,
//     redirectUri: 'http://localhost:3001/callback'
//   });

app.use(session(sess));
// Static directory
app.use(express.static('public'));

const hbs = exphbs.create({});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use("/", allRoutes);


sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT localhost:" + PORT);
  });
});