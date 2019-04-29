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
    return queryInterface.bulkInsert('Users', [{
      username: 'lutfi',
      email: 'lutfi@x.com',
      password: '$2y$10$LaisWGbwN3f//vZ1PanlAe.qEsNfFmrHFKNDN7/QjpB0305zjznPG',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      username: 'enrico',
      email: 'enrico@x.com',
      password: '$2y$10$LaisWGbwN3f//vZ1PanlAe.qEsNfFmrHFKNDN7/QjpB0305zjznPG',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      username: 'noel',
      email: 'noel@x.com',
      password: '$2y$10$LaisWGbwN3f//vZ1PanlAe.qEsNfFmrHFKNDN7/QjpB0305zjznPG',
      createdAt: new Date,
      updatedAt: new Date
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
     return queryInterface.bulkDelete('Users', null, {});
  }
};
