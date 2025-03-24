/**
 * Database connection configuration
 * @module config/database
 */

const { Sequelize } = require("sequelize");
const path = require("path");

/**
 * Sequelize instance for SQLite database connection
 * @type {Sequelize}
 */
const sequelize = new Sequelize({
  dialect: "sqlite", // Database type
  storage: path.join(__dirname, "../../database.sqlite"), // SQLite file path
  logging: false, // Disables SQL logs for cleaner output
});

module.exports = sequelize;
