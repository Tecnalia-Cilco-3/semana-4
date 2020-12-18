'use strict';
module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.addColumn('users', 'rol', {

            type: Sequelize.STRING,

        });
    },
    down: async(queryInterface, Sequelize) => {
        await queryInterface.addColumn('users');
    }
};