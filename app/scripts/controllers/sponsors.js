'use strict';

app.controller('SponsorsCtrl', function ($scope, Members) {

  // #1 : données en dur dans le controller
  $scope.sponsors =
  [
                      { "name":"ippon", "logo": "https://lh4.googleusercontent.com/-0EOnu_MOtMI/AAAAAAAAAAI/AAAAAAAAAAA/4Zft03miMEE/s48-c-k/photo.jpg"},
                      { "name":"devoxx", "logo": "http://blog.soat.fr/wp-content/uploads/2011/11/devoxx1.jpg"},
                      { "name":"google", "logo": "http://www.actupc.info/wp-content/uploads/icon_googlesearch.jpg"},
                      { "name":"castorama", "logo": "http://www.shopping-player.com/upload/logo%20casto.jpg"}
];

});