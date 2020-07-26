var fs = require('fs');

var Data = require('./XLSXreader');

fs.writeFile ("input.js", JSON.stringify(Data.data), function(err) {
    if (err) throw err;
    console.log('converted to JSON');
    }
);

fs.writeFile("input1.js",JSON.stringify(Data.data1), function(err) {
    if (err) throw err;
    console.log('converted to JOSN');
    }
);