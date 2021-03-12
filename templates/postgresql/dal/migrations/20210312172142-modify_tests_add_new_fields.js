'use strict';

//How to add new fields with migration
//https://dev.to/nedsoft/add-new-fields-to-existing-sequelize-migration-3527

module.exports = {
    up: async (queryInterface, Sequelize) => {
        /**
         * Add altering commands here.
         *
         * Example:
         * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
         */

        return Promise.all(
            [
                queryInterface.addColumn(
                    'Tests', // table name
                    'name', // new field name
                    {
                        type: Sequelize.STRING,
                        allowNull: true,
                    },
                )
            ]
        );
    },

    down: async (queryInterface, Sequelize) => {
        /**
         * Add reverting commands here.
         *
         * Example:
         * await queryInterface.dropTable('users');
         */
    }
};
