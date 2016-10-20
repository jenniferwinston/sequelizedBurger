// running this will create the burger table; undoing will delete it

'use strict';


module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Burgers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      burger_name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      devoured: {
        allowNull: false,
        type: Sequelize.BOOLEAN
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

          Burgers.bulkCreate([{
              name: "Chesseburger",
              devoured: 0            

          },
          {
              name: "Bacon-a-tor",
              devoured: 0
          }])

    })
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Burgers');
  }
};