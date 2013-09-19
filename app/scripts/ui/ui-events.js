'use strict';

var eventUI = angular.module('eventUI', []);

eventUI.directive('etile', function() {
  return {
    restrict: 'E',
    replace: true,
    template:
    '<div class="tile">' +
    '<h3>{{event.title}}</h3>' +
    '<img src="{{event.picture}}" alt="{{event.title}}">' +
    '<p>{{event.teasing}}</p>' +
    '<a class="btn btn-primary btn-large" href="http://designmodo.com/flat">' +
    '<i class="icon-chevron-right icon-white"></i><i class="icon-chevron-right icon-white"></i> Inscription</a>' +
    '</div>'
  }
});
