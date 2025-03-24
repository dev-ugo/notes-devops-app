const request = require("supertest");
const app = require("../../app");
const { Note } = require("../../models");
const sequelize = require("../../config/database");

describe("API Notes", () => {
  beforeAll(async () => {
    await sequelize.sync({ force: true });
  });

  afterAll(async () => {
    await sequelize.close();
  });

  beforeEach(async () => {
    await Note.destroy({ where: {} });
  });

  describe("POST /notes", () => {
    it("devrait créer une nouvelle note", async () => {
      const noteData = {
        title: "Nouvelle note",
        content: "Contenu de la note",
      };

      const response = await request(app)
        .post("/api/notes")
        .send(noteData)
        .expect(201);

      expect(response.body).toHaveProperty("id");
      expect(response.body.title).toBe(noteData.title);
      expect(response.body.content).toBe(noteData.content);
    });

    it("devrait retourner une erreur 400 si le titre est manquant", async () => {
      await request(app)
        .post("/api/notes")
        .send({ content: "Contenu sans titre" })
        .expect(400);
    });
  });

  describe("GET /notes", () => {
    it("devrait retourner toutes les notes", async () => {
      // Créer quelques notes de test
      await Note.bulkCreate([
        { title: "Note 1", content: "Contenu 1" },
        { title: "Note 2", content: "Contenu 2" },
      ]);

      const response = await request(app).get("/api/notes").expect(200);

      expect(response.body).toHaveLength(2);
      expect(response.body[0]).toHaveProperty("title");
      expect(response.body[1]).toHaveProperty("content");
    });
  });

  describe("GET /notes/:id", () => {
    it("devrait retourner une note spécifique", async () => {
      const note = await Note.create({
        title: "Note Test",
        content: "Contenu test",
      });

      const response = await request(app)
        .get(`/api/notes/${note.id}`)
        .expect(200);

      expect(response.body.id).toBe(note.id);
      expect(response.body.title).toBe(note.title);
    });

    it("devrait retourner une erreur 404 si la note n'existe pas", async () => {
      await request(app).get("/api/notes/999").expect(404);
    });
  });

  describe("PUT /notes/:id", () => {
    it("devrait mettre à jour une note existante", async () => {
      const note = await Note.create({
        title: "Ancienne Note",
        content: "Ancien contenu",
      });

      const updateData = {
        title: "Note Mise à Jour",
        content: "Contenu mis à jour",
      };

      const response = await request(app)
        .put(`/api/notes/${note.id}`)
        .send(updateData)
        .expect(200);

      expect(response.body.title).toBe(updateData.title);
      expect(response.body.content).toBe(updateData.content);
    });
  });

  describe("DELETE /notes/:id", () => {
    it("devrait supprimer une note existante", async () => {
      const note = await Note.create({
        title: "Note à supprimer",
        content: "Contenu",
      });

      await request(app).delete(`/api/notes/${note.id}`).expect(204);

      // Vérifier que la note a bien été supprimée
      const deletedNote = await Note.findByPk(note.id);
      expect(deletedNote).toBeNull();
    });
  });
});
