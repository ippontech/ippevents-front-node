
# IppEvents Front (via Node.js)

***

**IppEvents** est une application Web permettant de promouvoir des événements (conférences / ateliers / jeux sérieux / retours d'expérience).

Ce projet est la partie "front" du projet **IppEvents**, c'est lui qui permet de d'afficher uen interface pour consulter et éditer des données.

Ce projet s'appuie sur [Node.js](http://nodejs.org/) pour la partie serveur et s'appuie sur la stack [Yeoman](http://yeoman.io/) couplé à [AngularJS](http://angularjs.org).

***

## 1. Environnements requis

### 1.1. Installations requises

1. Installer [Git](http://git-scm.com/)
2. Installer [Node JS](http://nodejs.org/)
3. Installer [Ruby](http://www.ruby-lang.org/fr/)
4. Installer [Compass](http://compass-style.org/install/)
5. Installer Yeoman et le générateur AngularJS

Installer Yeoman

	npm install -g yo
	
Installer le générateur "AngularJS" pour Yeoman 

	npm install -g generator-angular

[Pour en savoir plus](http://yeoman.io/)


### 1.2 Espace de travail

Créer un espace de travail. Pour simplifier la suite, celui-ci se situera ~/workspaces

## 2. Installation du projet

### 2.1. Récupérer les sources

En ligne de commande, se positionner au bon endroit

	cd ~/workspaces
	
Récupérer les sources du repository GitHub

	git clone https://github.com/ippontech/ippevents-front-node.git

Créer un espace de travail. Pour simplifier la suite celui-ci s'appellera "coding dojo" et son chemin sera ~/codingdojo

### 2.2. Récupérer les dépendances

Se positioner dans le répertoire créé

	cd ~/workspaces/ippevents-front-node

S'assurer d'être ok au niveau des dépendances Node.js et Yeoman

	sudo npm install
	bower install
	
### 2.3. Démarrer le serveur REST

Dans une nouvelle fenêtre, se positioner dans le répertoire approprié

	cd ~/codingdojo/ippevents/server
	
Démarrer le serveur Node (Express)

	node server.js

S'assurer que le [service "Members" est opérationnel](http://localhost:3000/members)

### 2.4. Démarrer l'application

Dans une nouvelle fenêtre, se positioner dans le répertoire approprié

	cd ~/workspaces/ippevents-front-node
	
Démarrer l'application

	grunt server

Normalement un navigateur s'ouvre de lui même, s'assurer de la [connexion de l'application au service "Members"](http://localhost:9000/#/members)
