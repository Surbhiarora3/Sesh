const User = require("./User");
const PlayList = require("./PlayList");

User.hasMany(PlayList);
PlayList.belongsTo(User)


module.exports = {
    User,
    PlayList
}