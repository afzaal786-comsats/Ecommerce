'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('Products', 'categoryID', {
        type: Sequelize.INTEGER,
        references : {
          model : 'Categories',
          key : 'id',
          as : 'categoryID'
        },
      }),
    ]);
  },

  down: (queryInterface) => {
    return Promise.all([queryInterface.removeColumn('Products', 'categoryID')]);
  },
};
