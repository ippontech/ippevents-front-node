'use strict';

app.controller('AddPerformanceCtrl', function ($scope, $location, $routeParams, Events) {

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

  // // fonction de modification
  // $scope.updateEvent = function(event){
  //   Events.update(event)
  //   .success(function(){
  //     $location.path( "/events" );
  //   })
  //   .error(function(resp){
  //     console.log(resp);
  //     // affichage d'un message d'erreur
  //   });
  // };

  // fonction de création
  $scope.createPerformance = function(performance) {
    
    $scope.event.performances.push(performance);
    
    Events.update($scope.event)
    .success(function(){
      $location.path( "/event/" + $scope.event._id);
    })
    .error(function(resp){
      console.log(resp);
      // affichage d'un message d'erreur
    });


  };

});
