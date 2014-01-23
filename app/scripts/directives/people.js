'use strict';

var peopleModule = angular.module('people-ui', []);

peopleModule.directive('people', function() {
  	return {
      restrict: 'E',
      scope: {
        member: '='
      },
      replace: true,
      templateUrl : "views/people.html"            
    };
})