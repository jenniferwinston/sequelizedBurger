'use strict';


module.exports = function(sequelize, DataTypes) {
  var customers = sequelize.define('customers', {
    
    name: { 
      allowNull: false,
      type: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return customers;
};