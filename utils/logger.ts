const winston = require('winston');
const con = require('../configuration/config.ts')
// winston.emitErrs = true

// created separate httpLogger because we want to log express request separatly
let httpLogger = new winston.createLogger({
  transports: [new winston.transports.File({
    filename: con.get('logger.httpLogFileName'),
    json: true,
    maxsize: con.get('logger.logFileSize'),
    maxFiles: 5,
    colorize: false
  })],
  exitOnError: false
})


// define the custom settings for each transport (file, console)
var options = {
    file: {
      level: 'info',
      filename: con.get('logger.logFileName'),
      handleExceptions: true,
      json: true,
      maxsize:  con.get('logger.logFileSize'),
      colorize: false,
    },
    console: {
      level: 'debug',
      handleExceptions: true,
      json: false,
      colorize: true,
    },
  };
  



const logger = new winston.createLogger({
    transports: [
      new winston.transports.File(options.file),
      new winston.transports.Console(options.console)
    ],
    exitOnError: false, 
  });
  

let stream = {
  write: function (message, encoding) {
    httpLogger.info(message)
  }
}



module.exports = logger