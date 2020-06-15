const { users } = require('../database/models');
const bcrypt = require('bcryptjs');

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
    login(req, res, next) { 
        
    }
    

};

module.exports = UserController;