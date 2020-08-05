const { users, token } = require('../database/models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const env = process.env.NODE_ENV || 'development';
const { jwt_secret } = require('../config/config.js')[env];

/* USERCONTROLLER DEFINITION */
const UserController = {};

/* CRUD USERS */
    //CREATE
    UserController.create = async (req, res) => {
        req.body.password = bcrypt.hashSync(req.body.password, 10); //Encrypt the user password
        users.create(req.body)
        .then(user => res.status(201).send(user))
        .catch(error => {
            console.error(error);
            res.status(500).send({
                message: `There was a problem trying to register the user`
            })
        });
    };

    //READ
    UserController.getAll = async (req, res, next) => { res.send('Get all')};
    UserController.getOne = async (req, res, next) => { res.send('Get one')};

    //UPDATE
    UserController.update = async (req, res, next) => { res.send('update')};

    //DELETE
    UserController.delete = async (req, res, next) => { res.send('delete') };

/* LOGIN */
    UserController.login = async (req, res) => { 
        try {
            //Username / Email validation
            const user = await users.findOne({
                $or:[{email:req.body.email},{user_name:req.body.user_name}]
            })
            if (!user) { return res.status(400).send({message: 'This user doesn\'t exists'}) };

            //Password validation
            const pwMatch = bcrypt.compare(req.body.password, user.password);
            if (!pwMatch) { return res.status(400).send({message: 'Password error'}) }

            //JWT Creation
            const jwToken = jwt.sign({ id:user.id}, jwt_secret); //SignToken, and secret (stored at .env file)
            token.create({token:jwToken, id_user:user.id});
            res.send({
                message: 'User loged: ' + user.user_name,
                user,
                jwToken
            })
        } catch (error) {
            console.error(error);
            res.status(500).send({message: 'There whas a problem trying to login'});
        }
    }

module.exports = UserController;