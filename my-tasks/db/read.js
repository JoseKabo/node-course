const fs = require('fs');

const PATH = require('./CONFIG');

const read = () => {

    if (!fs.existsSync(PATH))
        return null;

    const info = fs.readFileSync(
        PATH, { encoding: 'utf-8' }
    );

    const data = JSON.parse(info);

    // console.log(data);

    return data;
}

module.exports = read;