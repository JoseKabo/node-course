const Role = require('../models/role.model');

const isValidRole = async(rol = '') => {
    const isExists = await Role.findOne({ rol });
    if (!isExists)
        throw new Error(`Invalid role in db`);
}


module.exports = {
    isValidRole
}