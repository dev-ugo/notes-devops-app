/**
 * Data model for notes
 * @module models/note
 */

const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

/**
 * Note Model - Represents a note in the application
 * @typedef {Object} Note
 * @property {number} id - Unique identifier generated automatically
 * @property {string} title - Title of the note (required)
 * @property {string} content - Content of the note (optional)
 * @property {Date} createdAt - Creation date (generated automatically)
 * @property {Date} updatedAt - Last modification date (generated automatically)
 */
const Note = sequelize.define(
  "Note",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false, // Title is required
      validate: {
        notEmpty: true, // Title cannot be an empty string
      },
    },
    content: {
      type: DataTypes.TEXT, // TEXT type to support longer content
      allowNull: true, // Content is optional
    },
  },
  {
    timestamps: true, // Automatically enables createdAt and updatedAt
  }
);

module.exports = Note;
