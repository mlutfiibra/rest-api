'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Todos', [{
        'title': 'Task A',
        'description': 'Description A',
        'user_id': 1,
        'createdAt': new Date,
        'updatedAt': new Date
      },
      {
        'title': 'Task B',
        'description': 'Description B',
        'user_id': 1,
        'createdAt': new Date,
        'updatedAt': new Date
      },
      {
        'title': 'Task C',
        'description': 'Description C',
        'user_id': 1,
        'createdAt': new Date,
        'updatedAt': new Date
      },
      {
        'title': 'Task D',
        'description': 'Description D',
        'user_id': 1,
        'createdAt': new Date,
        'updatedAt': new Date
      },
      {
        'title': 'Task E',
        'description': 'Description E',
        'user_id': 2,
        'createdAt': new Date,
        'updatedAt': new Date
      },
      {
        'title': 'Task F',
        'description': 'Description F',
        'user_id': 3,
        'createdAt': new Date,
        'updatedAt': new Date
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Todos', null, {});
  }
};
