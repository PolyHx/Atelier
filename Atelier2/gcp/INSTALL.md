# Installation de l'interface de ligne de commande de Google Cloud Platform

## Installing gcloud

Pour plus d'information, lire la documentation [ici](https://cloud.google.com/sdk/docs/).

### Windows
Télécharger [l'installateur](https://dl.google.com/dl/cloudsdk/channels/rapid/GoogleCloudSDKInstaller.exe) et l'executer.

### Mac
Télécharger [le SDK](https://dl.google.com/dl/cloudsdk/channels/rapid/downloads/google-cloud-sdk-226.0.0-darwin-x86_64.tar.gz) et le décompresser.

Installation de gcloud globalement
```
./google-cloud-sdk/install.sh
```

### Linux (Ubuntun)
``` bash
export CLOUD_SDK_REPO="cloud-sdk-$(lsb_release -c -s)"

echo "deb http://packages.cloud.google.com/apt $CLOUD_SDK_REPO main" | sudo tee -a /etc/apt/sources.list.d/google-cloud-sdk.list

curl https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key add -

sudo apt-get update && sudo apt-get install google-cloud-sdk
```

## Initialisation

```
gcloud init
```

Connectez vous à votre compte Google Cloud et créez un projet