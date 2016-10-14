'use strict';
module.exports = function(sequelize, DataTypes) {
  var customers = sequelize.define('customers', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return customers;
};