const { Users } = require("../database/models");
const jwt = require('jsonwebtoken');
const env = process.env.NODE_ENV || 'development';
const {  jwt_secret } = require('../config/config.js')[env];

const authentication = async (req, res, next) => {
    try {
        //Get Token from auth, get the payload and add user in req.
        const token = req.headers.authorization;
        const payload = jwt.verify(token, jwt_secret);
        let user = await Users.findByPk(payload.id);
        req.user = user;
        next();
    } catch (error) {
        res.status(401).send({
            message: "You're not authorized",
            error
        })
    }
}

const isAdmin = async (req, res, next) => {
    const admins =['superAdmin','admin'];
    if (!admins.includes(req.user.role)) {
        return res.status(403).send({
            message: 'You do not have permission to view this section'
        });
    }
    next();
}

module.exports = {
    authentication,
    isAdmin
};