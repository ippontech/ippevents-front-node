'use strict';

app.controller('EditPerformanceCtrl', function ($scope, $location, $routeParams, Events) {

  var eventId = $routeParams.event_id;
  var performance_id = $routeParams.performance_id;

  if (undefined !== eventId && undefined !== performance_id) {
    Events.fetchOne(eventId)
    .success(function(resp){
      $scope.event = resp;
      $scope.performance = resp.performances.reduce(function(prev, current){
        return (current._id === performance_id)? current: prev;
      });
      $scope.person = {};
    })
    .error(function(resp){
      console.log(resp);
    });
  }


  // fonction de modification
  $scope.updatePerformance = function(performance){

    Events.update($scope.event)
    .success(function(){
      $location.path( "/event/" + $scope.event._id);
    })
    .error(function(resp){
      console.log(resp);
      // affichage d'un message d'erreur
      });
  };

 $scope.addPerson = function() {
    if (!$scope.performance.persons){
      $scope.performance.persons = [];
    }
    $scope.performance.persons.push($scope.person);
    
    Events.update($scope.event)
    .success(function(){
      $location.path("/event/" + eventId + '/performance/' + performance_id);
      })
      .error(function(resp){
    console.log(resp);
    // affichage d'un message d'erreur
    });
  };

  $scope.addSpeaker = function() {
    if (!$scope.performance.speakers) {
      $scope.performance.speakers = [];
    }
    $scope.performance.speakers.push($scope.newspeaker);
    $scope.newspeaker = {};
    return false;
  };
});
