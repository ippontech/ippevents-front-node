'use strict';

app.controller('LoginCtrl', function ($scope, Connections) {

  $scope.login = function(user) {
    $scope.master= angular.copy(user);

    console.log(user.login + ' logging in');
    Connections.login(user)
	    .success(function(){
	      console.log('success');
	      $scope.user = {};
	    })
	    .error(function(resp, statusCode){
	      console.log(resp);
	    });

  };

});
