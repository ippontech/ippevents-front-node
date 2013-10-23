'use strict';

angular.module('ippeventsApp')
  .controller('PerformanceCtrl', function ($scope, $routeParams, Performance) {
    // var id = $routeParams.id;
    // var performance = Performance.query();
    // $scope.performance = performance;
    // console.log("performance = " + JSON.stringify (performance));

    $scope.performance = {
  "id" : "2",
  "title" : "Let's sketch !",
  "format" : "Atelier",
  "timebox" : "2h",
  "status" : "approved",        
  "speakers" :
    [
      {
        "id" : "1",
        "firstname" : "Alvin",
        "lastname" : "Berthelot",
        "email" : "aberthelot@ippon.fr"
      },
      {
        "id" : "2",
        "firstname" : "Matt",
        "lastname" : "Groening"
      }
    ]
};
});
