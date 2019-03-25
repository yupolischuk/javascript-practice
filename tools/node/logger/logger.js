// Writes to file current line of code, datetime, and given data

const fs = require('fs');
var logData = '';

// Get execution line
Object.defineProperty(global, '__stack', {
    get: function(){
        var orig = Error.prepareStackTrace;
        Error.prepareStackTrace = function(_, stack){ return stack; };
        var err = new Error;
        Error.captureStackTrace(err, arguments.callee);
        var stack = err.stack;
        Error.prepareStackTrace = orig;
        return stack;
    }
});

Object.defineProperty(global, '__line', {
    get: function(){
        return __stack[1].getLineNumber();
    }
});
// console.log(__line);


function getDateTime() {
    var date = new Date();

    var hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;

    var min  = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;

    var sec  = date.getSeconds();
    sec = (sec < 10 ? "0" : "") + sec;

    var year = date.getFullYear();

    var month = date.getMonth() + 1;
    month = (month < 10 ? "0" : "") + month;

    var day  = date.getDate();
    day = (day < 10 ? "0" : "") + day;

    return year + ":" + month + ":" + day + ":" + hour + ":" + min + ":" + sec;
}


function log(data='', fileName, line) {
    fs.appendFile(
        __dirname + '/' + fileName, 'line: ' + line + ' - ' + getDateTime() + '\n' +
        JSON.stringify({data}), function(err) {
            if (err) {
                return console.log(err);
            }

            console.log("Log have been written");
        });
}


module.exports.log = log;
