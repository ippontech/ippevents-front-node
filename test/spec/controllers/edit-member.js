'use strict';

describe('Controller: EditMemberCtrl', function () {

  // load the controller's module
  beforeEach(module('ippeventsApp'));

  var EditMemberCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EditMemberCtrl = $controller('EditMemberCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
