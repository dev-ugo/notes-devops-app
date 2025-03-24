FROM node:16-alpine

WORKDIR /app

# Installer les dépendances nécessaires pour compiler sqlite3
RUN apk add --no-cache --virtual .build-deps \
    python3 \
    make \
    g++

# Copier les fichiers de package
COPY package*.json ./

# Installer les dépendances en forçant la recompilation des modules natifs
RUN npm install --production

# Supprimer les dépendances de build pour alléger l'image
RUN apk del .build-deps

COPY . .

EXPOSE 3000

CMD ["npm", "start"] 