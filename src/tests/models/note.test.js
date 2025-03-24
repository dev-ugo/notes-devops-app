/**
 * Tests for the Note model
 * @module tests/models/note
 */

const { Note } = require("../../models");
const sequelize = require("../../config/database");

describe("Note Model", () => {
  /**
   * Before all tests: synchronize the database
   * and recreate tables (force: true)
   */
  beforeAll(async () => {
    await sequelize.sync({ force: true });
  });

  /**
   * After all tests: close the database connection
   */
  afterAll(async () => {
    await sequelize.close();
  });

  /**
   * Test: checks if a note can be created correctly
   * with all required fields and that automatic properties
   * are properly generated
   */
  it("should create a note with required fields", async () => {
    const noteData = {
      title: "Test Note",
      content: "Test content",
    };

    const note = await Note.create(noteData);

    expect(note.id).toBeDefined();
    expect(note.title).toBe(noteData.title);
    expect(note.content).toBe(noteData.content);
    expect(note.createdAt).toBeDefined();
    expect(note.updatedAt).toBeDefined();
  });

  /**
   * Test: verifies that creation fails if
   * title is missing (allowNull: false constraint)
   */
  it("should not create a note without a title", async () => {
    try {
      await Note.create({ content: "Content without title" });
      fail("Creation should fail without a title");
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
});
