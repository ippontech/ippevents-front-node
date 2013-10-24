
// services local
var SERVICES_URI = 'http://localhost:3000';
// services Heroku cloud
// var SERVICES_URI = 'http://ippevents-services-node.herokuapp.com';

angular.module('connectionServices', []).factory('Connections', function($http) {

    var API_URI = SERVICES_URI + '/';

    return {

        logout : function() {
            return $http.get(API_URI + 'logout');
        },

        login : function(user) {
        var payload = $.param({username: user.login, password: user.password});
        var config = {
          headers: {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'},
              withCredentials : true
        }
        return $http.post(API_URI + 'login', payload, config);

//            return  $http.post(API_URI + 'login', {username:user.login, password:user.password}, {withCredentials : true});
        }

   };

});

angular.module('homeServices', ['ngResource']).factory('Home', function($resource) {
  return $resource('/scripts/services/website.json');
});

angular.module('eventsServices', []).factory('Events', function($http) {
    
    var API_URI = SERVICES_URI + '/events';
    
    return {

        fetch : function() {
            return $http.get(API_URI);
        },

        create : function(event) {
            return  $http.post(API_URI, event);
        },

        delete  : function(id) {
            return $http.delete(API_URI + '/' + id);
        },

        fetchOne : function(id) {
            return $http.get(API_URI + '/' + id);
        },

        fetchPerformance : function(eventId, performanceId) {
            return $http.get(API_URI + '/' + eventId + '/performances/' + performanceId);
        },

        update : function(event) {
           return $http.put(API_URI + '/' + event._id, event);
       }

   };

});

angular.module('performancesServices', ['ngResource']).factory('Performance', function($resource) {
    return $resource('/scripts/services/performance.json');
})

// angular.module('membersServices', ['ngResource'])
// .factory('Members', function($resource) {
//   return $resource('/scripts/services/members.json');
// });

angular.module('membersServices', []).factory('Members', function($http) {
    
    var API_URI = SERVICES_URI + '/members';
    
    return {

        fetch : function() {
            return $http.get(API_URI);
        },

        create : function(member) {
            return  $http.post(API_URI, member);
        },

        delete  : function(id) {
            return $http.delete(API_URI + '/' + id);
        },

        fetchOne : function(id) {
            return $http.get(API_URI + '/' + id);
        },

        update : function(member) {
           return $http.put(API_URI + '/' + member._id, member);
       }

   };

});

angular.module('speakersServices', []).factory('Speakers', function($http) {
    
    var API_URI = SERVICES_URI + '/findAllSpeakers';
    var API_URI_PERFORMANCES = SERVICES_URI + '/getPerformancesBySpeaker/';
    
    return {

        fetch : function() {
            return $http.get(API_URI);
        },

        findPerformances : function(firstname, lastname) {
            return $http.get(API_URI_PERFORMANCES + lastname + '/' + firstname);
        }

   };

});


// angular.module('personServices', ['ngResource'])
// .factory('Persons', function($resource) {
//   return $resource('/scripts/services/persons.json');
// });

angular.module('personsServices', []).factory('Persons', function($http) {
    
    var API_URI_PERSON = SERVICES_URI + '/person';
    var API_URI_PERSONS = SERVICES_URI + '/persons';
    
    return {

        fetch : function() {
            return $http.get(API_URI_PERSONS);
        },

        create : function(person) {
            return  $http.post(API_URI_PERSON, person);
        },

        delete  : function(id) {
            return $http.delete(API_URI_PERSON + '/' + id);
        },

        fetchOne : function(id) {
            return $http.get(API_URI_PERSON + '/' + id);
        },

        update : function(person) {
           return $http.put(API_URI_PERSON + '/' + person._id, person);
       }
   };
});