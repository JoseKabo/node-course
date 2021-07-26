const fs = require('fs');

const saveInfo = (data) => {
    const PATH = './db/data.json';

    fs.writeFileSync(PATH, JSON.stringify(data));
}




module.exports = saveInfo;