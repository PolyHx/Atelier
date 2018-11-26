# Déployer une application Web sur AWS (Elastic Beanstalk)

## Avant de commencer
Vous devez installer le CLI (command line interface) de Elastic Beanstalk.

## Initialisation
```
eb init

Select a default region: 1
(aws-access-id): Votre access-id de votre compte AWS
(aws-access-key): Votre access-key de votre compte AWS
Enter Application Name: Nom de votre application
It appears you are using Node.js. Is this correct?: y
Do you want to set up SSH for your instances?: n
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
        "deploy": "eb deploy",
        "server": "node server/server.js"
    }
}
```

## Ajout de fichiers de configaration pour Elastic Beanstalk
Créer un dossier .ebextensions

Dans le dossier .ebextensions, ajouter un fichier nodecommand.config et y mettre la configuration suivante:
```
option_settings:
  aws:elasticbeanstalk:container:nodejs:
    NodeCommand: "npm run server"
```

Cette configuration indique à Elastic Beanstalk d'executer la commande `npm run server` avec de partir notre serveur de production 

À côté du dossier .ebextensions, ajouter un fichier .ebignore et y mettre la ligne suivante
```
!dist
```

Ce fichier indiquera à Elastic Beanstalk qu'il doit téléversé le dossier dist sur le serveur.

## Commit les ajouts sur Git
``` bash
git add .
git commit -m "Configurations d'Elastic Beanstalk"
```

Elastic Beanstalk envoie le code du dernier commit de git sur le serveur. Il est donc important de toujour commit le nouveau code que nous voulons déployer!

## Contruire l'application Angular
```
npm run build
```

Cette étape est très importante, car elle permet de contruire notre application en mode production. Cette opération optimise le code et le rend lisible par un navigateur web.

## Création d'une configuration Elastic Beanstalk
``` bash
eb create Nom de la config
```

Ex:
``` bash
eb create Atelier2-Env
```

Cette commande déploiera notre application angular sur Elastic Beanstalk