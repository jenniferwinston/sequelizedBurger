'use strict';

var customers = require('../models')['customers'];

module.exports = {
  up: function(queryInterface, Sequelize) {

    return queryInterface.createTable('customers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
    .then(function(){

        customers.bulkCreate([{
            name: "Jennifer"
        },
        {
            name: "George"
        }]);
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('customers');
  }
};