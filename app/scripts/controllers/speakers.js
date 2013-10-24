'use strict';

app.controller('SpeakersCtrl', function ($scope, $location, $filter, Speakers) {

  // Récupérations des orateurs
  Speakers.fetch().success(function(resp) {
      console.log(resp);
      $scope.speakers = resp;
  });

});
