'use strict';
module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.addColumn('users', 'estado', {
            type: Sequelize.INTEGER,
            defaultValue: 1,
        });
    },
    down: async(queryInterface, Sequelize) => {
        await queryInterface.addColumn('users');
    }
};