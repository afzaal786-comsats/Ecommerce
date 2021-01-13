'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Categories',{
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      categoryName: {
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.STRING
      },
    })
  },

  down: async (queryInterface, Sequelize) => queryInterface.dropTable('Categories')
};
