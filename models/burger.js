'use strict';
module.exports = function(sequelize, DataTypes) {
  var Burgers = sequelize.define('Burgers', {
    
    name:{ 
      allowNull: false,
      type: DataTypes.STRING
    },
    devoured: { 
      allowNull: false,
      type: DataTypes.INTEGER
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