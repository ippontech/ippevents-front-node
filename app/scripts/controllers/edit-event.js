'use strict';

app.controller('EditEventCtrl', function ($scope, $location, $routeParams, Events) {

  var id = $routeParams.id;

  if (undefined != id) {
    Events.fetchOne(id)
    .success(function(resp){
      $scope.event = resp;
    })
    .error(function(resp){
      console.log(resp);
    });
  }

  // fonction de modification
  $scope.updateEvent = function(event){
    Events.update(event)
    .success(function(){
      $location.path( "/events" );
    })
    .error(function(resp){
      console.log(resp);
      // affichage d'un message d'erreur
    });
  };

  // fonction de création
  $scope.createEvent = function(event){
    Events.create(event)
    .success(function(){
      $location.path( "/events" );
    })
    .error(function(resp, statusCode){
      console.log(resp);
      // affichage d'un message d'erreur
    });
  };

});
