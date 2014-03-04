'use strict';
angular.module('twitterIpp', []).directive('twitter', function(){
	return {
      restrict: 'E',
      scope:{
      	value:"=value"
      },
      template: "<span ng-show ='value'>Twitter:&nbsp;<a href='{{value | toTwitterUrl}}'>{{value}}</a></span>",
      replace: true
      };
});