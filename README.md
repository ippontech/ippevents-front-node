
# IppEvents



***

## 1. Environnements de développement

Vous avez le choix entre installer l'environnment sur votre poste ou utiliser une machine virtuelle de type Linux

### 1.1 Environnement de développement "perso"

#### 1.1.1 Pré requis

1. Installer [Git](http://git-scm.com/)
2. Installer [Node JS](http://nodejs.org/)
3. Installer [Ruby](http://www.ruby-lang.org/fr/)
4. Installer [Compass](http://compass-style.org/install/)
5. Installer [MongoDB](http://www.mongodb.org/)

#### 1.1.2. Yeoman

Pour en savoir plus sur [Yeoman](http://yeoman.io/)

Installer Yeoman

	npm install -g yo
	
Installer le générateur "Angular JS" pour Yeoman 

	npm install -g generator-angular 

#### 1.1.3. Espace de travail

Créer un espace de travail. Pour simplifier la suite celui-ci s'appellera "coding dojo" et son chemin sera ~/codingdojo


### 1.2 Environnement de développement sur la machine virtuelle "XUbuntu made in Ippon"

Récupérer la machine virtuelle : 

`/!\ pas encore mise à disposition`

Concernant la machine virtuelle :

`xubunutu / reverse`

***

## 2. Installation du projet

#### 1. Récupérer les sources

En ligne de commande, se positionner au bon endroit

	cd ~/codingdojo
	
Récupérer les sources du repository GitHub

	git clone https://github.com/ippontech/ippevents.git

Il faudra saisir vos identifiants GitHub Ippon qui ont les accès à ce repository privé.

#### 2. Récupérer les dépendances

Se positioner dans le répertoire créé

	cd ~/codingdojo/ippevents

S'assurer d'être ok au niveau des dépendances

	sudo npm install
	bower install
	
#### 3. Démarrer Mongo DB

Démarrer la base

*Linux*
	
	sudo service mongodb start
	
*Mac*
	
	mongod
	
	
Lancer le client Mongo DB

	mongo
	
Faire les vérifications de circonstances

	show dbs;
	
Doit retourner iedb (la base du projet, pour IppEventsDataBase)

Se connecter à la base "iedb"

	use iedb;
	
Vérifier la présence de la collection "members"

	show collections;

Doit retourner une liste avec "members" dedans	
	
Vérifier les données de la collection

	db.members.find();
	
Doit retourner des données "Alvin, etc." et "Christophe, etc."
(Si les données ne sont pas présentes, vous pouvez passer à l'étape 4 ci-dessous qui initialise une base vide. Si rien n'est présent en réfectuant le test c'est qu'il y a un problème)
	
#### 4. Démarrer le serveur REST

Dans une nouvelle fenêtre, se positioner dans le répertoire approprié

	cd ~/codingdojo/ippevents/server
	
Démarrer le serveur Node (Express)

	node server.js

S'assurer que le [service "Members" est opérationnel](http://localhost:3000/members)

#### 5. Démarrer l'application

Dans une nouvelle fenêtre, se positioner dans le répertoire approprié

	cd ~/codingdojo/ippevents
	
Démarrer l'application

	grunt server

Normalement un navigateur s'ouvre de lui même, s'assurer de la [connexion de l'application au service "Members"](http://localhost:9000/#/team)
