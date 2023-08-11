"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("alkes", [
      {
        name: "Automated Kerg",
        merk: "Diamond Diagnostic",
        type: "Benefusion B56",
        seri: 332312,
        room: "Instalasi Bedah Sentral",
        function: "Operation",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {},
};
