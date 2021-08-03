const { response, request } = require('express');
const bcryptjs = require('bcryptjs');

const User = require('../models/user.model');
const { validationResult } = require('express-validator');


const usersGET = (req = request, res = response) => {
    const body = req.body;
    res.status(200).json({
        ok: true,
        body
    });
}


const usersPOST = async(req = request, res = response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            ok: false,
            msg: errors
        });
    }

    const { name, email, password, role } = req.body;
    const user = new User({ name, email, password, role });

    // TODO: VALIDATION, ECRYPT AND SAVE
    const isExists = await User.findOne({ email });
    if (isExists) {
        return res.status(400).json({
            ok: false,
            msg: 'Email exists now'
        });
    }

    const salt = bcryptjs.genSaltSync(15);
    user.password = bcryptjs.hashSync(password, salt);
    console.log(user);

    await user.save();

    res.status(200).json({
        ok: true,
        user
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