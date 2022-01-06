"use strict";
exports.__esModule = true;
var express = require("express");
var bodyParser = require("body-parser");
var util = require('util');
var configer = require("./configuration/config.ts");
var routes = require('./routes/index.ts');
var db1 = require('./database/mysql.ts');
// let logger ;
var logger = require('./utils/logger.ts');
var app = express();
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(express.json());
routes(app);
db1.sequelize.sync({
    force: false
})
    .then(function () { return [
    logger.info(util.format('My SQL Tables Synced Successfully.'))
]; })["catch"](function (err) {
    logger.error(util.format('Error While Syncing My SQL Tables. Error: %j', err));
});
app.listen(process.env.PORT || configer.get('server.port'), function () {
    // console.log("connected to server")
    logger.info(util.format('BASE NODE API Server with pid: %s listening on port: %s', process.pid, configer.get('server.port')));
    logger.info(util.format('Environment: %s', configer.get('env')));
});
