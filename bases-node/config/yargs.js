const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Is a fucking number xd'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        demandOption: false,
        default: false,
        describe: 'is fucking boolean'
    })
    .option('t', {
        alias: 'to',
        type: 'number',
        demandOption: false,
        default: 10,
        describe: 'To default limit is 10 and the maximum limit is 1000'
    })
    .check(
        (argv, option) => {
            if (isNaN(argv.b)) {
                throw 'b or base Is not a number';
            }
            if (argv.t > 1000) {
                throw 'are you stupid? The maximum limit is 1000';
            }
            return true;
        }
    )
    .argv;

module.exports = argv;