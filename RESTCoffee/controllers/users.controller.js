const { response, request } = require('express');
const bcryptjs = require('bcryptjs');

const User = require('../models/user.model');


const usersGET = (req = request, res = response) => {
    const body = req.body;
    res.status(200).json({
        ok: true,
        body
    });
}


const usersPOST = async(req = request, res = response) => {
    const { name, email, password, role } = req.body;
    const user = new User({ name, email, password, role });

    // TODO: VALIDATION, ECRYPT AND SAVE



    const salt = bcryptjs.genSaltSync(20);
    user.password = bcryptjs.hashSync(password, salt);

    await user.save();

    res.status(200).json({
        ok: true,
        body
    });
}

const usersPUT = (req = request, res = response) => {
    const paramsURL = req.query;
    res.status(200).json({
        ok: true,
        paramsURL
    });
}

const usersPATCH = (req, res = response) => {
    res.status(200).json({
        ok: true
    });
}

const usersDELETE = (req, res = response) => {
    res.status(200).json({
        ok: true
    });
}


module.exports = {
    usersGET,
    usersPOST,
    usersPUT,
    usersDELETE,
    usersPATCH
}