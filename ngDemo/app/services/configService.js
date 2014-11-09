(function () {
    "use strict";

    function ConfigService($http) {
        this.servicesBaseUrl = "../";
    };

    app.module.service("configService", ConfigService());
})();
