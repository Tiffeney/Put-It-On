const
	express = require('express'),
	usersRouter = new express.Router(),
	usersCtrl = require('../controllers/users.js'),
	verifyToken = require('../serverAuth').verifyToken;

usersRouter.get('/', usersCtrl.index)
usersRouter.post('/', usersCtrl.create)
usersRouter.post('/authenticate', usersCtrl.authenticate);

// Protected
usersRouter.use(verifyToken);
usersRouter.get('/:id', usersCtrl.show)
usersRouter.patch('/:id', usersCtrl.update)
usersRouter.delete('/:id', usersCtrl.destroy)
usersRouter.post('/:id/days')
usersRouter.get('/:id/days/:dayId') 
usersRouter.patch('/:id/days/:dayId') 
usersRouter.delete('/:id/days/:dayId') 

module.exports = usersRouter