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

  // redirection vers la page d'édition
  $scope.gotoUpdatePerformance = function(index){
    $location.path("/event/" + eventId + '/edit-performance/' + id);
  };

    $scope.gotoInscriptionPerfomance = function(index){
    $location.path("/event/" + eventId + '/performance/' + id + '/inscription');
  };
});
