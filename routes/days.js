const
	express = require('express'),
	daysRouter = new express.Router(),
    // Day = require('../controllers/users.js')
	usersCtrl = require('../controllers/users.js'),
	verifyToken = require('../serverAuth').verifyToken;

daysRouter.delete('/:dayId', usersCtrl.deleteDay),

daysRouter.use(verifyToken);
daysRouter.get('/', usersCtrl.listDays),
daysRouter.post('/', usersCtrl.createDay),

daysRouter.post('/:dayId/meals', usersCtrl.createMeal)
daysRouter.delete('/:dayId/meals/:meal_id', usersCtrl.deleteMeal); 

// daysRouter.get('/:id/days/:dayId', daysCtrl.show) 
// daysRouter.patch('/:id/days/:dayId', daysCtrl.update) 
// daysRouter.delete('/:id/days/:dayId', daysCtrl.destroy)

module.exports = daysRouter