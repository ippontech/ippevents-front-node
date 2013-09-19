'use strict';

app.controller('MembersCtrl', function ($scope, $location, Members) {

  // récupérations des membres
  Members.fetch().success(function(resp){
    $scope.members = resp;
  });

  // redirection vers la page d'édition
  $scope.gotoUpdateMember = function(index){
    $location.path("/edit-member/" + $scope.members[index]._id);
  };

  // fonction de suppression d'un événement
  $scope.deleteMember = function(index){
    Members.delete($scope.members[index]._id)
    .success(function(){
      // on enlève l'événement du scope
      $scope.members.splice(index, 1);
    })
    .error(function(resp, statusCode){
      console.log(resp);
      // affichage d'un message d'erreur
    });
  };

});