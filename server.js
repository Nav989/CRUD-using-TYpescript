"use strict";
exports.__esModule = true;
var express_1 = require("express");
// import logger from "winston" ;
// import util from  "util";
var app = (0, express_1["default"])();
var route = require("./routes/index");
var db = require('./database/mysql.ts');
var port = 4001;
route(app);
db.sequelize.sync({
    force: false
})
    .then(function () { return [
    console.log('My SQL Tables Synced Successfully.')
]; })["catch"](function (err) {
    console.log('Error While Syncing My SQL Tables. Error: %j', err);
});
app.listen(process.env.PORT || port, function () {
    console.log("connected to server ".concat(port));
});
