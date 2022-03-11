'use strict';

const userFactory = require('../factories/userFactory')

module.exports = {
  async up(queryInterface, Sequelize) {

    const users = userFactory(3)

    await queryInterface.bulkInsert('users', users, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
