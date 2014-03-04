'use strict';
angular.module('twitterIpp', []).directive('twitter', function(){
	return {
      restrict: 'E',
      template: "<span ng-show ='speaker.twitter'> / twitter : <a href='{{speaker.twitter | toTwitterUrl}}'>{{speaker.twitter}}</a></span>",
      replace: true
      };
});