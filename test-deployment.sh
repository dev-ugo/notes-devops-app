#!/bin/bash
# test-deployment.sh

echo "Connexion à Docker Hub..."
docker login -u devugopr

echo "Récupération de la dernière image..."
docker pull devugopr/notes-app:latest

echo "Démarrage du conteneur de test..."
docker run -d -p 3000:3000 --name notes-app-test devugopr/notes-app:latest

echo "Attente du démarrage de l'application (5 secondes)..."
sleep 5

echo "Test de l'API..."
RESPONSE=$(curl -s http://localhost:3000/api/notes)
if [[ $RESPONSE == *"[]"* || $RESPONSE == *"id"* ]]; then
  echo "✅ L'API répond correctement!"
else
  echo "❌ Erreur: L'API ne répond pas comme attendu"
  echo "Réponse reçue: $RESPONSE"
fi

echo "Nettoyage..."
docker stop notes-app-test
docker rm notes-app-test

echo "Test terminé!"