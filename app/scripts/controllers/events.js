'use strict';

app.controller('EventsCtrl', function ($scope, $location, $filter, Events) {

  // Récupérations des événements
  Events.fetch().success(function(resp){
    // console.log("$scope.search=" + $scope.search);
    // if ($scope.search)
    //   $scope.events = $filter('filter')(resp, $scope.search);
    // else 
      $scope.events = resp;
  });

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

  // redirection vers le détail
  $scope.gotoEvent = function(index){
    $location.path("/event/" + $scope.events[index]._id);
  };

  // redirection vers la page d'édition
  $scope.gotoUpdateEvent = function(index){
    $location.path("/edit-event/" + $scope.events[index]._id);
  };

  // fonction de suppression d'un événement
  $scope.deleteEvent = function(index){
    Events.delete($scope.events[index]._id)
    .success(function(){
      // on enlève l'événement du scope
      $scope.events.splice(index, 1);
    })
    .error(function(resp, statusCode){
      console.log(resp);
      // affichage d'un message d'erreur
    });
  };

});
