'use strict';

app.controller('MainCtrl', function ($scope, Events) {

	// Récupérations des évènements
	// Events.query(function(data){
	// 	$scope.events = data;
	// });

  $scope.Math = window.Math;

  // Récupérations des événements
  Events.fetch().success(function(resp){
    $scope.events = resp;
  });

  // redirection vers le détail
  $scope.gotoEvent = function(index){
    $location.path("/event/" + $scope.events[index]._id);
  };

  // fonction de création d'un événement
  $scope.createEvent = function(event){

    Events.create(event)
    .success(function(){

      // on récupère la liste complète en base
      Events.fetch().success(function(resp){
        $scope.events = resp;
      });
      // --> Récupérer uniquement l'instance créée et l'insérer dans le scope ?

      // copie du membre et ajout de la copie dans le scope
      // var newMember = {};
      // angular.copy(member, newMember);
      // $scope.team.push(member);

      // on vide la saisie effectuée dans le formulaire
      $scope.event = {};
    })
    .error(function(resp, statusCode){
      console.log(resp);
      // affichage d'un message d'erreur
    });
  };
  
  $scope.website = {
			"common" : {
				"title" : "ippevents",
				"logo" : "http://upload.wikimedia.org/wikipedia/fr/3/38/Logo_Ippon_Technologies.png",
				"verbatim" : "coding dojo",
				"description" : "Les IppEvents sont des événements gratuits pour découvrir les nouvelles tendances de développement chez Ippon Technologies ! Il s'agit de présentations (conférences, retours d’expérience, ateliers) d’environ une heure suivies d’un buffet ouvert à tous (interne, clients, consultants d’autres entreprises ou étudiants) et nous ont déjà permis de découvrir Git, Scrum, GWT, OSGI et autres Elastic Path.",
				"partners" : [
				              { "name":"ippon", "logo": "https://lh4.googleusercontent.com/-0EOnu_MOtMI/AAAAAAAAAAI/AAAAAAAAAAA/4Zft03miMEE/s48-c-k/photo.jpg"},
				              { "name":"devoxx", "logo": "http://blog.soat.fr/wp-content/uploads/2011/11/devoxx1.jpg"},
				              { "name":"google", "logo": "http://www.actupc.info/wp-content/uploads/icon_googlesearch.jpg"},
				              { "name":"castorama", "logo": "http://www.shopping-player.com/upload/logo%20casto.jpg"}
				             ],
				"footer" : [ {
					"name" : "home",
					"link" : "/"
				}, {
					"name" : "speakers",
					"link" : "/speakers"
				}, {
					"name" : "events",
					"link" : "/events"
				}, {
					"name" : "infos",
					"link" : "/infos"
				}, {
					"name" : "teams",
					"link" : "/teams"
				} ],

				"menus" : [ {
					"name" : "home",
					"link" : "/"
				}, {
					"name" : "speakers",
					"link" : "/speakers"
				}, {
					"name" : "events",
					"link" : "/events"
				}, {
					"name" : "infos",
					"link" : "/infos"
				}, {
					"name" : "teams",
					"link" : "/teams"
				} ]

			},
			"main_panel" : {
				"events" : [
						{
							"title" : "Let's sketch together",
							"dateBegin" : "1378332000000",
							"dateEnd" : "1378332000000",
							"address" : {
								"street" : "b",
								"postal" : "d",
								"city" : "f",
								"region" : "d",
								"country" : "f",
								"geolocalisation" : "d"
							},
							"teasing" : "Let's sketch together, ou comment le combo papier/crayon se trouve être le meilleur moyen pour commencer une communication orale !",
							"summary" : "Si la collaboration quotidienne semble être du bon sens dans une équipe agile, on s'aperçoit que ce principe est trop souvent laissé de côté dès qu’il s’agit de questions portant sur l’interface, le design d’information ou la structuration de l’écran. Cet atelier propose de palier ce manque en facilitant la collaboration des différentes parties prenantes d'un projet autour d'une simple feuille de papier.",
							"description" : "On entend bien souvent parler de collaboration ou de coopération au sein d'organisations ou d'équipes agiles. C'est d'ailleurs l'un des principes du manifeste agile : \"Les utilisateurs ou leurs représentants et les développeurs doivent travailler ensemble quotidiennement tout au long du projet\". Si ce principe semble du bon sens, on s'aperçoit qu'il est trop souvent laissé de côté dès qu’il s’agit de questions portant sur l’interface, le design d’information ou la structuration de l’écran. Cet atelier propose de palier ce manque en facilitant la collaboration des différentes parties prenantes d'un projet autour d'une simple feuille de papier. Si de cet exercice en découle nécessairement un livrable : une maquette ; il possède également de nombreuses vertus cachées qui vont bien au delà de l'aspect visuel.",
							"maxPeople" : 18,
							"picture" : "http://ebmedia.eventbrite.com/s3-build/images/2100757/36314544770/1/logo.png"
						},
						{
							"title" : "Evenement 2",
							"dateBegin" : "1378332000000",
							"dateEnd" : "1378332000000",
							"address" : {
								"street" : "b",
								"postal" : "d",
								"city" : "f",
								"region" : "d",
								"country" : "f",
								"geolocalisation" : "d"
							},
							"teasing" : "",
							"summary" : "",
							"description" : "Hello World",
							"maxPeople" : 50,
							"picture" : "http://ebmedia.eventbrite.com/s3-build/images/2100757/36314544770/1/logo.png"
						},
						{
							"title" : "Evenement 3",
							"dateBegin" : "1378332000000",
							"dateEnd" : "1378332000000",
							"address" : {
								"street" : "b",
								"postal" : "d",
								"city" : "f",
								"region" : "d",
								"country" : "f",
								"geolocalisation" : "d"
							},
							"teasing" : "",
							"summary" : "",
							"description" : "Hello World",
							"maxPeople" : 50,
							"picture" : "http://ebmedia.eventbrite.com/s3-build/images/2100757/36314544770/1/logo.png"
						},
						{
							"title" : "Evenement 4",
							"dateBegin" : "1378332000000",
							"dateEnd" : "1378332000000",
							"address" : {
								"street" : "b",
								"postal" : "d",
								"city" : "f",
								"region" : "d",
								"country" : "f",
								"geolocalisation" : "d"
							},
							"teasing" : "",
							"summary" : "",
							"description" : "Hello World",
							"maxPeople" : 200,
							"picture" : "http://ebmedia.eventbrite.com/s3-build/images/2100757/36314544770/1/logo.png"
						},
						{
							"title" : "Evenement 5",
							"dateBegin" : "1378332000000",
							"dateEnd" : "1378332000000",
							"address" : {
								"street" : "b",
								"postal" : "d",
								"city" : "f",
								"region" : "d",
								"country" : "f",
								"geolocalisation" : "d"
							},
							"teasing" : "",
							"summary" : "",
							"description" : "Hello World",
							"maxPeople" : 24,
							"picture" : "http://ebmedia.eventbrite.com/s3-build/images/2100757/36314544770/1/logo.png"
						},
						{
							"title" : "Evenement 6",
							"dateBegin" : "1378332000000",
							"dateEnd" : "1378332000000",
							"address" : {
								"street" : "b",
								"postal" : "d",
								"city" : "f",
								"region" : "d",
								"country" : "f",
								"geolocalisation" : "d"
							},
							"teasing" : "",
							"summary" : "",
							"description" : "Hello World",
							"maxPeople" : 18,
							"picture" : "http://ebmedia.eventbrite.com/s3-build/images/2100757/36314544770/1/logo.png"
						} ]
			},
			"customs" : {
				"css" : [ {
					"link" : "custom.css"
				}, {
					"link" : "custom2.css"
				} ],
				"scripts" : [ {
					"link" : "/scripts/custom/js/custom.js"
				}, {
					"link" : "/scripts/custom/js/custom2.js"
				} ]
			}

		};

});
