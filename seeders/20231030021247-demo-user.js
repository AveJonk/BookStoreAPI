'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      nama: 'John',
      alamat: 'Doe',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nama: 'John',
      alamat: 'Doe',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nama: 'John',
      alamat: 'Doe',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nama: 'John',
      alamat: 'Doe',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
