const
	express = require('express'),
	daysRouter = new express.Router(),
    // Day = require('../controllers/users.js')
	usersCtrl = require('../controllers/users.js'),
	verifyToken = require('../serverAuth').verifyToken;

daysRouter.use(verifyToken);
daysRouter.get('/', usersCtrl.listDays),
daysRouter.post('/', usersCtrl.createDay),
//Create A meal & delete a meal

daysRouter.post('/:dayId/meals', usersCtrl.createMeal) 
// daysRouter.delete('/days/:dayId', usersCtrl.updateDay) 

// daysRouter.get('/:id/days/:dayId', daysCtrl.show) 
// daysRouter.patch('/:id/days/:dayId', daysCtrl.update) 
// daysRouter.delete('/:id/days/:dayId', daysCtrl.destroy)

module.exports = daysRouter