'use strict';

describe('Controller: PerformanceCtrl', function () {

  // load the controller's module
  beforeEach(module('ippeventsApp'));

  var PerformanceCtrl,
    scope,
    EventMock;

  beforeEach(function() {
    EventMock = {
      findOne: function() {
        return {
          "_id": 1,
          "performances": [
            {
              _id: 2,
              titre: "TitreOK"
            },
            {
              _id: 3,
              titre: "TitreKO"
            }
          ]
        };
      }
    };
  });

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();

    PerformanceCtrl = $controller('PerformanceCtrl', {
      $scope: scope,
      $routeParams: { "idEvent" : "1", "idPerf" : "2" },
      $log: ngMock.$log,
      Event: EventMock
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.performance.titre).toBe("TitreOK");
  });
});
