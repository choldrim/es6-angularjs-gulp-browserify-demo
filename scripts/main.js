"use strict";

import angular from "angular";

angular.module("MainApp", [])
.controller("MainController", ($scope, $timeout)=>{
    $scope.name = "world";
    $timeout(()=>{
        $scope.name = "angular";
    }, 5000)
});
