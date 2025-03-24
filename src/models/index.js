/**
 * Centralizes all application models
 * @module models
 */

const sequelize = require("../config/database");
const Note = require("./note");

/**
 * Exports all models and the Sequelize instance
 * to facilitate their import elsewhere in the application
 */
module.exports = {
  sequelize,
  Note,
};
