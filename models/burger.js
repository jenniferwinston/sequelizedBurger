// give devoured a default of false

'use strict';
module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define('Burger', {
    
    burger_name:{ 
      allowNull: false,
      type: DataTypes.STRING
    },
    devoured: { 
      allowNull: false,
      type: DataTypes.BOOLEAN
  },

    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Burger.hasOne(models.Customer);
      }
    }
  });
  return Burger;
};