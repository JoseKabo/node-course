const { boolean } = require('yargs');
const { fileBuilder } = require('./helpers/multi');
const argv = require('./config/yargs');

console.clear();
fileBuilder(argv.b, argv.l, argv.t)
    .then(result => console.log(`The file ${result} was created`))
    .catch(err => console.log(err));