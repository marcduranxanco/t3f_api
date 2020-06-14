const { users } = require('../database/models');

const UserController = {

    /* CRUD USERS */
//Create
    create(req, res) {
        // users.create(req.body)
        // .then(user => res.status(201).send(user))
        // .catch(error => {
        //     console.error(error);
        //     res.status(500).send({
        //         message: `There was a problem trying to register the user`
        //     })
        // });
        res.send('Create');
    },
//Read
    getAll(req, res, next) { res.send('Get all')},
    getOne(req, res, next) { res.send('Get one')},
//Update
    update(req, res, next) { res.send('update')},
//Delete
    delete(req, res, next) { res.send('delete')}

/* LOGIN */

};

module.exports = UserController;