"use strict";

var models = require('../models');
var sequelizeConnection = models.sequelize;

//set foriegn key check to 0 to drop table
sequelizeConnection.query('SET FOREIGN_KEY_CHECKS = 0')

//drop the table
.then(function() {
	return sequelizeConnection.sync({force:true});
})

//create burger entry
.then(function(){

		return models.Burger.create(
		{
			name: 'Bacon Burger',
			User: {
				name: 'Jennifer'
			}
		},
		{
			include: [models.User]
		});
})

.then(function(){
	return models.Burger.create(
	{
		name: 'Veggie Burger',
		User: {
			name: 'George'
		}
	},
	{
		include: [models.User]
	})
})
.then(function(){
	console.log("Completed");
});

