"use strict";

app.filter('stars', function () {

  // var STARS = {
  //     0: '<i class=\"icon-star-empty\"></i> <i class=\"icon-star-empty\"></i> <i class=\"icon-star-empty\"></i> <i class=\"icon-star-empty\"></i> <i class=\"icon-star-empty\"></i>',
  // };

  return function(grade) {

    var stars = '';

    for (var i = 0; i < 5; i++) {

      stars += '<a ng-click="gradePerformance(' + (i + 1) ')">';

      // if (grade > i) {
        stars += ' <i class=\"icon-star\"></i>';
      // } else {
      //   stars += ' <i class=\"icon-star-empty\"></i>';
      // };
      stars += '</a>';
    };

    // for (var i = 0; i < grade; i++) {
    //     stars += ' <i class=\"icon-star\"></i>';
    // };
    // for (var i = 0; i < 5 - grade; i++) {
    //     stars += ' <i class=\"icon-star-empty\"></i>';
    // };

    return stars;
  };

  // return 
});



// angularMovieApp.filter('poster', function () {
//     return function(posterUrl) {
//         if(!posterUrl){
//             return "img/no-poster.jpg";
//         } else {
//             return posterUrl;
//         }
//     };
// });