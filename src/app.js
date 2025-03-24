const express = require("express");
const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/notes", require("./routes/notes"));

// Middleware de gestion d'erreurs
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Une erreur est survenue sur le serveur" });
});

// Middleware pour les routes non trouvées
app.use((req, res) => {
  res.status(404).json({ message: "Route non trouvée" });
});

module.exports = app;
