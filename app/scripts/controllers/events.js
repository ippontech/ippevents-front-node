'use strict';

app.controller('EventsCtrl', function ($scope, $location, $filter, Events) {

  $scope.$watch('search.dateBegin', function(newVal, oldVal) {
    if ($scope.search != null
       && ($scope.search.dateEnd == null || $scope.search.dateEnd < $scope.search.dateBegin)) {
      $scope.search.dateEnd = newVal;
    }
  })
  $scope.$watch('search.dateEnd', function(newVal, oldVal) {
    if ($scope.search != null
       && ($scope.search.dateBegin == null || $scope.search.dateEnd < $scope.search.dateBegin)) {
      $scope.search.dateBegin = newVal;
    }
  })

  // Récupérations des événements
  Events.fetch().success(function(resp){
    // console.log("$scope.search=" + $scope.search);
    // if ($scope.search)
    //   $scope.events = $filter('filter')(resp, $scope.search);
    // else 
      $scope.events = resp;
  });

  $scope.filterEventFunc = function(eventElt) {

    if (!$scope.search) {
      return true;
    }

    /* TODO
      If $ is the only field, search on every field with this field.
    */

    if ($scope.search.summary 
      && eventElt.summary.indexOf($scope.search.summary) == -1) {
      return false;
    }
    if ($scope.search.teasing 
      && eventElt.teasing.indexOf($scope.search.teasing) == -1) {
      return false;
    }
    if ($scope.search.$
      && eventElt.title.indexOf($scope.search.$) == -1) {
      return false;
    }

    // TODO bugged
    if ($scope.search.dateEnd
      && $scope.search.dateBegin
      && eventElt.dateBegin > new Date($scope.search.dateEnd)
      && eventElt.dateEnd < new Date($scope.search.dateBegin)) {
      return false;
    }


    return true;
  };
  // fonction de création d'un événement
  $scope.createEvent = function(event){

    Events.create(event)
    .success(function(){

      // on récupère la liste complète en base
      Events.fetch().success(function(resp){
        $scope.events = resp;
      });
      // --> Récupérer uniquement l'instance créée et l'insérer dans le scope ?

      // copie du membre et ajout de la copie dans le scope
      // var newMember = {};
      // angular.copy(member, newMember);
      // $scope.team.push(member);

      // on vide la saisie effectuée dans le formulaire
      $scope.event = {};
    })
    .error(function(resp, statusCode){
      console.log(resp);
      // affichage d'un message d'erreur
    });
};

  // redirection vers le détail
  $scope.gotoEvent = function(index){
    $location.path("/event/" + $scope.events[index]._id);
  };

  // redirection vers la page d'édition
  $scope.gotoUpdateEvent = function(index){
    $location.path("/edit-event/" + $scope.events[index]._id);
  };

  // fonction de suppression d'un événement
  $scope.deleteEvent = function(index){
    Events.delete($scope.events[index]._id)
    .success(function(){
      // on enlève l'événement du scope
      $scope.events.splice(index, 1);
    })
    .error(function(resp, statusCode){
      console.log(resp);
      // affichage d'un message d'erreur
    });
  };

});
