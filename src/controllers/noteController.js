const { Note } = require("../models");

// Créer une note
exports.createNote = async (req, res, next) => {
  try {
    const { title, content } = req.body;

    if (!title) {
      return res.status(400).json({ message: "Le titre est requis" });
    }

    const note = await Note.create({ title, content });

    res.status(201).json(note);
  } catch (error) {
    next(error);
  }
};

// Récupérer toutes les notes
exports.getAllNotes = async (req, res, next) => {
  try {
    const notes = await Note.findAll({
      order: [["createdAt", "DESC"]],
    });

    res.json(notes);
  } catch (error) {
    next(error);
  }
};

// Récupérer une note par son ID
exports.getNoteById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const note = await Note.findByPk(id);

    if (!note) {
      return res.status(404).json({ message: "Note non trouvée" });
    }

    res.json(note);
  } catch (error) {
    next(error);
  }
};

// Mettre à jour une note
exports.updateNote = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;

    const note = await Note.findByPk(id);

    if (!note) {
      return res.status(404).json({ message: "Note non trouvée" });
    }

    if (title) note.title = title;
    if (content !== undefined) note.content = content;

    await note.save();

    res.json(note);
  } catch (error) {
    next(error);
  }
};

// Supprimer une note
exports.deleteNote = async (req, res, next) => {
  try {
    const { id } = req.params;
    const note = await Note.findByPk(id);

    if (!note) {
      return res.status(404).json({ message: "Note non trouvée" });
    }

    await note.destroy();

    res.status(204).end();
  } catch (error) {
    next(error);
  }
};
