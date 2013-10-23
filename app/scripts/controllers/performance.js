'use strict';

app.controller('PerformanceCtrl', function ($scope, $location, $routeParams, Events) {

  var eventId = $routeParams.event_id;
  var id = $routeParams.id;

  if (undefined != eventId && undefined != id) {
    Events.fetchPerformance(eventId, id).success(function(resp) {
      $scope.performance = resp;
    })
    .error(function(resp){
      console.log(resp);
    });
  }

});
