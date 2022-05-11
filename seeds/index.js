const sequelize = require("../config/connection")
const {User,PlayList} = require("../models")
const spotify = require('../controllers/spotifyRoutes')
const user =[{
    username:"myself",
    password:"password"
}]

const playlist = [{
    title:spotify,
    body:spotify
}]



const feedMe = async ()=>{
    try{
        await sequelize.sync({force:true})
        await User.bulkCreate(user,{
            individualHooks:true
        });
        await PlayList.bulkCreate(playlist);
        process.exit(0);
    } catch(err){
        console.log(err)
    }
}

feedMe()