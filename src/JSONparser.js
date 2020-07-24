var fs = require('fs');

var Data = require('./XLSXreader');
fs.writeFile ("input.js", JSON.stringify(Data), function(err) {
    if (err) throw err;
    console.log('complete');
    }
);