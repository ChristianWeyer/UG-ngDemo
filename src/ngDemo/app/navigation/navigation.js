(function() {
    "use strict";

    function NavbarDirective() {
        return {
            restrict: "E",
            templateUrl: "./app/navigation/nav.html",
            link: function (scope, elem, attrs) {
                // TODO: use elem.find('.side-collapse') ...
                $(window).bind("resize", function () {
                    collapse();
                });

                collapse();
            }
        };
    };

    function collapse() {
        var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

        if (width < 768) {
            $('div.sidebar-collapse').addClass('collapse');
        } else {
            $('div.sidebar-collapse').removeClass('collapse');
        }
    };

    app.module.directive("ttNavbar", NavbarDirective);
})();
