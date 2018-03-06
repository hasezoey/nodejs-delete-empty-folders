var dir = require('./del.js').dir;
console.log('Starting');
dir(process.cwd(), (dc) => { // first start (directory where executet)
    var path = process.cwd().grey;
    console.log(`Fully scanned "${path}"`.green);
    console.log(typeof dc);
    console.log(`Deletet ${dc.toString().magenta} directoris`);
});
