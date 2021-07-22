const { fileBuilder } = require('./helpers/multi');
const argv = require('yargs').argv;

console.clear();

console.log(argv);

// fileBuilder(base)
//     .then(result => console.log(`The file ${result} was created`))
//     .catch(err => console.log(err));