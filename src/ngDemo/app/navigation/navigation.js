(function() {
    "use strict";

    function NavbarDirective() {
        return {
            restrict: "EA",
            templateUrl: "./app/navigation/nav.html",
            controller: "navbarController"
        };
    };

    app.module.directive("ttNavbar", NavbarDirective);
})();


(function() {
    "use strict";

    function NavbarController() {
        
    };

    app.module.controller("navbarController", NavbarController);
})();
