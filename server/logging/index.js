var winston = require('winston');

var customLevels = {
  levels: {
    info: 1,
    error: 0
  },
  colors: {
    info: 'green',
    error: 'red'
  }
};

var logger = new (winston.Logger)({
  levels: customLevels.levels,
  transports: [
    new (winston.transports.Console)(),
    new (winston.transports.File)({
      name: 'info-log',
      filename: './server/logging/debug.log',
      level: 'info'
    }),
    new (winston.transports.File)({
      name: 'error-log',
      filename: './server/logging/error.log',
      level: 'error'
    })
  ]
});

module.exports = logger;
