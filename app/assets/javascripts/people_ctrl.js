/* global angular */
(function() {
  "use strict";

  angular.module("app").controller("peopleCtrl", function($scope, $timeout)  {
    $scope.peoples = [
                      {name: "Mike Yatco",
                      bio: "Aspiring programmer",
                      bioVisible: false},
                      {name: "Andy Zhao",
                      bio: "Professional Coder",
                      bioVisible: false},
                      ];

    $scope.addPeople = function(people, inputBio) {
      if (people) {
        $scope.peoples.push({name: people, 
                            bio: inputBio,
                            bioVisible: false});
        $scope.newPeople = null;
      }
    };

    $scope.toggleBio = function(person) {
      person.bioVisible = !person.bioVisible;
    };
    //   console.log(person.bioVisible);
    //   // ternary operator
    //   // boolean ? do this if true : do this if false
    //   if (person.bioVisible == true) {
    //     person.bioVisible = false;
    //   } else { 
    //     person.bioVisible = true;
    //   }
    //   console.log(person.bioVisible);
    // };

    $scope.deletePeople = function(index) {
      $scope.peoples.splice(index, 1);
    };
  });
}());