const app = require("./app");
const sequelize = require("./config/database");

const PORT = process.env.PORT || 3000;

// Synchroniser la base de données et démarrer le serveur
async function startServer() {
  try {
    await sequelize.sync();
    console.log("Base de données synchronisée");

    app.listen(PORT, () => {
      console.log(`Serveur démarré sur le port ${PORT}`);
    });
  } catch (error) {
    console.error("Erreur lors du démarrage du serveur:", error);
  }
}

startServer();
