'use strict';

app.controller('PerformanceCtrl', function ($scope, $location, $routeParams, Events) {

  var eventId = $routeParams.event_id;
  var id = $routeParams.id;

  if (undefined != id) {
    Events.fetchOne(eventId).success(function(resp) {
      angular.forEach(resp.performances, function(performance) {
        console.log("Coucou");
        if (performance._id == id) {
          $scope.performance = performance;
        }
      });
    })
    .error(function(resp){
      console.log(resp);
    });
  }

});