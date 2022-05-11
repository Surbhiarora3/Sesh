const { extname } = require('path');
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class PlayList extends Model {}

PlayList.init({
    title:{
        type:DataTypes.STRING,
        allowNull:false
    },
    body:{
        type:DataTypes.TEXT,
        allowNull:false
    },
    url:{
        type:DataTypes.STRING,
        allowNull:false
    }

},
{
    sequelize
});
module.exports=PlayList