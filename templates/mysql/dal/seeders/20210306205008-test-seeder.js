'use strict';
/*
To create a seeder:
sequelize seed:generate --name test-seeder

To run seeder:
sequelize db:seed:all
      OR
sequelize db:seed --seed 20210306205008-test-seeder

To undo seeder:
sequelize db:seed:undo:all
      OR
sequelize db:seed:undo --seed 20210306205008-test-seeder
*/

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('tests', [
      {
        message: "Firts message",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        message: "Second message",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('tests', null, {});
  }
};
