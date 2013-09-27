'use strict';

app.controller('EventCtrl', function ($scope, $location, $routeParams, Events) {

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

  // redirection vers le détail
  $scope.gotoPerformance = function(index){
    $location.path("/performance/" + $scope.events.performances[index]._id);
  };

  // redirection vers le détail
  $scope.gradePerformance = function(index){
    $location.path("/performance/" + $scope.events.performances[index]._id);
  };

});