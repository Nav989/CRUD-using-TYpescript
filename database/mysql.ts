const config = require('../configuration/config.ts')
const { Sequelize,  DataTypes} = require('sequelize');


const sequelize = new Sequelize(config.get('mysql.database'), config.get('mysql.username'), config.get('mysql.password'), config.get('mysql'));



sequelize.authenticate()
    .then(() => {
        console.log("My SQL Database Connection is established Successfully.");
    }).catch( ()=> {
        console.log("error" + "");
    })


let db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require('../models/crud-schema.ts')(sequelize, DataTypes);



module.exports = db;

