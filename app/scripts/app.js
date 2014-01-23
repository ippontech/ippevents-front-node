'use strict';

/**
 * Main app module
 */
var app = angular.module('ippeventsApp', [
  'homeServices',
  'connectionServices',
  'eventsServices',
  'performancesServices',
  'membersServices',
  'personsServices',
  'speakersServices',
  'eventUI',
  'ui.date',
  'calendar-ui',
  'ngCookies']);

/**
 * Youpi tralalalala
 */
app.config(function($httpProvider) {
  $httpProvider.defaults.withCredentials = true;
  var interceptor = ['$rootScope','$q', function(scope, $q) {
 
    function success(response) {
      return response;
    }
 
    function error(response) {
      var status = response.status;

      if (status == 403) {
        var deferred = $q.defer();
        var req = {
          config: response.config,
          deferred: deferred
        }
        scope.requests403.push(req);
        scope.$broadcast('event:loginRequired');
        return deferred.promise;
      }
      // otherwise
      return $q.reject(response);

    }

    return function(promise) {
      return promise.then(success, error);
    }

  }];
  $httpProvider.responseInterceptors.push(interceptor);
});

app.config(function ($routeProvider) {

  //var access = routingConfig.accessLevels;

  $routeProvider
  .when('/', {
    templateUrl: 'views/main.html',
    controller: 'MainCtrl'
  })
  .when('/login', {
    templateUrl: 'views/login.html',
    controller: 'LoginCtrl'
  })
  .when('/members', {
    templateUrl: 'views/members.html',
    controller: 'MembersCtrl'
  })
  .when('/edit-member', {
    templateUrl: 'views/edit-member.html',
    controller: 'EditMemberCtrl'
  })
  .when('/edit-member/:id', {
    templateUrl: 'views/edit-member.html',
    controller: 'EditMemberCtrl'
  })
  /*.when('/persons', {
    templateUrl: 'views/persons.html',
    controller: 'PersonsCtrl'
  })*/
  .when('/edit-person', {
    templateUrl: 'views/edit-person.html',
    controller: 'EditPersonCtrl'
  })
  .when('/edit-person/:id', {
    templateUrl: 'views/edit-person.html',
    controller: 'EditPersonCtrl'
  })
  .when('/events', {
    templateUrl: 'views/events.html',
    controller: 'EventsCtrl'
  })
  .when('/edit-event', {
    templateUrl: 'views/edit-event.html',
    controller: 'EditEventCtrl'
  })
  .when('/edit-event/:id', {
    templateUrl: 'views/edit-event.html',
    controller: 'EditEventCtrl'
  })
  .when('/event/:id', {
    templateUrl: 'views/event.html',
    controller: 'EventCtrl'
  })
  .when('/event/:event_id/edit-performance/:performance_id', {
    templateUrl: 'views/edit-performance.html',
    controller: 'EditPerformanceCtrl'
  })
  .when('/add-performance/:event_id', {
    templateUrl: 'views/add-performance.html',
    controller: 'AddPerformanceCtrl'
  })
  .when('/event/:event_id/performance/:id', {
    templateUrl: 'views/performance.html',
    controller: 'PerformanceCtrl'
  })
  .when('/event/:event_id/performance/:performance_id/inscription', {
    templateUrl: 'views/edit-person.html',
    controller: 'EditPerformanceCtrl'
  })
  .when('/speakers', {
    templateUrl: 'views/speakers.html',
    controller: 'SpeakersCtrl'
  })
  .when('/getPerformancesBySpeaker/:nom/:prenom', {
    templateUrl: 'views/performancesBySpeaker.html',
    controller: 'PerformancesSpeakerCtrl'
  })
  .otherwise({
    redirectTo: '/'
  });
  
});

app.run(['$rootScope', '$http', '$location', function(scope, $http, $location) {

  /**
   * Holds all the requests which failed due to 401 response.
   */
  scope.requests403 = [];
 
  /**
   * On 'event:loginConfirmed', resend all the 401 requests.
   */
  scope.$on('event:loginRequired', function() {
     $location.path("login");
   });
 
  scope.$on('event:loginConfirmed', function() {
    var i, requests = scope.requests403;
    for (i = 0; i < requests.length; i++) {
      retry(requests[i]);
    }
    scope.requests403 = [];
 
    function retry(req) {
      $http(req.config).then(function(response) {
        req.deferred.resolve(response);
      });
    }
  });
 
  /**
   * On 'event:loginRequest' send credentials to the server.
   */
  scope.$on('event:loginRequest', function(event, username, password) {
    var payload = $.param({j_username: username, j_password: password});
    var config = {
      headers: {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
    }
    $http.post('j_spring_security_check', payload, config).success(function(data) {
      if (data === 'AUTHENTICATION_SUCCESS') {
        scope.$broadcast('event:loginConfirmed');
      }
    });
  });
 
  /**
   * On 'logoutRequest' invoke logout on the server and broadcast 'event:loginRequired'.
   */
  scope.$on('event:logoutRequest', function() {
    $http.put('j_spring_security_logout', {}).success(function() {
      ping();
    });
  });
 
  /**
   * Ping server to figure out if user is already logged in.
   */
  function ping() {
    // console.log('PING');
/*
    $http.get('rest/ping').success(function() {
      scope.$broadcast('event:loginConfirmed');
    });*/
  }
  ping();
 
}]);