import {Sequelize} from "sequelize-typescript";


import config from '../configuration/config';

const db = new Sequelize(config.get('mysql.database'), config.get('mysql.username'), config.get('mysql.password'), config.get('mysql'));

db.authenticate()
    .then(() => {
        console.log("My SQL Database Connection is established Successfully.");
    }).catch( ()=> {
        console.log("error" + "");
    })


    export default db;
