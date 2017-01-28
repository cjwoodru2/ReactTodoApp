var moment = require('moment');

console.log(moment().format());

// January 1st 1970 @ 12:00 -> 0

var now = moment();

console.log("Current timestamp", now.unix())

var timestamp = 1485579101;

var currentMoment = moment.unix(timestamp);

console.log("current moment "+ currentMoment.format('MMM DDD, YY @ H:mm A'));
