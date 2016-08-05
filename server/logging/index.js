var winston = require('winston');

var customLevels = {
  levels: {
    sql: 0,
    debug: 1,
    info: 2,
    error: 3
  },
  colors: {
    sql: 'blue',
    debug: 'green',
    info: 'yellow',
    error: 'red'
  }
};

var logger = new (winston.Logger)({
  levels: customLevels.levels,
  transports: [
    new (winston.transports.Console)({ level: 'sql' }),
    new (winston.transports.Console)()
  ]
});

module.exports = logger;
