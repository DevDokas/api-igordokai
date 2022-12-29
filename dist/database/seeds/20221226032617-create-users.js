"use strict";/** @type {import('sequelize-cli').Migration} */
const bcryptjs = require('bcryptjs');

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'users',
      [{
        nome: 'Ramirez',
        sobrenome: 'Ruíz',
        email: 'rzrz@gmail.com',
        password_hash: await bcryptjs.hash('123456789', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Kenio',
        sobrenome: 'Ken',
        email: 'kenken@gmail.com',
        password_hash: await bcryptjs.hash('987654321', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Thalis',
        sobrenome: 'Beirado',
        email: 'talisbeirado@gmail.com',
        password_hash: await bcryptjs.hash('123459876', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      ],
      {},
    );
  },

  async down() {},
};
