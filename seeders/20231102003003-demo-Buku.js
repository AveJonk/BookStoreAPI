'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Bukus', [{
      Judul: 'Law of attraction: mengungkap rahasia kehidupan',
      Penerbit: 'Michael Losier',
      Deskripsi: 'The Law of Attraction juga mengajarkan bahwa manusia bertanggungjawab dalam kehidupannya, karena manusia menuai apa yang ia pikirkan dan rasakan. Untuk itulah, tidak bermanfaat menyalahkan Tuhan karena adanya kemalangan nasib manusia.',
      Gambar: 'download.jfif',
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
