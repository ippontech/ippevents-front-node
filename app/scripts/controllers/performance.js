'use strict';

angular.module('ippeventsApp')
  .controller('PerformanceCtrl', function ($scope, $routeParams, $log, Events) {
    var idEvent = $routeParams.idEvent;
    $log.log("idEvent " + idEvent);
    var idPerf = $routeParams.idPerf;
    $log.log("idPerf " + idPerf);

    if (undefined != idEvent) {
    Events.fetchOne(idEvent)
    .success(function(resp){
    	$log.log(resp);
      var event = resp;
      event.performances.forEach(function(perf, i) {
      	if (perf._id == idPerf) {
      		$log.log("FOUND");
      		$scope.performance = perf;
      	}
      });
    })
    .error(function(resp){
      console.log(resp);
    });
  }
});
