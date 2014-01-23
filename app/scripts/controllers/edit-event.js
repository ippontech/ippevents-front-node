'use strict';

app.controller('EditEventCtrl', function ($scope, $location, $routeParams, Events) {

  var id = $routeParams.id;

  if (undefined != id) {
    Events.fetchOne(id)
    .success(function(resp){
      $scope.event = resp;
      $scope.event.dateBegin = new Date($scope.event.dateBegin);
      $scope.event.dateEnd = new Date($scope.event.dateEnd);
    })
    .error(function(resp){
      console.log(resp);
    });
  }

  // fonction de modification
  $scope.updateEvent = function(event){
    $scope.event.dateBegin = new Date($scope.event.dateBegin);
    $scope.event.dateEnd = new Date($scope.event.dateEnd);
    
        if($scope.event.dateEnd < $scope.event.dateBegin) {
            $scope.event.dateEnd = '';
        };
  console.log("Un petit log");
    Events.update(event)
    .success(function(){
      $location.path( "/events" );
    })
    .error(function(resp){
      console.log(resp);
      // affichage d'un message d'erreur
    });
  };

  // fonction de création
  $scope.createEvent = function(event){
    Events.create(event)
    .success(function(){
      $location.path( "/events" );
    })
    .error(function(resp, statusCode){
      console.log(resp);
      // affichage d'un message d'erreur
    });
  };

});
