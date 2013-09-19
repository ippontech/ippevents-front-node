'use strict';

app.controller('EditMemberCtrl', function ($scope, $location, $routeParams, Members) {

  var id = $routeParams.id;

  if (undefined != id) {
    Members.fetchOne(id)
    .success(function(resp){
      $scope.member = resp;
    })
    .error(function(resp){
      console.log(resp);
    });
  }

  // fonction de modification
  $scope.updateMember = function(member){
    Members.update(member)
    .success(function(){
      $location.path( "/members" );
    })
    .error(function(resp){
      console.log(resp);
      // affichage d'un message d'erreur
    });
  };

  // fonction de création
  $scope.createMember = function(member){
    Members.create(member)
    .success(function(){
      $location.path( "/members" );
    })
    .error(function(resp, statusCode){
      console.log(resp);
      // affichage d'un message d'erreur
    });
  };

});
