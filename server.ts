import express from "express" ;
import db from './database/mysql';
import config from './configuration/config';

// import logger from "winston" ;
// import util from  "util";
const app = express();
import routes from "./routes/index";


routes(app);

db.sync({
    force: false
})
.then(() => [
    console.log('My SQL Tables Synced Successfully.')
]).catch((err:any) => {
    console.log('Error While Syncing My SQL Tables. Error: %j', err);
})


app.listen(process.env.PORT || config.get('server.port'), ():void => {
    console.log('connected to server1',config.get('server.port'))
})