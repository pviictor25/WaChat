import { QueryInterface, DataTypes, Sequelize } from "sequelize";

module.exports = {
  up: (queryInterface: QueryInterface) => {
    return Promise.all([
      queryInterface.sequelize.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"'),
      queryInterface.addColumn("Tickets", "uuid", {        
        type: DataTypes.UUID,
        allowNull: true,
        defaultValue: require('sequelize').UUIDV4,
      })
    ]);
  },

  down: (queryInterface: QueryInterface) => {
    return queryInterface.removeColumn("Tickets", "uuid");
  }
};
