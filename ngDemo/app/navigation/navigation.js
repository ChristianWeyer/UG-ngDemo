myApp.controller("navbarController", function ($scope, $location) {

});

myApp.directive("ttNavbar", function () {
    return {
        replace: true,
        restrict: "EA",
        templateUrl: "app/navigation/nav.html",
        controller: "navbarController"
    };
});