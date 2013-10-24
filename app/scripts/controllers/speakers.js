'use strict';

app.controller('SpeakersCtrl', function ($scope, $location, $filter, Speakers) {

  // Récupérations des orateurs
  Speakers.fetch().success(function(resp) {
      console.log(resp);
      $scope.speakers = resp;
  });

});

app.controller('PerformancesSpeakerCtrl', function ($scope, $location, $routeParams, Speakers) {

  $scope.lastname = $routeParams.nom;
  $scope.firstname = $routeParams.prenom;

  // Récupérations des orateurs
  Speakers.findPerformances($scope.firstname, $scope.lastname).success(function(resp) {
      console.log(resp);
      $scope.performances = resp;
  });

});
