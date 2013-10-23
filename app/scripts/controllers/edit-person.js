'use strict';

app.controller('EditPersonCtrl', function ($scope, $location, $routeParams, Persons) {

  var id = $routeParams.id;

  if (undefined != id) {
    Persons.fetchOne(id)
    .success(function(resp){
      $scope.person = resp;
    })
    .error(function(resp){
      console.log(resp);
    });
  }

  // fonction de modification
  $scope.updatePerson = function(person){
    Persons.update(person)
    .success(function(){
      $location.path( "/edit-person/" + person._id );
    })
    .error(function(resp){
      console.log(resp);
      // affichage d'un message d'erreur
    });
  };

  // fonction de création
  $scope.createPerson = function(person){
    Persons.create(person)
    .success(function(){
      $location.path( "/edit-person/" );
    })
    .error(function(resp, statusCode){
      console.log(resp);
      // affichage d'un message d'erreur
    });
  };

});
