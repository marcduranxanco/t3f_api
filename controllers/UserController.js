const { users } = require('../database/models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const UserController = {

    /* CRUD USERS */
//Create
    create(req, res) {
        req.body.password = bcrypt.hashSync(req.body.password, 10); //Encrypt the user password

        users.create(req.body)
        .then(user => res.status(201).send(user))
        .catch(error => {
            console.error(error);
            res.status(500).send({
                message: `There was a problem trying to register the user`
            })
        });
    },
//Read
    getAll(req, res, next) { res.send('Get all')},
    getOne(req, res, next) { res.send('Get one')},
//Update
    update(req, res, next) { res.send('update')},
//Delete
    delete(req, res, next) { res.send('delete')},
    
    /* LOGIN */
    async login(req, res, next) { 
        try {
            //Username validation
            const user = await users.findOne({
                $or:[{email:req.body.email},{user_name:req.body.user_name}]
            })
            if (!user) { return res.status(400).send({message: 'This user doesn\'t exists.'}) }
            
            //Password validation
            const pwMatch = bcrypt.compare(req.body.password,user.password);
            if (!pwMatch) { return res.status(400).send({message: 'Password error.'}) }
        } catch (error) {
            console.error(error);
            res.status(500).send({message: 'There whas a problem trying to login'});
        }
    }
    

};

module.exports = UserController;