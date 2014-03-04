'use strict';

angular.module('email-ui', []).directive('email', function() {
  return {
    restrict:'A',
    replace:true,
    template:'<a href="mailto:{{member.email}}">{{member.email}}</a>'
  }
});