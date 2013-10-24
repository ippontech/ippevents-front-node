'use strict';

angular.module('calendar-ui', []).
  directive('calendar', function() {
  	return {
      restrict: 'E',
      scope: {
        value: '=',
        format: '=',
      	name: '@'
      },
      controller: function($scope, $element) {
	      jQuery($element).datepicker();
      },
      template: '<input type="text" ng-model="value" required class="form-control" name="{{name}}">',
      replace: true
    };
})