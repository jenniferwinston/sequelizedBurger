// give devoured a default of false

'use strict';
module.exports = function(sequelize, DataTypes) {
  var Burgers = sequelize.define('Burgers', {
    
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
        Burgers.belongsTo(models.Customers, { foreignKey: 'customer_id'});
      }
    }
  });
  return Burgers;
};