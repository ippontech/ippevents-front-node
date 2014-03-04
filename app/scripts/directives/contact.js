'use strict';

angular.module('contact-ui', []).directive('contact', function() {
  return {
    restrict:'E',
    replace:true,
    scope:{
    	contact: "=value"
    },
    template:'<span>Email:&nbsp;<email  value="contact.email"></email><twitter value="contact.twitter"></twitter></span>'
  }
});