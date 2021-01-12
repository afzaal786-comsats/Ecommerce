'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.changeColumn('Customers', 'contactNumber', {
        type: Sequelize.STRING,
      }),
    ]);
  },

  down: (queryInterface) => {
    return Promise.all([queryInterface.changeColumn('Customers', 'contactNumber')]);
  },
};
