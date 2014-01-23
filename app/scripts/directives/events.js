'use strict';

var eventnimp = angular.module('eventnimp', []);

eventnimp.directive('event', function() {
  	return {
      restrict: 'E',
     
      templateUrl: '../../views/event-ui.html' ,
      replace: true
    };
})

