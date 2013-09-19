'use strict';

app.controller('HeaderCtrl', function ($scope) {
  
  $scope.website = {
			"common" : {
				"title" : "Bienvenue sur les ippevents",
				"logo" : "http://upload.wikimedia.org/wikipedia/fr/3/38/Logo_Ippon_Technologies.png",
				"verbatim" : "coding dojo",
				"description" : "Les IppEvents sont des événements gratuits pour découvrir les nouvelles tendances de développement chez Ippon Technologies ! Il s'agit de présentations (conférences, retours d’expérience, ateliers) d’environ une heure suivies d’un buffet ouvert à tous (interne, clients, consultants d’autres entreprises ou étudiants) et nous ont déjà permis de découvrir Git, Scrum, GWT, OSGI et autres Elastic Path.",
				"partners" : [
				              { "name":"ippon", "logo": "https://lh4.googleusercontent.com/-0EOnu_MOtMI/AAAAAAAAAAI/AAAAAAAAAAA/4Zft03miMEE/s48-c-k/photo.jpg"},
				              { "name":"devoxx", "logo": "http://blog.soat.fr/wp-content/uploads/2011/11/devoxx1.jpg"},
				              { "name":"google", "logo": "http://www.actupc.info/wp-content/uploads/icon_googlesearch.jpg"},
				              { "name":"castorama", "logo": "http://www.shopping-player.com/upload/logo%20casto.jpg"}
				             ]

			}
		};

});
