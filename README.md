# Notes-DevOps-App

## Présentation du projet

Ce projet est un exemple pratique de mise en œuvre des principes DevOps dans le cadre d'une application web simple. En tant que jeune développeur souhaitant approfondir mes connaissances en DevOps, j'ai créé cette application de gestion de notes pour explorer et appliquer les meilleures pratiques de développement logiciel moderne.

## Objectifs d'apprentissage

À travers ce projet, je cherche à maîtriser plusieurs concepts clés :

- Test-Driven Development (TDD) pour améliorer la qualité du code
- Conteneurisation avec Docker pour standardiser les environnements
- Intégration et déploiement continus (CI/CD) avec GitHub Actions
- Architecture logicielle modulaire et maintenable

## Technologies utilisées

### Backend

- **Express.js** : Framework web léger pour Node.js
- **Sequelize** : ORM pour interagir avec la base de données
- **SQLite** : Base de données relationnelle légère

### Tests

- **Jest** : Framework de test JavaScript
- **Supertest** : Bibliothèque pour tester les API HTTP

### DevOps

- **Docker** : Plateforme de conteneurisation
- **Docker Compose** : Outil de définition et d'exécution d'applications multi-conteneurs
- **GitHub Actions** : Plateforme d'automatisation des workflows

## Fonctionnalités de l'application

L'application permet de :

- Créer des notes avec titre et contenu
- Consulter la liste de toutes les notes
- Récupérer une note spécifique
- Modifier une note existante
- Supprimer une note

## Ce que j'ai appris

### Sur le TDD

L'approche TDD m'a obligé à réfléchir aux comportements attendus avant même d'écrire le code. J'ai constaté que cela clarifie la conception et aide à produire un code plus robuste et maintenable.

### Sur Docker

La conteneurisation de l'application m'a fait découvrir comment créer des environnements cohérents et reproductibles. J'ai notamment appris à gérer les modules natifs (comme sqlite3) dans un contexte conteneurisé, ce qui représente un défi technique intéressant.

### Sur CI/CD

La mise en place du pipeline CI/CD avec GitHub Actions m'a montré comment automatiser les tests et le déploiement, rendant le processus de développement plus efficace et moins sujet aux erreurs humaines.

## Structure du projet

```plaintext
notes-app/
├── src/                  # Code source
│   ├── config/           # Configuration
│   ├── controllers/      # Logique métier
│   ├── models/           # Modèles de données
│   ├── routes/           # Routes API
│   ├── tests/            # Tests
│   ├── app.js            # Configuration Express
│   └── index.js          # Point d'entrée
├── .github/workflows/     # Configuration CI/CD
├── docker-compose.yml     # Configuration Docker Compose
├── Dockerfile             # Instructions Docker
└── test-deployment.sh     # Script de test du déploiement
```

## Mon parcours DevOps

Ce projet représente une étape dans mon apprentissage du DevOps. J'ai commencé par les bases du développement backend avec Node.js, puis j'ai progressivement intégré des pratiques DevOps :

1. **Étape 1** : Mise en place d'une API REST avec Express et SQLite
2. **Étape 2** : Adoption du TDD pour guider le développement
3. **Étape 3** : Conteneurisation de l'application avec Docker
4. **Étape 4** : Configuration d'un pipeline CI/CD avec GitHub Actions

## Défis rencontrés et solutions

L'un des principaux défis a été de faire fonctionner SQLite dans l'environnement Docker. Les modules natifs Node.js comme sqlite3 nécessitent d'être compilés spécifiquement pour l'architecture du conteneur. J'ai résolu ce problème en incluant les outils de compilation nécessaires dans le Dockerfile.

## Prochaines étapes

Pour continuer mon apprentissage DevOps, je prévois d'enrichir ce projet avec :

- Un frontend React ou Vue.js pour compléter l'application
- L'ajout de Prometheus et Grafana pour le monitoring
- La mise en place d'une base de données distincte via Docker Compose

## Conclusion

Ce projet m'a permis d'explorer concrètement l'intersection entre le développement et les opérations, renforçant ma conviction que les pratiques DevOps sont essentielles pour créer des applications modernes, robustes et évolutives.
