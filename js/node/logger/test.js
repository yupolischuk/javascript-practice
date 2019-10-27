var logger = require('./logger');

var logData = {
    'param': 'value',
    'param2': 7
};

logger.log(logData, 'logname.txt', __line);
