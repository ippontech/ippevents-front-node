'use strict';

angular.module('email-ui', []).directive('email', function() {
  return {
    restrict:'E',
    replace:true,
    scope:{
    	value: "=value"
    },
    template:'<a href="mailto:{{value}}">{{value}}</a>'
  }
});