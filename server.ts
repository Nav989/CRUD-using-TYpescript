export {}
const express = require("express");
const bodyParser = require("body-parser")
const util = require('util');
 const configer = require("./configuration/config.ts")
const routes = require('./routes/index.ts');
 
 const db1=require('./database/mysql.ts');
// let logger ;
const logger = require('./utils/logger.ts')
const app = express();


app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(express.json());

routes(app);

db1.sequelize.sync({
    force: false
})
.then(() => [
    logger.info(util.format('My SQL Tables Synced Successfully.'))
]).catch(err => {
    logger.error(util.format('Error While Syncing My SQL Tables. Error: %j', err))
})


app.listen(process.env.PORT || configer.get('server.port'), () => {
    // console.log("connected to server")
    logger.info(util.format('BASE NODE API Server with pid: %s listening on port: %s', process.pid, configer.get('server.port')))
    logger.info(util.format('Environment: %s', configer.get('env')))
})


