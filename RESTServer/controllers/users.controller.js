const { response, request } = require('express');

const usersGET = (req = request, res = response) => {
    const body = req.body;
    res.status(200).json({
        ok: true,
        body
    });
}


const usersPOST = (req = request, res = response) => {
    const paramsPATH = req.params.id;
    res.status(200).json({
        ok: true,
        paramsPATH
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