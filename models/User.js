// creates table for users

module.exports = function(sequelize, DataTypes){
	var User = sequelize.define('User', {
		id: {
			type: DataTypes.INTEGER,
			autoIncremennt: true,
			primaryKey: true
		},
		name: {
			type: DataTypes.STRING
		}
	});
	return User;
}