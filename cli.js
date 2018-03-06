var dir = require('./del.js').dir;
console.log('Starting');
dir(process.cwd(), () => { // first start (directory where executet)
    var path = process.cwd().grey;
    console.log(`Fully scanned "${path}"`.green);
    console.log(`Deletet ${deletet_count.toString().magenta} directoris`);
});