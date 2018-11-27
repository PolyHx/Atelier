# Déployer une application Web sur GCP (App Engine)

## Avant de commencer
Vous devez installer le CLI (command line interface) de Google Cloud Platform. [Instruction ici](INSTALL.md)

## Initialisation
```
gcloud app create

Please enter your numeric choice: 4
```

## Création d'un serveur de production
Créer un dossier server

Copier le fichier [server.js](https://gist.github.com/PolyHx/9b9eee295d2342e56214434f2a16f857) dans server/server.js

Afin de faire fonctionner votre serveur de production, vous devez avoir la librarie ExpressJs d'installer dans votre projet
``` bash
npm i --save express
```

## Modification des scripts npm

Dans le fichier package.json, ajouter les scripts suivant:
``` json
{
    "scripts": {
        "deploy": "gcloud app deploy",
        "dev": "ng serve"
    }
}
```

Dans le fichier package.json, remplacer le script start par le suivant:
``` json
{
    "scripts": {
        "start": "node server/server.js"
    }
}
```

## Ajout de fichiers de configaration pour App Engine
Créer un fichier app.yaml et y mettre la configuration suivante:
``` yaml
runtime: nodejs10

env_variables:
  PORT: 8080
```

App Engine utilise le port 8080 par défaut.

## Déployer une première version de l'application
```
npm run deploy

Do you want to continue: y
```

Le fichier .gcloudignore sera généré. Ajoutez la ligne suivante dans le fichier:
```
!dist
```

## Contruire l'application Angular
```
npm run build
```

Cette étape est très importante, car elle permet de contruire notre application en mode production. Cette opération optimise le code et le rend lisible par un navigateur web.

## Déployer la version finale de l'application
```
npm run deploy

Do you want to continue: y
```