'use strict';

app.controller('AddPerformanceCtrl', function ($scope, $location, $routeParams, Events, $log) {

  var id = $routeParams.event_id;

  $scope.performance = {};
  $scope.newspeaker = {};

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
  $scope.createPerformance = function() {
    
    $scope.event.performances.push($scope.performance);
    
    Events.update($scope.event)
    .success(function(){
      $location.path( "/event/" + $scope.event._id);
    })
    .error(function(resp){
      console.log(resp);
      // affichage d'un message d'erreur
    });


  };

  $scope.addSpeaker = function() {
    $log.log('addSpeaker');
    if (!$scope.performance.speakers) {
      $scope.performance.speakers = [];
    }
    $scope.performance.speakers.push($scope.newspeaker);
    $scope.newspeaker = {};
    return false;
  };

});
