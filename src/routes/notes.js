const express = require("express");
const router = express.Router();
const noteController = require("../controllers/noteController");

// Routes CRUD pour les notes
router.post("/", noteController.createNote);
router.get("/", noteController.getAllNotes);
router.get("/:id", noteController.getNoteById);
router.put("/:id", noteController.updateNote);
router.delete("/:id", noteController.deleteNote);

module.exports = router;
