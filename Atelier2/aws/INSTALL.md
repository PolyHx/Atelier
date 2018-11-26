# Installation de l'interface de ligne de commande d'Elastic Beanstalk

## Installation de Python
Afin d'instaler le cli d'Elastic Beanstalk, il faut d'abord avoir Python d'installer.

### Windows, Mac ou Linux
Vous pouvez télécharger la dernière version de Python [ici](https://www.python.org/downloads/).

### Linux (Ubuntu)
Vous pouvez install python via Apt
```
sudo apt-get install python
```

## Installation de pip

### Windows, Mac ou Linux
Télécharger le fichier d'installation [ici](https://bootstrap.pypa.io/3.2/get-pip.py).

Vous devez ensuite executer ce fichier.
```
python3 get-pip.py
```

### Linux (Ubuntu)
Vous pouvez install pip via Apt
```
sudo apt-get install python-pip
```

## Installatiom de l'interface de ligne de commande d'Elastic Beanstalk

Assurez-vous d'avoir setup-tools d'installer
```
pip install setuptools
```

Installer le cli (plus d'informations [ici](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb-cli3-install.html#eb-cli3-install.cli-only))
```
pip install awsebcli --upgrade --user
```

Vous aurez probablement besoins d'ajouter le cli dans votre PATH, plus d'information [ici](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb-cli3-install.html#eb-cli3-install.cli-only).