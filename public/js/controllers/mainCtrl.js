!function () {
  'use strict'

  angular.module('myApp').controller('MainController',
    [ '$scope'
    , function ($scope) {
        $scope.myModel = 'some text'
      }
    ]
  )
}()
