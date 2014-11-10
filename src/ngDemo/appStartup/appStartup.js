(function () {
    "use strict";

    function startAngularApp() {
        var appContainer = $("html");
        angular.bootstrap(appContainer, ["myApp"]);

        if (window.cordova) {
            StatusBar.hide();
        }
    }

    if (window.cordova) {
        document.addEventListener("deviceready", startAngularApp, false);
    } else {
        startAngularApp();
    }
})();
